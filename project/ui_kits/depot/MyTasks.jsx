/* __IIFE__ */
;(function(){
// TankFlow UI kit — Mis tareas: equipos que esperan una acción del usuario actual.
const { Card, SectionHeader, StatusBadge, RepairTag, AgingIndicator, StatCard, Button, IconButton } = window.TankFlowDesignSystem_32ec47;

// Cada grupo = una etapa que requiere acción, en orden de prioridad operativa.
const GROUPS = [
  { status: 'reparacion-pendiente', title: 'Reparación pendiente — iniciar trabajo', icon: 'package-search',  action: { label: 'Iniciar reparación', icon: 'wrench',          route: 'detail',     variant: 'primary' } },
  { status: 'inspeccion-pendiente', title: 'Pendientes de inspección',               icon: 'clipboard-list',  action: { label: 'Inspeccionar',       icon: 'clipboard-check', route: 'inspection', variant: 'primary' } },
  { status: 'en-reparacion',        title: 'En reparación — por finalizar',          icon: 'wrench',          action: { label: 'Finalizar',          icon: 'check',           route: 'detail',     variant: 'success' } },
];

function TaskRow({ c, action, go, last }) {
  return (
    <div
      onClick={() => go('repairs', c)}
      onMouseEnter={(e) => e.currentTarget.style.background = 'var(--surface-hover)'}
      onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}
      style={{
        display: 'flex', alignItems: 'center', gap: 16, padding: '12px 16px', cursor: 'pointer',
        borderBottom: last ? 'none' : '1px solid var(--border-subtle)', transition: 'background 120ms',
      }}>
      <div style={{ minWidth: 150 }}>
        <div style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-sm)', fontWeight: 600, letterSpacing: '0.03em' }}>{c.code}</div>
        <div style={{ fontSize: '11px', color: 'var(--text-muted)', marginTop: 2 }}>{c.naviera} · {c.tipo} · {c.ubicacion}</div>
      </div>
      <div style={{ flex: 1 }}>{c.repairType ? <RepairTag type={c.repairType} /> : <span style={{ color: 'var(--text-muted)', fontSize: 'var(--text-sm)' }}>Sin reparación</span>}</div>
      <div style={{ width: 100 }}><AgingIndicator days={c.daysInStatus} showFlag={false} /></div>
      <div onClick={(e) => e.stopPropagation()} style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}>
        <Button variant={action.variant} size="sm" iconLeft={<Icon name={action.icon} />} onClick={() => go(action.route)}>{action.label}</Button>
        <IconButton variant="ghost" size="sm" aria-label="Abrir" onClick={() => go('repairs', c)}><Icon name="chevron-right" /></IconButton>
      </div>
    </div>
  );
}

function MyTasks({ go }) {
  const D = window.TF_DATA;
  const me = D.currentUser;

  const mine = D.containers.filter((c) => c.operador === me.name && c.status !== 'disponible');
  const groups = GROUPS
    .map((g) => ({ ...g, items: mine.filter((c) => c.status === g.status).sort((a, b) => b.daysInStatus - a.daysInStatus) }))
    .filter((g) => g.items.length > 0);

  const total = mine.length;
  const critical = mine.filter((c) => c.daysInStatus >= 30).length;
  const repuesto = mine.filter((c) => c.status === 'reparacion-pendiente').length;

  return (
    <div>
      <SectionHeader
        eyebrow={`Sesión · ${me.role}`}
        title="Mis tareas"
        subtitle={`${me.name} · equipos que esperan una acción tuya`}
        actions={<Button variant="secondary" size="md" iconLeft={<Icon name="container" />} onClick={() => go('yard')}>Ver todo el patio</Button>}
      />

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px', marginBottom: 24 }}>
        <StatCard label="Tareas asignadas" value={String(total)} variant="accent" icon={<Icon name="list-checks" />} note="esperan tu acción" />
        <StatCard label="Reparación pendiente" value={String(repuesto)} icon={<Icon name="package-search" />} note="iniciar trabajo" />
        <StatCard label="+30 días en reparación" value={String(critical)} variant="critical" icon={<Icon name="clock-alert" />} note="prioridad alta" />
      </div>

      {groups.length === 0 ? (
        <Card>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 12, padding: '40px 0', textAlign: 'center' }}>
            <Icon name="check-check" size={34} color="var(--green-400)" />
            <div style={{ color: 'var(--text-secondary)' }}>No tenés tareas pendientes. Todo al día.</div>
          </div>
        </Card>
      ) : (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
          {groups.map((g) => (
            <Card key={g.status} bodyFlush
              title={<span style={{ display: 'flex', alignItems: 'center', gap: 9 }}>
                <Icon name={g.icon} size={18} color={g.status === 'reparacion-pendiente' ? 'var(--amber-400)' : 'var(--blue-300)'} />
                {g.title}
              </span>}
              actions={<span style={{
                fontFamily: 'var(--font-mono)', fontSize: 12, fontWeight: 600, color: 'var(--text-secondary)',
                background: 'var(--surface-raised)', padding: '2px 9px', borderRadius: 'var(--radius-pill)',
              }}>{g.items.length}</span>}
            >
              {g.items.map((c, i) => (
                <TaskRow key={c.id} c={c} action={g.action} go={go} last={i === g.items.length - 1} />
              ))}
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}

Object.assign(window, { MyTasks });
})();
