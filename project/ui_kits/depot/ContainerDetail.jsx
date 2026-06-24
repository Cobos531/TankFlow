/* __IIFE__ */
;(function(){
// TankFlow UI kit — Detalle de contenedor (tracking / timeline).
const { Card, SectionHeader, Button, StatusBadge, RepairTag, AgingIndicator, IconButton } = window.TankFlowDesignSystem_32ec47;

function TimelineRow({ ev, last }) {
  const color = ev.done ? 'var(--green-500)' : ev.active ? 'var(--amber-500)' : 'var(--steel-600)';
  return (
    <div style={{ display: 'flex', gap: 14 }}>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flex: 'none' }}>
        <div style={{
          width: 32, height: 32, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center',
          background: ev.done ? 'rgba(45,212,160,0.14)' : ev.active ? 'rgba(245,166,35,0.16)' : 'var(--surface-raised)',
          border: '1px solid ' + (ev.active ? 'var(--amber-500)' : 'transparent'),
        }}>
          <Icon name={ev.icon} size={16} style={{ color }} />
        </div>
        {!last && <div style={{ width: 2, flex: 1, minHeight: 26, background: ev.done ? 'var(--green-500)' : 'var(--steel-700)', opacity: ev.done ? 0.5 : 1 }}></div>}
      </div>
      <div style={{ paddingBottom: last ? 0 : 18, flex: 1 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <span style={{ fontWeight: 600, fontSize: 'var(--text-base)', color: ev.done || ev.active ? 'var(--text-primary)' : 'var(--text-muted)' }}>{ev.title}</span>
          {ev.active && <StatusBadge tone="warn" dot>En curso</StatusBadge>}
        </div>
        <div style={{ display: 'flex', gap: 12, marginTop: 3, fontSize: 'var(--text-xs)', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
          <span>{ev.time}</span>{ev.who && <span>· {ev.who}</span>}
        </div>
        {ev.note && <div style={{ fontSize: 'var(--text-sm)', color: 'var(--text-secondary)', marginTop: 5 }}>{ev.note}</div>}
      </div>
    </div>
  );
}

function InfoRow({ k, v, mono }) {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', gap: 12, padding: '9px 0', borderBottom: '1px solid var(--border-subtle)' }}>
      <span style={{ fontSize: 'var(--text-sm)', color: 'var(--text-muted)' }}>{k}</span>
      <span style={{ fontSize: 'var(--text-sm)', fontWeight: 500, fontFamily: mono ? 'var(--font-mono)' : 'inherit', textAlign: 'right' }}>{v}</span>
    </div>
  );
}

function ContainerDetail({ go }) {
  const D = window.TF_DATA;
  return (
    <div>
      <button onClick={() => go('dashboard')} style={{ display: 'flex', alignItems: 'center', gap: 6, background: 'none', border: 'none', color: 'var(--text-muted)', cursor: 'pointer', fontFamily: 'var(--font-body)', fontSize: 'var(--text-sm)', marginBottom: 14, padding: 0 }}>
        <Icon name="arrow-left" size={15} /> Volver al panel
      </button>

      <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 16, marginBottom: 22 }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <h1 style={{ margin: 0, fontFamily: 'var(--font-mono)', fontSize: 'var(--text-3xl)', fontWeight: 600, letterSpacing: '0.02em' }}>MSKU 204418-7</h1>
            <StatusBadge status="reparacion-pendiente" />
          </div>
          <div style={{ color: 'var(--text-muted)', marginTop: 6, fontSize: 'var(--text-sm)' }}>40HC · Maersk · Orden de reparación #RP-1183 · posición B3-14</div>
        </div>
        <div style={{ display: 'flex', gap: 10 }}>
          <Button variant="secondary" iconLeft={<Icon name="package-search" />}>Repuesto recibido</Button>
          <Button variant="success" iconLeft={<Icon name="check" />}>Finalizar reparación</Button>
        </div>
      </div>

      {/* critical banner */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '13px 16px', borderRadius: 'var(--radius-md)', background: 'rgba(244,80,62,0.10)', border: '1px solid rgba(244,80,62,0.32)', marginBottom: 22 }}>
        <Icon name="clock-alert" size={20} color={'var(--red-400)'} style={{ flex: 'none' }} />
        <div style={{ flex: 1, fontSize: 'var(--text-sm)' }}>
          <strong style={{ color: 'var(--red-400)' }}>31 días en Reparación Pendiente sin avanzar.</strong> <span style={{ color: 'var(--text-secondary)' }}>Reparación detenida esperando repuesto estructural (ETA 21 jun). Supera el umbral de 30 días.</span>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: '20px', alignItems: 'start' }}>
        <Card title="Tracking del equipo">
          <div style={{ paddingTop: 4 }}>
            {D.timeline.map((ev, i) => <TimelineRow key={i} ev={ev} last={i === D.timeline.length - 1} />)}
          </div>
        </Card>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <Card title="Reparación">
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                <RepairTag type="estructural" />
                <RepairTag type="pintura" />
              </div>
              <AgingIndicator days={31} />
            </div>
          </Card>
          <Card title="Datos del equipo">
            <div>
              <InfoRow k="Código ISO" v="MSKU 204418-7" mono />
              <InfoRow k="Tipo" v="40HC" />
              <InfoRow k="Naviera" v="Maersk" />
              <InfoRow k="Ingreso (gate-in)" v="2026-06-12 08:41" mono />
              <InfoRow k="ETA repuesto" v="2026-06-21" mono />
              <InfoRow k="Inspector" v="J. Cáceres" />
              <InfoRow k="Posición" v="B3-14" mono />
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}

Object.assign(window, { ContainerDetail });

})();
