/* __IIFE__ */
;(function(){
// TankFlow UI kit — app shell (sidebar + topbar).
const { Button, IconButton, Input } = window.TankFlowDesignSystem_32ec47;

// Safe React-managed Lucide icon: lucide mutates only the inner <span>,
// which React never reconciles, so re-renders/conditionals don't crash.
function Icon({ name, size = 18, color, style, strokeWidth = 1.75 }) {
  const ref = React.useRef(null);
  React.useEffect(() => {
    const el = ref.current;
    if (!el || !window.lucide) return;
    el.innerHTML = '';
    const i = document.createElement('i');
    i.setAttribute('data-lucide', name);
    el.appendChild(i);
    window.lucide.createIcons({ attrs: { 'stroke-width': strokeWidth, width: size, height: size } });
  });
  return <span ref={ref} style={{ display: 'inline-flex', width: size, height: size, color, ...style }} />;
}

const shellStyles = {
  app: { display: 'flex', height: '100vh', background: 'var(--bg-app)', color: 'var(--text-primary)', fontFamily: 'var(--font-body)' },
  sidebar: { width: 'var(--sidebar-w)', flex: 'none', background: 'var(--steel-950)', borderRight: '1px solid var(--border-subtle)', display: 'flex', flexDirection: 'column' },
  brand: { display: 'flex', alignItems: 'center', gap: '10px', height: 'var(--topbar-h)', padding: '0 18px', borderBottom: '1px solid var(--border-subtle)' },
  nav: { padding: '14px 12px', display: 'flex', flexDirection: 'column', gap: '2px', flex: 1, overflowY: 'auto' },
  navSection: { fontSize: '10px', fontFamily: 'var(--font-mono)', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--text-muted)', padding: '14px 10px 6px' },
  main: { flex: 1, display: 'flex', flexDirection: 'column', minWidth: 0 },
  topbar: { height: 'var(--topbar-h)', flex: 'none', borderBottom: '1px solid var(--border-subtle)', background: 'var(--steel-900)', display: 'flex', alignItems: 'center', gap: '16px', padding: '0 24px' },
  content: { flex: 1, overflowY: 'auto', padding: '28px 32px' },
};

function NavItem({ icon, label, badge, active, onClick }) {
  const [hover, setHover] = React.useState(false);
  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        display: 'flex', alignItems: 'center', gap: '11px', width: '100%',
        padding: '9px 11px', borderRadius: 'var(--radius-md)', border: 'none', cursor: 'pointer',
        fontFamily: 'var(--font-body)', fontSize: 'var(--text-base)', textAlign: 'left',
        background: active ? 'var(--accent-quiet)' : hover ? 'var(--surface-hover)' : 'transparent',
        color: active ? 'var(--blue-300)' : hover ? 'var(--text-primary)' : 'var(--text-secondary)',
        fontWeight: active ? 'var(--fw-semibold)' : 'var(--fw-regular)',
        boxShadow: active ? 'inset 2px 0 0 var(--accent)' : 'none',
        transition: 'background 120ms, color 120ms',
      }}
    >
      <Icon name={icon} size={18} style={{ flex: 'none' }} />
      <span style={{ flex: 1 }}>{label}</span>
      {badge != null && (
        <span style={{
          fontFamily: 'var(--font-mono)', fontSize: '11px', fontWeight: 600,
          color: badge.tone === 'crit' ? 'var(--red-400)' : 'var(--text-muted)',
          background: badge.tone === 'crit' ? 'rgba(244,80,62,0.14)' : 'var(--surface-raised)',
          padding: '1px 7px', borderRadius: 'var(--radius-pill)',
        }}>{badge.value}</span>
      )}
    </button>
  );
}

function Sidebar({ route, go }) {
  const D = window.TF_DATA;
  const myCount = D.containers.filter((c) => c.operador === D.currentUser.name && c.status !== 'disponible').length;
  const items = [
    { id: 'tasks', icon: 'list-checks', label: 'Mis tareas', badge: { value: myCount } },
    { id: 'dashboard', icon: 'layout-dashboard', label: 'Dashboard' },
    { id: 'yard', icon: 'container', label: 'Storage' },
    { id: 'inspection', icon: 'clipboard-check', label: 'Inspección' },
    { id: 'detail', icon: 'wrench', label: 'Reparaciones', badge: { value: 57 } },
    { id: 'repairs', icon: 'hammer', label: 'Ordenes de Trabajo' },
  ];
  const ops = [
    { id: 'intake', icon: 'log-in', label: 'Depot In / Out' },
    { id: 'dispatch', icon: 'truck', label: 'Despacho' },
    { id: 'aging', icon: 'clock-alert', label: 'Demorados', badge: { value: 11, tone: 'crit' } },
  ];
  return (
    <aside style={shellStyles.sidebar}>
      <div style={shellStyles.brand}>
        <img src="../../assets/logo-full.svg" alt="TankFlow" style={{ height: 30 }} />
      </div>
      <nav style={shellStyles.nav}>
        <div style={shellStyles.navSection}>Operación</div>
        {items.map((it) => <NavItem key={it.id} {...it} active={route === it.id} onClick={() => go(it.id)} />)}
        <div style={shellStyles.navSection}>Patio</div>
        {ops.map((it) => <NavItem key={it.id} {...it} active={route === it.id} onClick={() => go(it.id)} />)}
      </nav>
      <div style={{ padding: '12px', borderTop: '1px solid var(--border-subtle)', display: 'flex', alignItems: 'center', gap: '10px' }}>
        <div style={{ width: 32, height: 32, borderRadius: '50%', background: 'var(--steel-700)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '12px', fontWeight: 600, color: 'var(--steel-200)', flex: 'none' }}>MF</div>
        <div style={{ minWidth: 0 }}>
          <div style={{ fontSize: 'var(--text-sm)', fontWeight: 600, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>M. Ferreyra</div>
          <div style={{ fontSize: '11px', color: 'var(--text-muted)' }}>Supervisor de patio</div>
        </div>
      </div>
    </aside>
  );
}

function Topbar({ depot, setDepot }) {
  return (
    <header style={shellStyles.topbar}>
      <div style={{ position: 'relative', width: 320, maxWidth: '40%' }}>
        <Input mono placeholder="Buscar contenedor (MSKU 204418-7)…" icon={<Icon name="search" />} />
      </div>
      <div style={{ flex: 1 }}></div>
      <button style={{
        display: 'flex', alignItems: 'center', gap: '8px', padding: '7px 12px',
        background: 'var(--surface-raised)', border: '1px solid var(--border-default)',
        borderRadius: 'var(--radius-md)', color: 'var(--text-secondary)', cursor: 'pointer',
        fontFamily: 'var(--font-body)', fontSize: 'var(--text-sm)',
      }}>
        <Icon name="map-pin" size={16} />
        {depot}
        <Icon name="chevron-down" size={14} style={{ opacity: 0.6 }} />
      </button>
      <IconButton variant="ghost" aria-label="Notificaciones"><Icon name="bell" /></IconButton>
    </header>
  );
}

function AppShell({ route, go, children }) {
  return (
    <div style={shellStyles.app}>
      <Sidebar route={route} go={go} />
      <div style={shellStyles.main}>
        <Topbar depot="Depósito Norte" />
        <div style={shellStyles.content}>{children}</div>
      </div>
    </div>
  );
}

Object.assign(window, { AppShell, Sidebar, Topbar, NavItem, Icon });

})();
