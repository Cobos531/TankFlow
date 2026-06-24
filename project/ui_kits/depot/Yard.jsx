/* __IIFE__ */
;(function(){
// TankFlow UI kit — Patio: todos los equipos en el depósito + acción por equipo.
const { Card, SectionHeader, StatusBadge, RepairTag, AgingIndicator, Button, IconButton, Input, Select, Switch } = window.TankFlowDesignSystem_32ec47;

// Contextual next action per lifecycle status.
const ACTION = {
  'inspeccion-pendiente': { label: 'Inspeccionar', icon: 'clipboard-check', route: 'inspection', variant: 'primary' },
  'reparacion-pendiente': { label: 'Ver orden',    icon: 'wrench',          route: 'detail',     variant: 'secondary' },
  'en-reparacion':        { label: 'Ver orden',    icon: 'wrench',          route: 'detail',     variant: 'secondary' },
  'disponible':           { label: 'Despachar',    icon: 'truck',           route: 'detail',     variant: 'success' },
};

const TABS = [
  { id: 'todos',                label: 'Todos' },
  { id: 'inspeccion-pendiente', label: 'Inspección Pendiente' },
  { id: 'reparacion-pendiente', label: 'Reparación Pendiente' },
  { id: 'en-reparacion',        label: 'En Reparación' },
  { id: 'disponible',           label: 'Disponible' },
];

function Yard({ go }) {
  const D = window.TF_DATA;
  const [tab, setTab] = React.useState('todos');
  const [q, setQ] = React.useState('');
  const [onlyCritical, setOnlyCritical] = React.useState(false);
  const [sortDays, setSortDays] = React.useState(true);

  // Todos los equipos físicamente en el depósito (los 4 estados son in-yard).
  const inYard = D.containers;
  const counts = TABS.reduce((acc, t) => {
    acc[t.id] = t.id === 'todos' ? inYard.length : inYard.filter((c) => c.status === t.id).length;
    return acc;
  }, {});

  let rows = inYard
    .filter((c) => tab === 'todos' || c.status === tab)
    .filter((c) => !onlyCritical || c.daysInStatus >= 30)
    .filter((c) => {
      if (!q.trim()) return true;
      const s = q.toLowerCase();
      return c.code.toLowerCase().includes(s) || c.naviera.toLowerCase().includes(s) || c.ubicacion.toLowerCase().includes(s);
    });
  rows = rows.slice().sort((a, b) => sortDays ? b.daysInStatus - a.daysInStatus : a.code.localeCompare(b.code));

  const th = { textAlign: 'left', padding: '10px 14px', fontSize: '10px', fontFamily: 'var(--font-mono)', textTransform: 'uppercase', letterSpacing: '0.07em', color: 'var(--text-muted)', fontWeight: 600, borderBottom: '1px solid var(--border-subtle)', whiteSpace: 'nowrap' };
  const td = { padding: '12px 14px', borderBottom: '1px solid var(--border-subtle)', verticalAlign: 'middle' };

  return (
    <div>
      <SectionHeader
        eyebrow="Patio · Depósito Norte"
        title="Equipos en patio"
        subtitle={`${inYard.length} equipos en el depósito · ${counts['reparacion-pendiente']} con reparación pendiente`}
        actions={<>
          <Button variant="secondary" size="md" iconLeft={<Icon name="clipboard-check" />} onClick={() => go('inspection')}>Inspección</Button>
          <Button size="md" iconLeft={<Icon name="log-in" />} onClick={() => go('intake')}>Registrar ingreso</Button>
        </>}
      />

      {/* filter tabs */}
      <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap', marginBottom: 16 }}>
        {TABS.map((t) => {
          const active = tab === t.id;
          return (
            <button key={t.id} onClick={() => setTab(t.id)}
              style={{
                display: 'inline-flex', alignItems: 'center', gap: 8, cursor: 'pointer',
                padding: '7px 13px', borderRadius: 'var(--radius-pill)',
                fontFamily: 'var(--font-body)', fontSize: 'var(--text-sm)', fontWeight: active ? 600 : 400,
                border: '1px solid ' + (active ? 'var(--accent)' : 'var(--border-default)'),
                background: active ? 'var(--accent-quiet)' : 'var(--surface-raised)',
                color: active ? 'var(--blue-300)' : 'var(--text-secondary)',
                transition: 'all 120ms',
              }}>
              {t.label}
              <span style={{
                fontFamily: 'var(--font-mono)', fontSize: 11, fontWeight: 600,
                padding: '0 6px', borderRadius: 'var(--radius-pill)',
                background: active ? 'rgba(31,156,240,0.18)' : 'var(--steel-800)',
                color: active ? 'var(--blue-300)' : 'var(--text-muted)',
              }}>{counts[t.id]}</span>
            </button>
          );
        })}
      </div>

      <Card bodyFlush>
        {/* toolbar */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '12px 14px', borderBottom: '1px solid var(--border-subtle)' }}>
          <div style={{ width: 300, maxWidth: '45%' }}>
            <Input mono placeholder="Buscar código, naviera o posición…" icon={<Icon name="search" />} value={q} onChange={(e) => setQ(e.target.value)} />
          </div>
          <div style={{ flex: 1 }} />
          <Switch label="Solo +30 días" checked={onlyCritical} onChange={(e) => setOnlyCritical(e.target.checked)} />
          <Button variant="secondary" size="sm" iconLeft={<Icon name="arrow-up-down" />} onClick={() => setSortDays((v) => !v)}>
            {sortDays ? 'Antigüedad' : 'Código'}
          </Button>
        </div>

        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr>
              <th style={th}>Contenedor</th>
              <th style={th}>Tipo</th>
              <th style={th}>Posición</th>
              <th style={th}>Reparación</th>
              <th style={th}>Estado</th>
              <th style={th}>Antigüedad</th>
              <th style={{ ...th, textAlign: 'right' }}>Acción</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((c) => {
              const act = ACTION[c.status] || ACTION['inspeccion-pendiente'];
              return (
                <tr key={c.id} style={{ cursor: 'pointer', transition: 'background 120ms' }}
                    onClick={() => go('detail')}
                    onMouseEnter={(e) => e.currentTarget.style.background = 'var(--surface-hover)'}
                    onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}>
                  <td style={td}>
                    <div style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-sm)', fontWeight: 600, letterSpacing: '0.03em' }}>{c.code}</div>
                    <div style={{ fontSize: '11px', color: 'var(--text-muted)', marginTop: 2 }}>{c.naviera}</div>
                  </td>
                  <td style={td}><span style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-sm)', color: 'var(--text-secondary)' }}>{c.tipo}</span></td>
                  <td style={td}><span style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-sm)', color: 'var(--text-secondary)' }}>{c.ubicacion}</span></td>
                  <td style={td}>{c.repairType ? <RepairTag type={c.repairType} /> : <span style={{ color: 'var(--text-muted)', fontSize: 'var(--text-sm)' }}>—</span>}</td>
                  <td style={td}><StatusBadge status={c.status} /></td>
                  <td style={td}><AgingIndicator days={c.daysInStatus} showFlag={false} /></td>
                  <td style={{ ...td, textAlign: 'right' }} onClick={(e) => e.stopPropagation()}>
                    <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, justifyContent: 'flex-end' }}>
                      <Button variant={act.variant} size="sm" iconLeft={<Icon name={act.icon} />} onClick={() => go(act.route)}>{act.label}</Button>
                      <IconButton variant="ghost" size="sm" aria-label="Abrir" onClick={() => go('detail')}><Icon name="chevron-right" /></IconButton>
                    </div>
                  </td>
                </tr>
              );
            })}
            {rows.length === 0 && (
              <tr><td colSpan={7} style={{ ...td, textAlign: 'center', padding: '40px 14px', color: 'var(--text-muted)' }}>
                <Icon name="search-x" size={22} /><div style={{ marginTop: 8 }}>Sin equipos que coincidan con el filtro.</div>
              </td></tr>
            )}
          </tbody>
        </table>
      </Card>
    </div>
  );
}

Object.assign(window, { Yard });
})();
