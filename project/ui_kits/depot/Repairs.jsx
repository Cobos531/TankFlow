/* __IIFE__ */
;(function(){
// TankFlow UI kit — Formularios de registro de trabajo por proceso de reparación.
const { Card, SectionHeader, Input, Select, Button, Switch, StatusBadge, RepairTag } = window.TankFlowDesignSystem_32ec47;

const repColors = {
  estructural: 'var(--rep-estructural)', interior: 'var(--rep-interior)',
  rotulacion: 'var(--rep-rotulacion)', pintura: 'var(--rep-pintura)',
};

// Definición de cada proceso: tareas (checklist) + materiales sugeridos.
const PROCESSES = {
  rotulacion: {
    label: 'Reparación de Rotulación', short: 'Rotulación', icon: 'tag',
    desc: 'Placas, marcas y rótulos del tank container',
    tasks: [
      'Repintado de número ISO 6346',
      'Rótulos de mercancía peligrosa (IMDG / placas-etiqueta)',
      'Número UN y panel naranja',
      'Actualización de placa CSC / data plate',
      'Marcas de última prueba (2.5 / 5 años)',
    ],
    materials: ['Plantillas de números', 'Pintura de marcado', 'Placa CSC', 'Set de placas-etiqueta'],
  },
  estructural: {
    label: 'Reparación Estructural', short: 'Estructural', icon: 'hard-hat',
    desc: 'Marco ISO, soportes del tanque y accesos',
    tasks: [
      'Enderezado del marco ISO',
      'Reemplazo de esquineros / cantoneras',
      'Reparación de cunas y soportes del tanque',
      'Escalera, pasarela y barandas',
      'Tratamiento anticorrosivo de soldaduras',
    ],
    materials: ['Esquinero ISO', 'Perfil de marco', 'Soporte / cuna', 'Electrodos / gas'],
  },
  interior: {
    label: 'Reparación Interior', short: 'Interior', icon: 'package',
    desc: 'Revestimiento interno, válvulas y estanqueidad',
    tasks: [
      'Inspección y reparación de revestimiento interno',
      'Limpieza y desgasificación del tanque',
      'Reparación de válvula de fondo y descarga',
      'Sellado de boca de hombre (manlid) y tapa',
      'Prueba de estanqueidad interior',
    ],
    materials: ['Revestimiento interno', 'Juntas / o-rings', 'Válvula de fondo', 'Sellador'],
  },
  pintura: {
    label: 'Pintura', short: 'Pintura', icon: 'paint-roller',
    desc: 'Tratamiento y repintado del marco y cilindro',
    tasks: [
      'Lijado y preparación del marco',
      'Imprimación (primer) anticorrosiva',
      'Pintura de acabado del marco',
      'Repintado del cilindro / tanque',
      'Control de espesor y secado',
    ],
    materials: ['Imprimación anticorrosiva', 'Pintura de acabado', 'Disolvente', 'Discos de lija'],
  },
};

const ORDER = ['rotulacion', 'estructural', 'interior', 'pintura'];
const CYCLE = ['pendiente', 'curso', 'hecho'];
const STATE_META = {
  pendiente: { tone: 'neutral', label: 'Pendiente' },
  curso: { tone: 'warn', label: 'En curso' },
  hecho: { tone: 'ok', label: 'Hecho' },
};

function ProcessTab({ id, active, onClick }) {
  const p = PROCESSES[id];
  const [hover, setHover] = React.useState(false);
  const c = repColors[id];
  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        display: 'flex', alignItems: 'center', gap: 9, cursor: 'pointer',
        padding: '9px 14px', borderRadius: 'var(--radius-md)',
        fontFamily: 'var(--font-body)', fontSize: 'var(--text-sm)', fontWeight: 600,
        border: '1px solid ' + (active ? c : 'var(--border-default)'),
        background: active ? 'color-mix(in srgb, ' + c + ' 14%, transparent)' : hover ? 'var(--surface-hover)' : 'var(--surface-raised)',
        color: active ? 'var(--text-primary)' : 'var(--text-secondary)',
        transition: 'border-color 120ms, background 120ms, color 120ms', whiteSpace: 'nowrap',
      }}
    >
      <span style={{ width: 9, height: 9, borderRadius: 2, background: c, flex: 'none' }}></span>
      {p.short}
    </button>
  );
}

