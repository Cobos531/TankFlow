/* __IIFE__ */
;(function(){
// TankFlow UI kit — Dashboard (panel de control con alertas de antigüedad).
const { Card, SectionHeader, StatCard, StatusBadge, RepairTag, AgingIndicator, Button, Switch, IconButton } = window.TankFlowDesignSystem_32ec47;

function DistBar({ label, value, max, color, tone }) {
  const pct = Math.round((value / max) * 100);
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
      <div style={{ width: 120, flex: 'none', fontSize: 'var(--text-sm)', color: 'var(--text-secondary)' }}>{label}</div>
      <div style={{ flex: 1, height: 8, background: 'var(--steel-800)', borderRadius: 'var(--radius-pill)', overflow: 'hidden' }}>
        <div style={{ width: pct + '%', height: '100%', background: color, borderRadius: 'var(--radius-pill)' }}></div>
      </div>
      <div style={{ width: 36, textAlign: 'right', fontFamily: 'var(--font-mono)', fontSize: 'var(--text-sm)', fontWeight: 600 }}>{value}</div>
    </div>
  );
}

function Dashboard({ go }) {
  const D = window.TF_DATA;
  const [onlyCritical, setOnlyCritical] = React.useState(false);

  const distColors = {
    'inspeccion-pendiente': 'var(--steel-400)', 'reparacion-pendiente': 'var(--amber-500)',
    'en-reparacion': 'var(--blue-500)', 'disponible': 'var(--green-500)',
  };
  const repColors = {
    estructural: 'var(--rep-estructural)', interior: 'var(--rep-interior)',
    rotulacion: 'var(--rep-rotulacion)', pintura: 'var(--rep-pintura)', regulatoria: 'var(--rep-regulatoria)',
  };

  let aging = D.containers
    .filter((c) => c.status !== 'disponible')
    .sort((a, b) => b.daysInStatus - a.daysInStatus);
  if (onlyCritical) aging = aging.filter((c) => c.daysInStatus >= 30);
  aging = aging.slice(0, 8);

  const maxDist = Math.max(...D.distribution.map((d) => d.value));
  const maxRep = Math.max(...D.byRepair.map((d) => d.value));

  const th = { textAlign: 'left', padding: '10px 14px', fontSize: '10px', fontFamily: 'var(--font-mono)', textTransform: 'uppercase', letterSpacing: '0.07em', color: 'var(--text-muted)', fontWeight: 600, borderBottom: '1px solid var(--border-subtle)', whiteSpace: 'nowrap' };
  const td = { padding: '12px 14px', borderBottom: '1px solid var(--border-subtle)', verticalAlign: 'middle' };

  return (
    <div>
      <SectionHeader
        eyebrow="Patio · Depósito Norte"
        title="Dashboard"
        subtitle="142 equipos en patio · actualizado hace 4 min"
        actions={<>
          <Button variant="secondary" size="md" iconLeft={<Icon name="clipboard-check" />} onClick={() => go('inspection')}>Inspección</Button>
          <Button size="md" iconLeft={<Icon name="log-in" />} onClick={() => go('intake')}>Registrar ingreso</Button>
        </>}
      />

      {/* KPI row */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '16px', marginBottom: '20px' }}>
        <StatCard label="En patio" value="142" icon={<Icon name="container" />} delta="8 ingresos hoy" deltaDir="up" />
        <StatCard label="En reparación" value="57" variant="accent" icon={<Icon name="wrench" />} note="45 reparación pendiente" />
        <StatCard label="Despachados hoy" value="14" icon={<Icon name="truck" />} delta="vs 11 ayer" deltaDir="up" />
        <StatCard label="+30 días en reparación" value={String(D.kpis.masDe30)} variant="critical" icon={<Icon name="clock-alert" />} note="requieren atención" />
      </div>

      {/* main grid */}
      <div style={{ display: 'grid', gridTemplateColumns: '1.7fr 1fr', gap: '20px', alignItems: 'start' }}>
        {/* aging alert table */}
        <Card
          bodyFlush
          title={<span style={{ display: 'flex', alignItems: 'center', gap: 8 }}><Icon name="clock-alert" size={18} color={'var(--red-400)'} />Equipos demorados</span>}
          actions={<div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
            <Switch label="Solo +30 días" checked={onlyCritical} onChange={(e) => setOnlyCritical(e.target.checked)} />
            <Button variant="ghost" size="sm" onClick={() => go('aging')}>Ver todos</Button>
          </div>}
        >
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr>
                <th style={th}>Contenedor</th>
                <th style={th}>Reparación</th>
                <th style={th}>Estado</th>
                <th style={th}>Antigüedad</th>
                <th style={{ ...th, textAlign: 'right' }}></th>
              </tr>
            </thead>
            <tbody>
              {aging.map((c) => (
                <tr key={c.id} style={{ cursor: 'pointer' }}
                    onClick={() => go('detail')}
                    onMouseEnter={(e) => e.currentTarget.style.background = 'var(--surface-hover)'}
                    onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}>
                  <td style={td}>
                    <div style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-sm)', fontWeight: 600, letterSpacing: '0.03em' }}>{c.code}</div>
                    <div style={{ fontSize: '11px', color: 'var(--text-muted)', marginTop: 2 }}>{c.naviera} · {c.tipo} · {c.ubicacion}</div>
                  </td>
                  <td style={td}>{c.repairType ? <RepairTag type={c.repairType} /> : <span style={{ color: 'var(--text-muted)', fontSize: 'var(--text-sm)' }}>—</span>}</td>
                  <td style={td}><StatusBadge status={c.status} /></td>
                  <td style={td}><AgingIndicator days={c.daysInStatus} showFlag={false} unit="en reparación" /></td>
                  <td style={{ ...td, textAlign: 'right' }}><IconButton variant="ghost" size="sm" aria-label="Abrir"><Icon name="chevron-right" /></IconButton></td>
                </tr>
              ))}
            </tbody>
          </table>
        </Card>

        {/* right column */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <Card title="Resumen de Estatus">
            <div style={{ display: 'flex', flexDirection: 'column', gap: '13px' }}>
              {D.distribution.map((d) => (
                <DistBar key={d.status} label={d.label} value={d.value} max={maxDist} color={distColors[d.status]} />
              ))}
            </div>
          </Card>
          <Card title="Reparaciones por tipo">
            <div style={{ display: 'flex', flexDirection: 'column', gap: '13px' }}>
              {D.byRepair.map((d) => (
                <DistBar key={d.type} label={d.label} value={d.value} max={maxRep} color={repColors[d.type]} />
              ))}
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}

Object.assign(window, { Dashboard });

})();
