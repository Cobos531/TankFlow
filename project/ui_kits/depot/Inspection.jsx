/* __IIFE__ */
;(function(){
// TankFlow UI kit — Inspección & definición de reparación.
const { Card, SectionHeader, Input, Select, Button, Switch, StatusBadge, RepairTag } = window.TankFlowDesignSystem_32ec47;

const REPAIRS = [
  { type: 'estructural', label: 'Estructural', icon: 'hard-hat', desc: 'Paneles, esquineros, piso, techo' },
  { type: 'interior', label: 'Interior', icon: 'package', desc: 'Revestimiento, listones, ventilación' },
  { type: 'rotulacion', label: 'Rotulación', icon: 'tag', desc: 'Placas, marcas, números ISO' },
  { type: 'pintura', label: 'Pintura', icon: 'paint-roller', desc: 'Tratamiento y repintado' },
  { type: 'regulatoria', label: 'Insp. regulatoria', icon: 'shield-check', desc: 'CSC / IICL / ensayos' },
];

const repColors = {
  estructural: 'var(--rep-estructural)', interior: 'var(--rep-interior)',
  rotulacion: 'var(--rep-rotulacion)', pintura: 'var(--rep-pintura)', regulatoria: 'var(--rep-regulatoria)',
};

function RepairOption({ r, selected, onToggle }) {
  return (
    <button
      onClick={onToggle}
      style={{
        display: 'flex', alignItems: 'flex-start', gap: 12, textAlign: 'left', cursor: 'pointer',
        padding: '14px', borderRadius: 'var(--radius-md)',
        border: '1px solid ' + (selected ? repColors[r.type] : 'var(--border-default)'),
        background: selected ? 'color-mix(in srgb, ' + repColors[r.type] + ' 12%, transparent)' : 'var(--surface-raised)',
        transition: 'border-color 120ms, background 120ms',
      }}
    >
      <span style={{ width: 36, height: 36, flex: 'none', borderRadius: 'var(--radius-sm)', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'color-mix(in srgb, ' + repColors[r.type] + ' 18%, transparent)' }}>
        <Icon name={r.icon} size={19} color={repColors[r.type]} />
      </span>
      <span style={{ flex: 1 }}>
        <span style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <span style={{ fontWeight: 600, fontSize: 'var(--text-base)' }}>{r.label}</span>
          {selected && <Icon name="check" size={15} color={repColors[r.type]} />}
        </span>
        <span style={{ display: 'block', fontSize: 'var(--text-xs)', color: 'var(--text-muted)', marginTop: 3 }}>{r.desc}</span>
      </span>
    </button>
  );
}

function Inspection({ go }) {
  const [needsRepair, setNeedsRepair] = React.useState(true);
  const [selected, setSelected] = React.useState(['estructural']);
  const toggle = (t) => setSelected((s) => s.includes(t) ? s.filter((x) => x !== t) : [...s, t]);

  return (
    <div>
      <SectionHeader
        eyebrow="Operación · Inspección"
        title="Inspección de equipo"
        subtitle="MSKU 204418-7 · 40HC · Maersk · posición B3-14"
        actions={<StatusBadge status="inspeccion-pendiente" />}
      />
      <div style={{ display: 'grid', gridTemplateColumns: '1.3fr 1fr', gap: '20px', alignItems: 'start' }}>
        {/* left: checklist + decision */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <Card title="Checklist de inspección">
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              {[
                ['Estructura externa y esquineros', 'fail'],
                ['Pisos y largueros', 'ok'],
                ['Puertas y burletes', 'ok'],
                ['Interior / revestimiento', 'warn'],
                ['Marcas, placas y CSC', 'ok'],
              ].map(([label, st], i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '12px 2px', borderBottom: i < 4 ? '1px solid var(--border-subtle)' : 'none' }}>
                  <span style={{ fontSize: 'var(--text-base)' }}>{label}</span>
                  <StatusBadge tone={st === 'ok' ? 'ok' : st === 'warn' ? 'warn' : 'critical'} dot>
                    {st === 'ok' ? 'Conforme' : st === 'warn' ? 'Observado' : 'No conforme'}
                  </StatusBadge>
                </div>
              ))}
            </div>
          </Card>

          <Card>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <div>
                <div style={{ fontWeight: 600, fontSize: 'var(--text-md)' }}>¿El equipo requiere reparación?</div>
                <div style={{ fontSize: 'var(--text-sm)', color: 'var(--text-muted)', marginTop: 3 }}>Define el flujo siguiente del contenedor</div>
              </div>
              <Switch checked={needsRepair} onChange={(e) => setNeedsRepair(e.target.checked)} label={needsRepair ? 'Sí' : 'No'} />
            </div>
          </Card>
        </div>

        {/* right: repair definition */}
        <Card title="Definición de reparación">
          {needsRepair ? (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <div style={{ fontSize: 'var(--text-xs)', color: 'var(--text-secondary)', fontWeight: 500 }}>Tipo de reparación (uno o varios)</div>
              {REPAIRS.map((r) => (
                <RepairOption key={r.type} r={r} selected={selected.includes(r.type)} onToggle={() => toggle(r.type)} />
              ))}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, marginTop: 4 }}>
                <Select label="Prioridad" options={['Normal', 'Alta', 'Urgente']} />
                <Input label="ETA repuesto" mono placeholder="2026-06-21" />
              </div>
            </div>
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 12, padding: '24px 0', textAlign: 'center' }}>
              <Icon name="check-check" size={34} color={'var(--green-400)'} />
              <div style={{ color: 'var(--text-secondary)' }}>Sin reparación. El equipo pasa directo a <strong style={{ color: 'var(--green-400)' }}>Disponible</strong> para despacho.</div>
            </div>
          )}
        </Card>
      </div>

      <div style={{ display: 'flex', gap: 10, justifyContent: 'flex-end', marginTop: 20 }}>
        <Button variant="ghost" onClick={() => go('dashboard')}>Cancelar</Button>
        {needsRepair
          ? <Button variant="primary" iconLeft={<Icon name="wrench" />} onClick={() => go('detail')}>Crear orden de reparación</Button>
          : <Button variant="success" iconLeft={<Icon name="check" />} onClick={() => go('dashboard')}>Marcar como disponible</Button>}
      </div>
    </div>
  );
}

Object.assign(window, { Inspection });

})();