function TaskRow({ label, state, onCycle, last }) {
  const meta = STATE_META[state];
  const [hover, setHover] = React.useState(false);
  return (
    <button
      onClick={onCycle}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 12,
        width: '100%', textAlign: 'left', cursor: 'pointer', border: 'none',
        background: hover ? 'var(--surface-hover)' : 'transparent',
        padding: '13px 8px', margin: '0 -8px', width: 'calc(100% + 16px)',
        borderBottom: last ? 'none' : '1px solid var(--border-subtle)',
        fontFamily: 'var(--font-body)', transition: 'background 120ms',
      }}
    >
      <span style={{ display: 'flex', alignItems: 'center', gap: 11 }}>
        <Icon name={state === 'hecho' ? 'check-circle-2' : state === 'curso' ? 'loader' : 'circle'} size={18}
          color={state === 'hecho' ? 'var(--green-400)' : state === 'curso' ? 'var(--amber-400)' : 'var(--text-muted)'} />
        <span style={{ fontSize: 'var(--text-base)', color: state === 'pendiente' ? 'var(--text-secondary)' : 'var(--text-primary)' }}>{label}</span>
      </span>
      <StatusBadge tone={meta.tone} dot>{meta.label}</StatusBadge>
    </button>
  );
}

function RepairForm({ go, container }) {
  const initProc = container && PROCESSES[container.repairType] ? container.repairType : 'rotulacion';
  const [active, setActive] = React.useState(initProc);
  const [states, setStates] = React.useState({});
  const [waiting, setWaiting] = React.useState(false);
  const [reqForm, setReqForm] = React.useState({ part: '', qty: '', urg: 'Normal', note: '' });
  const [requests, setRequests] = React.useState([
    { part: 'Junta de manlid 480 mm', qty: '2', urg: 'Alta', estado: 'En compras' },
  ]);

  React.useEffect(() => {
    if (container && PROCESSES[container.repairType]) setActive(container.repairType);
  }, [container]);

  const setReq = (k, v) => setReqForm((f) => ({ ...f, [k]: v }));
  const submitReq = () => {
    if (!reqForm.part.trim()) return;
    setRequests((r) => [{ part: reqForm.part.trim(), qty: reqForm.qty || '1', urg: reqForm.urg, estado: 'Solicitado' }, ...r]);
    setReqForm({ part: '', qty: '', urg: 'Normal', note: '' });
  };

  const p = PROCESSES[active];
  const c = repColors[active];
  // estado por tarea, namespaced por proceso
  const key = (i) => active + ':' + i;
  const getState = (i) => states[key(i)] || 'pendiente';
  const cycle = (i) => setStates((s) => {
    const cur = s[key(i)] || 'pendiente';
    const next = CYCLE[(CYCLE.indexOf(cur) + 1) % CYCLE.length];
    return { ...s, [key(i)]: next };
  });

  const done = p.tasks.filter((_, i) => getState(i) === 'hecho').length;
  const total = p.tasks.length;
  const pct = Math.round((done / total) * 100);
  const allDone = done === total;

  return (
    <div>
      <SectionHeader
        eyebrow="Reparación · Registro de trabajo"
        title={p.label}
        subtitle={container
          ? `${container.code} · ${container.tipo} · ${container.naviera} · posición ${container.ubicacion}`
          : "TGHU 785530-2 · T11 (40' Tank · 26 000 L) · Stolt · Orden #RP-1183 · posición B3-14"}
        actions={<StatusBadge status="en-reparacion" />}
      />

      {/* selector de proceso */}
      <div style={{ display: 'flex', gap: 10, marginBottom: 22, flexWrap: 'wrap' }}>
        {ORDER.map((id) => <ProcessTab key={id} id={id} active={id === active} onClick={() => setActive(id)} />)}
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1.3fr 1fr', gap: '20px', alignItems: 'start' }}>
        {/* izquierda: tareas */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <Card
            title={'Tareas · ' + p.short}
            actions={<span style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-xs)', color: 'var(--text-muted)' }}>{done}/{total} hechas</span>}
          >
            {/* barra de avance */}
            <div style={{ height: 6, borderRadius: 999, background: 'var(--bg-sunken)', overflow: 'hidden', marginBottom: 6 }}>
              <div style={{ height: '100%', width: pct + '%', background: c, borderRadius: 999, transition: 'width 280ms var(--ease-out)' }}></div>
            </div>
            <div style={{ fontSize: 'var(--text-xs)', color: 'var(--text-muted)', marginBottom: 6 }}>
              Tocá una tarea para avanzar su estado: Pendiente → En curso → Hecho.
            </div>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              {p.tasks.map((t, i) => (
                <TaskRow key={i} label={t} state={getState(i)} onCycle={() => cycle(i)} last={i === total - 1} />
              ))}
            </div>
          </Card>

          <Card title="Materiales y repuestos utilizados">
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                {p.materials.map((m, i) => (
                  <span key={i} style={{
                    display: 'inline-flex', alignItems: 'center', gap: 7, padding: '6px 11px',
                    borderRadius: 'var(--radius-md)', border: '1px solid var(--border-default)',
                    background: 'var(--surface-raised)', fontSize: 'var(--text-sm)', color: 'var(--text-secondary)',
                  }}>
                    <Icon name="package" size={14} color={c} />{m}
                  </span>
                ))}
              </div>
              <Input label="Agregar material / repuesto" placeholder="Descripción y cantidad…" icon={<Icon name="plus" />} />
            </div>
          </Card>
        </div>

        {/* derecha: registro */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <Card title="Registro de trabajo">
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <Select label="Responsable" placeholder="Asignar operario…" options={['M. Ferreyra', 'J. Cáceres', 'R. Pinto', 'D. Sosa', 'Cuadrilla A', 'Cuadrilla B']} />
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
                <Input label="Inicio" mono placeholder="2026-06-23" icon={<Icon name="calendar" />} />
                <Input label="Horas-hombre" mono placeholder="0.0" />
              </div>
              <Select label="Prioridad" options={['Normal', 'Alta', 'Urgente']} />
              <Input label="Observaciones del trabajo" placeholder="Detalle de lo realizado, hallazgos…" />
            </div>
          </Card>

          <Card title="Espera de repuesto">
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 12 }}>
              <div>
                <div style={{ fontWeight: 600, fontSize: 'var(--text-base)' }}>¿En espera de repuesto?</div>
                <div style={{ fontSize: 'var(--text-xs)', color: 'var(--text-muted)', marginTop: 3 }}>Detiene el avance y se cuenta la antigüedad</div>
              </div>
              <Switch checked={waiting} onChange={(e) => setWaiting(e.target.checked)} label={waiting ? 'Sí' : 'No'} />
            </div>
            {waiting && (
              <div style={{ marginTop: 14, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
                <Input label="Repuesto" placeholder="Válvula de fondo" />
                <Input label="ETA" mono placeholder="2026-07-02" />
              </div>
            )}
          </Card>

          <Card
            title={<span style={{ display: 'flex', alignItems: 'center', gap: 8 }}><Icon name="package-plus" size={18} color={'var(--amber-400)'} />Solicitar repuesto</span>}
            actions={requests.length > 0 ? <span style={{ fontFamily: 'var(--font-mono)', fontSize: 12, fontWeight: 600, color: 'var(--text-secondary)', background: 'var(--surface-raised)', padding: '2px 9px', borderRadius: 'var(--radius-pill)' }}>{requests.length}</span> : null}
          >
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              <Input label="Repuesto / parte" placeholder='Ej. Válvula de fondo 3"' icon={<Icon name="package" />}
                value={reqForm.part} onChange={(e) => setReq('part', e.target.value)} />
              <div style={{ display: 'grid', gridTemplateColumns: '90px 1fr', gap: 12 }}>
                <Input label="Cantidad" mono placeholder="1" value={reqForm.qty} onChange={(e) => setReq('qty', e.target.value)} />
                <Select label="Urgencia" options={['Normal', 'Alta', 'Crítica']} value={reqForm.urg} onChange={(e) => setReq('urg', e.target.value)} />
              </div>
              <Input label="Nota para compras" placeholder="Especificaciones, medidas, proveedor…"
                value={reqForm.note} onChange={(e) => setReq('note', e.target.value)} />
              <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                <Button variant="secondary" size="sm" iconLeft={<Icon name="send" />} disabled={!reqForm.part.trim()} onClick={submitReq}>Enviar solicitud</Button>
              </div>
            </div>

            {requests.length > 0 && (
              <div style={{ marginTop: 14, paddingTop: 14, borderTop: '1px solid var(--border-subtle)', display: 'flex', flexDirection: 'column', gap: 8 }}>
                {requests.map((r, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                    <Icon name="package" size={15} color={'var(--text-muted)'} />
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <div style={{ fontSize: 'var(--text-sm)', color: 'var(--text-primary)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{r.part}</div>
                      <div style={{ fontSize: '11px', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>x{r.qty} · {r.urg}</div>
                    </div>
                    <StatusBadge tone={r.estado === 'Solicitado' ? 'warn' : 'neutral'} dot>{r.estado}</StatusBadge>
                  </div>
                ))}
              </div>
            )}
          </Card>
        </div>
      </div>

      <div style={{ display: 'flex', gap: 10, justifyContent: 'flex-end', marginTop: 20 }}>
        <Button variant="ghost" onClick={() => go('detail')}>Cancelar</Button>
        <Button variant="secondary" iconLeft={<Icon name="save" />} onClick={() => go('detail')}>Guardar avance</Button>
        <Button variant="success" iconLeft={<Icon name="check" />} disabled={!allDone} onClick={() => go('detail')}>
          {allDone ? 'Finalizar ' + p.short.toLowerCase() : 'Completar tareas para finalizar'}
        </Button>
      </div>
    </div>
  );
}

Object.assign(window, { RepairForm });

})();
