/* @ds-bundle: {"format":3,"namespace":"TankFlowDesignSystem_32ec47","components":[{"name":"AgingIndicator","sourcePath":"components/data/AgingIndicator.jsx"},{"name":"RepairTag","sourcePath":"components/data/RepairTag.jsx"},{"name":"StatCard","sourcePath":"components/data/StatCard.jsx"},{"name":"StatusBadge","sourcePath":"components/data/StatusBadge.jsx"},{"name":"Button","sourcePath":"components/forms/Button.jsx"},{"name":"IconButton","sourcePath":"components/forms/IconButton.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"},{"name":"Card","sourcePath":"components/layout/Card.jsx"},{"name":"SectionHeader","sourcePath":"components/layout/SectionHeader.jsx"}],"sourceHashes":{"components/data/AgingIndicator.jsx":"d0f1c29003ab","components/data/RepairTag.jsx":"eba1efe96ac4","components/data/StatCard.jsx":"54fd9221a963","components/data/StatusBadge.jsx":"37ba56e10a14","components/forms/Button.jsx":"5de950c5dae9","components/forms/IconButton.jsx":"a57b3d456a7b","components/forms/Input.jsx":"21771c0dd707","components/forms/Select.jsx":"b7efdb941229","components/forms/Switch.jsx":"75ff2fe659aa","components/layout/Card.jsx":"c7844a7d3c2e","components/layout/SectionHeader.jsx":"38e01c35f7c7","shell.jsx":"55c06f5b87a9","ui_kits/depot/ContainerDetail.jsx":"2a5f12f9fdb1","ui_kits/depot/Dashboard.jsx":"c06cb365a85c","ui_kits/depot/Inspection.jsx":"7b2699f379e6","ui_kits/depot/Intake.jsx":"5fe20b29aace","ui_kits/depot/MyTasks.jsx":"3484c13efe2e","ui_kits/depot/Repairs.jsx":"7ab217426c86","ui_kits/depot/Yard.jsx":"d58b9179d950","ui_kits/depot/data.js":"f63bf811aaf0","ui_kits/depot/shell.jsx":"13b2fdbf626d"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.TankFlowDesignSystem_32ec47 = window.TankFlowDesignSystem_32ec47 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/data/AgingIndicator.jsx
try { (() => {
const CSS = `
.tf-aging { display: flex; flex-direction: column; gap: 5px; min-width: 92px; }
.tf-aging__top { display: flex; align-items: baseline; gap: 5px; }
.tf-aging__days { font-family: var(--font-mono); font-size: var(--text-md); font-weight: var(--fw-semibold); line-height: 1; }
.tf-aging__unit { font-size: var(--text-2xs); color: var(--text-muted); }
.tf-aging__bar { height: 4px; border-radius: var(--radius-pill); background: var(--steel-700); overflow: hidden; }
.tf-aging__fill { height: 100%; border-radius: var(--radius-pill); transition: width var(--dur-slow) var(--ease-out); }
.tf-aging--ok   .tf-aging__days { color: var(--green-400); }
.tf-aging--ok   .tf-aging__fill { background: var(--green-500); }
.tf-aging--warn .tf-aging__days { color: var(--amber-400); }
.tf-aging--warn .tf-aging__fill { background: var(--amber-500); }
.tf-aging--crit .tf-aging__days { color: var(--red-400); }
.tf-aging--crit .tf-aging__fill { background: var(--red-500); }
.tf-aging__flag { display: inline-flex; align-items: center; gap: 4px; font-size: var(--text-2xs); color: var(--red-400); font-weight: var(--fw-medium); }
`;
let injected = false;
function inject() {
  if (injected || typeof document === 'undefined') return;
  injected = true;
  const s = document.createElement('style');
  s.setAttribute('data-tf', 'aging');
  s.textContent = CSS;
  document.head.appendChild(s);
}

/** Escalation thresholds (days). warn ≥14, critical ≥30. */
function AgingIndicator({
  days = 0,
  warnAt = 14,
  critAt = 30,
  max = 60,
  unit = 'días en estado',
  showFlag = true,
  className = ''
}) {
  inject();
  const level = days >= critAt ? 'crit' : days >= warnAt ? 'warn' : 'ok';
  const pct = Math.min(100, Math.round(days / max * 100));
  return /*#__PURE__*/React.createElement("div", {
    className: ['tf-aging', `tf-aging--${level}`, className].filter(Boolean).join(' ')
  }, /*#__PURE__*/React.createElement("div", {
    className: "tf-aging__top"
  }, /*#__PURE__*/React.createElement("span", {
    className: "tf-aging__days"
  }, String(days).padStart(2, '0')), /*#__PURE__*/React.createElement("span", {
    className: "tf-aging__unit"
  }, unit)), /*#__PURE__*/React.createElement("div", {
    className: "tf-aging__bar"
  }, /*#__PURE__*/React.createElement("div", {
    className: "tf-aging__fill",
    style: {
      width: `${pct}%`
    }
  })), showFlag && level === 'crit' && /*#__PURE__*/React.createElement("span", {
    className: "tf-aging__flag"
  }, "+", critAt, " d\xEDas en este estado"));
}
Object.assign(__ds_scope, { AgingIndicator });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/AgingIndicator.jsx", error: String((e && e.message) || e) }); }

// components/data/RepairTag.jsx
try { (() => {
const CSS = `
.tf-reptag {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-family: var(--font-body);
  font-size: var(--text-xs);
  font-weight: var(--fw-medium);
  line-height: 1;
  padding: 5px 10px 5px 8px;
  border-radius: var(--radius-sm);
  border: 1px solid var(--border-default);
  background: var(--surface-raised);
  color: var(--text-primary);
  white-space: nowrap;
}
.tf-reptag__swatch { width: 9px; height: 9px; border-radius: 2px; flex: none; }
.tf-reptag i { width: 14px; height: 14px; }
`;
let injected = false;
function inject() {
  if (injected || typeof document === 'undefined') return;
  injected = true;
  const s = document.createElement('style');
  s.setAttribute('data-tf', 'reptag');
  s.textContent = CSS;
  document.head.appendChild(s);
}
const REPAIR_MAP = {
  estructural: {
    label: 'Estructural',
    color: 'var(--rep-estructural)'
  },
  interior: {
    label: 'Interior',
    color: 'var(--rep-interior)'
  },
  rotulacion: {
    label: 'Rotulación',
    color: 'var(--rep-rotulacion)'
  },
  pintura: {
    label: 'Pintura',
    color: 'var(--rep-pintura)'
  },
  regulatoria: {
    label: 'Insp. regulatoria',
    color: 'var(--rep-regulatoria)'
  }
};
function RepairTag({
  type,
  className = '',
  children
}) {
  inject();
  const info = REPAIR_MAP[type] || {
    label: children || type,
    color: 'var(--steel-400)'
  };
  return /*#__PURE__*/React.createElement("span", {
    className: ['tf-reptag', className].filter(Boolean).join(' ')
  }, /*#__PURE__*/React.createElement("span", {
    className: "tf-reptag__swatch",
    style: {
      background: info.color
    }
  }), children || info.label);
}
Object.assign(__ds_scope, { RepairTag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/RepairTag.jsx", error: String((e && e.message) || e) }); }

// components/data/StatCard.jsx
try { (() => {
const CSS = `
.tf-stat {
  background: var(--surface-card);
  border: 1px solid var(--border-subtle);
  border-radius: var(--radius-lg);
  padding: 16px 18px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  min-width: 0;
}
.tf-stat__head { display: flex; align-items: center; justify-content: space-between; gap: 8px; }
.tf-stat__label { font-size: var(--text-xs); font-weight: var(--fw-medium); color: var(--text-muted); text-transform: uppercase; letter-spacing: var(--ls-wide); }
.tf-stat__icon { display: inline-flex; color: var(--text-muted); }
.tf-stat__value { font-family: var(--font-display); font-size: var(--text-4xl); font-weight: var(--fw-bold); line-height: 1; letter-spacing: var(--ls-tight); color: var(--text-primary); }
.tf-stat__value sub { font-family: var(--font-body); font-size: var(--text-base); font-weight: var(--fw-medium); color: var(--text-muted); vertical-align: baseline; margin-left: 4px; }
.tf-stat__foot { display: flex; align-items: center; gap: 6px; font-size: var(--text-xs); }
.tf-stat__delta--up { color: var(--green-400); }
.tf-stat__delta--down { color: var(--red-400); }
.tf-stat__delta--flat { color: var(--text-muted); }
.tf-stat__note { color: var(--text-muted); }
.tf-stat--accent { border-color: rgba(31,156,240,0.30); box-shadow: var(--glow-accent); }
.tf-stat--critical { border-color: rgba(244,80,62,0.34); }
.tf-stat--critical .tf-stat__value { color: var(--red-400); }
`;
let injected = false;
function inject() {
  if (injected || typeof document === 'undefined') return;
  injected = true;
  const s = document.createElement('style');
  s.setAttribute('data-tf', 'stat');
  s.textContent = CSS;
  document.head.appendChild(s);
}
function StatCard({
  label,
  value,
  unit,
  icon,
  delta,
  deltaDir = 'flat',
  note,
  variant,
  className = ''
}) {
  inject();
  const arrow = deltaDir === 'up' ? '▲' : deltaDir === 'down' ? '▼' : '–';
  return /*#__PURE__*/React.createElement("div", {
    className: ['tf-stat', variant && `tf-stat--${variant}`, className].filter(Boolean).join(' ')
  }, /*#__PURE__*/React.createElement("div", {
    className: "tf-stat__head"
  }, /*#__PURE__*/React.createElement("span", {
    className: "tf-stat__label"
  }, label), icon && /*#__PURE__*/React.createElement("span", {
    className: "tf-stat__icon"
  }, icon)), /*#__PURE__*/React.createElement("div", {
    className: "tf-stat__value"
  }, value, unit && /*#__PURE__*/React.createElement("sub", null, unit)), (delta || note) && /*#__PURE__*/React.createElement("div", {
    className: "tf-stat__foot"
  }, delta && /*#__PURE__*/React.createElement("span", {
    className: `tf-stat__delta--${deltaDir}`
  }, arrow, " ", delta), note && /*#__PURE__*/React.createElement("span", {
    className: "tf-stat__note"
  }, note)));
}
Object.assign(__ds_scope, { StatCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/StatCard.jsx", error: String((e && e.message) || e) }); }

// components/data/StatusBadge.jsx
try { (() => {
const CSS = `
.tf-badge {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-family: var(--font-body);
  font-size: var(--text-2xs);
  font-weight: var(--fw-semibold);
  line-height: 1;
  letter-spacing: var(--ls-wide);
  text-transform: uppercase;
  padding: 5px 9px;
  border-radius: var(--radius-pill);
  border: 1px solid transparent;
  white-space: nowrap;
}
.tf-badge__dot { width: 6px; height: 6px; border-radius: 50%; background: currentColor; flex: none; }
/* tone via tinted surface + colored text/border */
.tf-badge--neutral  { color: var(--steel-300); background: rgba(166,178,194,0.10); border-color: rgba(166,178,194,0.22); }
.tf-badge--info     { color: var(--blue-300);  background: rgba(31,156,240,0.12); border-color: rgba(31,156,240,0.30); }
.tf-badge--ok       { color: var(--green-400); background: rgba(45,212,160,0.12); border-color: rgba(45,212,160,0.30); }
.tf-badge--warn     { color: var(--amber-400); background: rgba(245,166,35,0.14); border-color: rgba(245,166,35,0.32); }
.tf-badge--critical { color: var(--red-400);   background: rgba(244,80,62,0.14);  border-color: rgba(244,80,62,0.34); }
.tf-badge--solid-critical { color: #2c0c08; background: var(--red-500); border-color: var(--red-500); }
`;
let injected = false;
function inject() {
  if (injected || typeof document === 'undefined') return;
  injected = true;
  const s = document.createElement('style');
  s.setAttribute('data-tf', 'badge');
  s.textContent = CSS;
  document.head.appendChild(s);
}

/** Map a depot lifecycle status to a tone + default label. */
const STATUS_MAP = {
  'inspeccion-pendiente': {
    tone: 'neutral',
    label: 'Inspección Pendiente'
  },
  'reparacion-pendiente': {
    tone: 'warn',
    label: 'Reparación Pendiente'
  },
  'en-reparacion': {
    tone: 'info',
    label: 'En Reparación'
  },
  'disponible': {
    tone: 'ok',
    label: 'Disponible'
  }
};
function StatusBadge({
  status,
  tone,
  dot = true,
  className = '',
  children
}) {
  inject();
  const mapped = status ? STATUS_MAP[status] : null;
  const resolvedTone = tone || (mapped ? mapped.tone : 'neutral');
  const label = children || (mapped ? mapped.label : status);
  return /*#__PURE__*/React.createElement("span", {
    className: ['tf-badge', `tf-badge--${resolvedTone}`, className].filter(Boolean).join(' ')
  }, dot && /*#__PURE__*/React.createElement("span", {
    className: "tf-badge__dot"
  }), label);
}
Object.assign(__ds_scope, { StatusBadge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/StatusBadge.jsx", error: String((e && e.message) || e) }); }

// components/forms/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CSS = `
.tf-btn {
  --_bg: var(--accent);
  --_fg: #06121d;
  font-family: var(--font-body);
  font-weight: var(--fw-semibold);
  font-size: var(--text-base);
  line-height: 1;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  border: 1px solid transparent;
  border-radius: var(--radius-md);
  padding: 0 16px;
  height: 38px;
  cursor: pointer;
  white-space: nowrap;
  background: var(--_bg);
  color: var(--_fg);
  transition: background var(--dur-fast) var(--ease-out),
              transform var(--dur-fast) var(--ease-out),
              box-shadow var(--dur-fast) var(--ease-out),
              border-color var(--dur-fast) var(--ease-out);
}
.tf-btn:hover { background: var(--accent-hover); }
.tf-btn:active { transform: translateY(1px); }
.tf-btn:focus-visible { outline: none; box-shadow: 0 0 0 3px var(--focus-ring); }
.tf-btn[disabled] { opacity: 0.45; cursor: not-allowed; transform: none; }

.tf-btn--secondary { --_bg: var(--surface-raised); --_fg: var(--text-primary); border-color: var(--border-strong); }
.tf-btn--secondary:hover { background: var(--surface-hover); }
.tf-btn--ghost { --_bg: transparent; --_fg: var(--text-secondary); }
.tf-btn--ghost:hover { background: var(--surface-hover); color: var(--text-primary); }
.tf-btn--danger { --_bg: var(--red-500); --_fg: #2c0c08; }
.tf-btn--danger:hover { background: var(--red-400); }
.tf-btn--success { --_bg: var(--green-500); --_fg: #07261d; }
.tf-btn--success:hover { background: var(--green-400); }

.tf-btn--sm { height: 30px; font-size: var(--text-sm); padding: 0 12px; border-radius: var(--radius-sm); }
.tf-btn--lg { height: 46px; font-size: var(--text-md); padding: 0 22px; }
.tf-btn--block { width: 100%; }
`;
let injected = false;
function inject() {
  if (injected || typeof document === 'undefined') return;
  injected = true;
  const s = document.createElement('style');
  s.setAttribute('data-tf', 'button');
  s.textContent = CSS;
  document.head.appendChild(s);
}
function Button({
  variant = 'primary',
  size = 'md',
  block = false,
  iconLeft = null,
  iconRight = null,
  className = '',
  children,
  ...rest
}) {
  inject();
  const cls = ['tf-btn', variant !== 'primary' && `tf-btn--${variant}`, size !== 'md' && `tf-btn--${size}`, block && 'tf-btn--block', className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("button", _extends({
    className: cls
  }, rest), iconLeft, children, iconRight);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Button.jsx", error: String((e && e.message) || e) }); }

// components/forms/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CSS = `
.tf-iconbtn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 38px;
  height: 38px;
  border-radius: var(--radius-md);
  border: 1px solid var(--border-default);
  background: var(--surface-raised);
  color: var(--text-secondary);
  cursor: pointer;
  transition: background var(--dur-fast) var(--ease-out),
              color var(--dur-fast) var(--ease-out),
              border-color var(--dur-fast) var(--ease-out);
}
.tf-iconbtn:hover { background: var(--surface-hover); color: var(--text-primary); }
.tf-iconbtn:active { transform: translateY(1px); }
.tf-iconbtn:focus-visible { outline: none; box-shadow: 0 0 0 3px var(--focus-ring); }
.tf-iconbtn[disabled] { opacity: 0.45; cursor: not-allowed; }
.tf-iconbtn--ghost { background: transparent; border-color: transparent; }
.tf-iconbtn--ghost:hover { background: var(--surface-hover); }
.tf-iconbtn--sm { width: 30px; height: 30px; border-radius: var(--radius-sm); }
.tf-iconbtn--active { color: var(--accent); border-color: var(--accent); background: var(--accent-quiet); }
`;
let injected = false;
function inject() {
  if (injected || typeof document === 'undefined') return;
  injected = true;
  const s = document.createElement('style');
  s.setAttribute('data-tf', 'iconbtn');
  s.textContent = CSS;
  document.head.appendChild(s);
}
function IconButton({
  variant = 'default',
  size = 'md',
  active = false,
  className = '',
  children,
  ...rest
}) {
  inject();
  const cls = ['tf-iconbtn', variant === 'ghost' && 'tf-iconbtn--ghost', size === 'sm' && 'tf-iconbtn--sm', active && 'tf-iconbtn--active', className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("button", _extends({
    className: cls
  }, rest), children);
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CSS = `
.tf-field { display: flex; flex-direction: column; gap: 6px; }
.tf-field__label { font-size: var(--text-xs); font-weight: var(--fw-medium); color: var(--text-secondary); }
.tf-field__hint { font-size: var(--text-2xs); color: var(--text-muted); }
.tf-field__hint--error { color: var(--red-400); }
.tf-input {
  font-family: var(--font-body);
  font-size: var(--text-base);
  color: var(--text-primary);
  background: var(--bg-sunken);
  border: 1px solid var(--border-default);
  border-radius: var(--radius-md);
  height: 38px;
  padding: 0 12px;
  width: 100%;
  box-sizing: border-box;
  transition: border-color var(--dur-fast) var(--ease-out), box-shadow var(--dur-fast) var(--ease-out);
}
.tf-input::placeholder { color: var(--text-muted); }
.tf-input:hover { border-color: var(--border-strong); }
.tf-input:focus { outline: none; border-color: var(--accent); box-shadow: 0 0 0 3px var(--focus-ring); }
.tf-input--mono { font-family: var(--font-mono); letter-spacing: 0.03em; }
.tf-input--error { border-color: var(--red-500); }
.tf-input[disabled] { opacity: 0.5; cursor: not-allowed; }
.tf-input__wrap { position: relative; display: flex; align-items: center; }
.tf-input__icon { position: absolute; left: 11px; color: var(--text-muted); display: inline-flex; pointer-events: none; }
.tf-input__wrap--icon .tf-input { padding-left: 36px; }
`;
let injected = false;
function inject() {
  if (injected || typeof document === 'undefined') return;
  injected = true;
  const s = document.createElement('style');
  s.setAttribute('data-tf', 'input');
  s.textContent = CSS;
  document.head.appendChild(s);
}
function Input({
  label,
  hint,
  error,
  mono = false,
  icon = null,
  className = '',
  id,
  ...rest
}) {
  inject();
  const inputId = id || (label ? `tf-${label.replace(/\s+/g, '-').toLowerCase()}` : undefined);
  const inputEl = /*#__PURE__*/React.createElement("input", _extends({
    id: inputId,
    className: ['tf-input', mono && 'tf-input--mono', error && 'tf-input--error', className].filter(Boolean).join(' ')
  }, rest));
  return /*#__PURE__*/React.createElement("div", {
    className: "tf-field"
  }, label && /*#__PURE__*/React.createElement("label", {
    className: "tf-field__label",
    htmlFor: inputId
  }, label), icon ? /*#__PURE__*/React.createElement("div", {
    className: "tf-input__wrap tf-input__wrap--icon"
  }, /*#__PURE__*/React.createElement("span", {
    className: "tf-input__icon"
  }, icon), inputEl) : inputEl, (hint || error) && /*#__PURE__*/React.createElement("span", {
    className: ['tf-field__hint', error && 'tf-field__hint--error'].filter(Boolean).join(' ')
  }, error || hint));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CSS = `
.tf-select-field { display: flex; flex-direction: column; gap: 6px; }
.tf-select-field__label { font-size: var(--text-xs); font-weight: var(--fw-medium); color: var(--text-secondary); }
.tf-select__wrap { position: relative; display: flex; align-items: center; }
.tf-select {
  appearance: none;
  font-family: var(--font-body);
  font-size: var(--text-base);
  color: var(--text-primary);
  background: var(--bg-sunken);
  border: 1px solid var(--border-default);
  border-radius: var(--radius-md);
  height: 38px;
  padding: 0 36px 0 12px;
  width: 100%;
  box-sizing: border-box;
  cursor: pointer;
  transition: border-color var(--dur-fast) var(--ease-out), box-shadow var(--dur-fast) var(--ease-out);
}
.tf-select:hover { border-color: var(--border-strong); }
.tf-select:focus { outline: none; border-color: var(--accent); box-shadow: 0 0 0 3px var(--focus-ring); }
.tf-select[disabled] { opacity: 0.5; cursor: not-allowed; }
.tf-select__chevron { position: absolute; right: 12px; color: var(--text-muted); pointer-events: none; font-size: 11px; }
`;
let injected = false;
function inject() {
  if (injected || typeof document === 'undefined') return;
  injected = true;
  const s = document.createElement('style');
  s.setAttribute('data-tf', 'select');
  s.textContent = CSS;
  document.head.appendChild(s);
}
function Select({
  label,
  options = [],
  placeholder,
  className = '',
  id,
  children,
  ...rest
}) {
  inject();
  const selId = id || (label ? `tf-${label.replace(/\s+/g, '-').toLowerCase()}` : undefined);
  return /*#__PURE__*/React.createElement("div", {
    className: "tf-select-field"
  }, label && /*#__PURE__*/React.createElement("label", {
    className: "tf-select-field__label",
    htmlFor: selId
  }, label), /*#__PURE__*/React.createElement("div", {
    className: "tf-select__wrap"
  }, /*#__PURE__*/React.createElement("select", _extends({
    id: selId,
    className: ['tf-select', className].filter(Boolean).join(' ')
  }, rest), placeholder && /*#__PURE__*/React.createElement("option", {
    value: ""
  }, placeholder), options.map(o => {
    const val = typeof o === 'string' ? o : o.value;
    const lbl = typeof o === 'string' ? o : o.label;
    return /*#__PURE__*/React.createElement("option", {
      key: val,
      value: val
    }, lbl);
  }), children), /*#__PURE__*/React.createElement("span", {
    className: "tf-select__chevron"
  }, "\u25BE")));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CSS = `
.tf-switch { display: inline-flex; align-items: center; gap: 10px; cursor: pointer; user-select: none; }
.tf-switch__track {
  position: relative;
  width: 38px; height: 22px;
  border-radius: var(--radius-pill);
  background: var(--steel-700);
  transition: background var(--dur-base) var(--ease-out);
  flex: none;
}
.tf-switch__thumb {
  position: absolute; top: 2px; left: 2px;
  width: 18px; height: 18px;
  border-radius: 50%;
  background: var(--steel-100);
  transition: transform var(--dur-base) var(--ease-out);
  box-shadow: var(--shadow-sm);
}
.tf-switch input { position: absolute; opacity: 0; width: 0; height: 0; }
.tf-switch input:checked + .tf-switch__track { background: var(--accent); }
.tf-switch input:checked + .tf-switch__track .tf-switch__thumb { transform: translateX(16px); }
.tf-switch input:focus-visible + .tf-switch__track { box-shadow: 0 0 0 3px var(--focus-ring); }
.tf-switch__label { font-size: var(--text-base); color: var(--text-primary); }
.tf-switch--disabled { opacity: 0.5; cursor: not-allowed; }
`;
let injected = false;
function inject() {
  if (injected || typeof document === 'undefined') return;
  injected = true;
  const s = document.createElement('style');
  s.setAttribute('data-tf', 'switch');
  s.textContent = CSS;
  document.head.appendChild(s);
}
function Switch({
  checked,
  defaultChecked,
  onChange,
  label,
  disabled = false,
  className = '',
  ...rest
}) {
  inject();
  return /*#__PURE__*/React.createElement("label", {
    className: ['tf-switch', disabled && 'tf-switch--disabled', className].filter(Boolean).join(' ')
  }, /*#__PURE__*/React.createElement("input", _extends({
    type: "checkbox",
    checked: checked,
    defaultChecked: defaultChecked,
    onChange: onChange,
    disabled: disabled
  }, rest)), /*#__PURE__*/React.createElement("span", {
    className: "tf-switch__track"
  }, /*#__PURE__*/React.createElement("span", {
    className: "tf-switch__thumb"
  })), label && /*#__PURE__*/React.createElement("span", {
    className: "tf-switch__label"
  }, label));
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

// components/layout/Card.jsx
try { (() => {
const CSS = `
.tf-card {
  background: var(--surface-card);
  border: 1px solid var(--border-subtle);
  border-radius: var(--radius-lg);
  overflow: hidden;
}
.tf-card--raised { background: var(--surface-raised); box-shadow: var(--shadow-md); }
.tf-card--flush { border-radius: 0; border-left: 0; border-right: 0; }
.tf-card__header {
  display: flex; align-items: center; justify-content: space-between; gap: 12px;
  padding: 14px 18px;
  border-bottom: 1px solid var(--border-subtle);
}
.tf-card__title { font-family: var(--font-display); font-size: var(--text-lg); font-weight: var(--fw-semibold); color: var(--text-primary); letter-spacing: var(--ls-tight); }
.tf-card__body { padding: 18px; }
.tf-card__body--flush { padding: 0; }
`;
let injected = false;
function inject() {
  if (injected || typeof document === 'undefined') return;
  injected = true;
  const s = document.createElement('style');
  s.setAttribute('data-tf', 'card');
  s.textContent = CSS;
  document.head.appendChild(s);
}
function Card({
  title,
  actions,
  raised = false,
  flush = false,
  bodyFlush = false,
  className = '',
  children
}) {
  inject();
  return /*#__PURE__*/React.createElement("div", {
    className: ['tf-card', raised && 'tf-card--raised', flush && 'tf-card--flush', className].filter(Boolean).join(' ')
  }, (title || actions) && /*#__PURE__*/React.createElement("div", {
    className: "tf-card__header"
  }, title && /*#__PURE__*/React.createElement("span", {
    className: "tf-card__title"
  }, title), actions && /*#__PURE__*/React.createElement("div", {
    className: "tf-card__actions"
  }, actions)), /*#__PURE__*/React.createElement("div", {
    className: ['tf-card__body', bodyFlush && 'tf-card__body--flush'].filter(Boolean).join(' ')
  }, children));
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/layout/Card.jsx", error: String((e && e.message) || e) }); }

// components/layout/SectionHeader.jsx
try { (() => {
const CSS = `
.tf-secthead { display: flex; align-items: flex-end; justify-content: space-between; gap: 16px; margin-bottom: 16px; }
.tf-secthead__left { display: flex; flex-direction: column; gap: 4px; min-width: 0; }
.tf-secthead__eyebrow { font-family: var(--font-mono); font-size: var(--text-2xs); font-weight: var(--fw-medium); color: var(--accent); text-transform: uppercase; letter-spacing: var(--ls-caps); }
.tf-secthead__title { font-family: var(--font-display); font-size: var(--text-2xl); font-weight: var(--fw-bold); color: var(--text-primary); letter-spacing: var(--ls-tight); line-height: 1.1; }
.tf-secthead__sub { font-size: var(--text-sm); color: var(--text-muted); }
.tf-secthead__actions { display: flex; align-items: center; gap: 8px; flex: none; }
`;
let injected = false;
function inject() {
  if (injected || typeof document === 'undefined') return;
  injected = true;
  const s = document.createElement('style');
  s.setAttribute('data-tf', 'secthead');
  s.textContent = CSS;
  document.head.appendChild(s);
}
function SectionHeader({
  eyebrow,
  title,
  subtitle,
  actions,
  className = ''
}) {
  inject();
  return /*#__PURE__*/React.createElement("div", {
    className: ['tf-secthead', className].filter(Boolean).join(' ')
  }, /*#__PURE__*/React.createElement("div", {
    className: "tf-secthead__left"
  }, eyebrow && /*#__PURE__*/React.createElement("span", {
    className: "tf-secthead__eyebrow"
  }, eyebrow), title && /*#__PURE__*/React.createElement("span", {
    className: "tf-secthead__title"
  }, title), subtitle && /*#__PURE__*/React.createElement("span", {
    className: "tf-secthead__sub"
  }, subtitle)), actions && /*#__PURE__*/React.createElement("div", {
    className: "tf-secthead__actions"
  }, actions));
}
Object.assign(__ds_scope, { SectionHeader });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/layout/SectionHeader.jsx", error: String((e && e.message) || e) }); }

// shell.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* __IIFE__ */
;
(function () {
  // TankFlow UI kit — app shell (sidebar + topbar).
  const {
    Button,
    IconButton,
    Input
  } = window.TankFlowDesignSystem_32ec47;

  // Safe React-managed Lucide icon: lucide mutates only the inner <span>,
  // which React never reconciles, so re-renders/conditionals don't crash.
  function Icon({
    name,
    size = 18,
    color,
    style,
    strokeWidth = 1.75
  }) {
    const ref = React.useRef(null);
    React.useEffect(() => {
      const el = ref.current;
      if (!el || !window.lucide) return;
      el.innerHTML = '';
      const i = document.createElement('i');
      i.setAttribute('data-lucide', name);
      el.appendChild(i);
      window.lucide.createIcons({
        attrs: {
          'stroke-width': strokeWidth,
          width: size,
          height: size
        }
      });
    });
    return /*#__PURE__*/React.createElement("span", {
      ref: ref,
      style: {
        display: 'inline-flex',
        width: size,
        height: size,
        color,
        ...style
      }
    });
  }
  const shellStyles = {
    app: {
      display: 'flex',
      height: '100vh',
      background: 'var(--bg-app)',
      color: 'var(--text-primary)',
      fontFamily: 'var(--font-body)'
    },
    sidebar: {
      width: 'var(--sidebar-w)',
      flex: 'none',
      background: 'var(--steel-950)',
      borderRight: '1px solid var(--border-subtle)',
      display: 'flex',
      flexDirection: 'column'
    },
    brand: {
      display: 'flex',
      alignItems: 'center',
      gap: '10px',
      height: 'var(--topbar-h)',
      padding: '0 18px',
      borderBottom: '1px solid var(--border-subtle)'
    },
    nav: {
      padding: '14px 12px',
      display: 'flex',
      flexDirection: 'column',
      gap: '2px',
      flex: 1,
      overflowY: 'auto'
    },
    navSection: {
      fontSize: '10px',
      fontFamily: 'var(--font-mono)',
      textTransform: 'uppercase',
      letterSpacing: '0.08em',
      color: 'var(--text-muted)',
      padding: '14px 10px 6px'
    },
    main: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      minWidth: 0
    },
    topbar: {
      height: 'var(--topbar-h)',
      flex: 'none',
      borderBottom: '1px solid var(--border-subtle)',
      background: 'var(--steel-900)',
      display: 'flex',
      alignItems: 'center',
      gap: '16px',
      padding: '0 24px'
    },
    content: {
      flex: 1,
      overflowY: 'auto',
      padding: '28px 32px'
    }
  };
  function NavItem({
    icon,
    label,
    badge,
    active,
    onClick
  }) {
    const [hover, setHover] = React.useState(false);
    return /*#__PURE__*/React.createElement("button", {
      onClick: onClick,
      onMouseEnter: () => setHover(true),
      onMouseLeave: () => setHover(false),
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: '11px',
        width: '100%',
        padding: '9px 11px',
        borderRadius: 'var(--radius-md)',
        border: 'none',
        cursor: 'pointer',
        fontFamily: 'var(--font-body)',
        fontSize: 'var(--text-base)',
        textAlign: 'left',
        background: active ? 'var(--accent-quiet)' : hover ? 'var(--surface-hover)' : 'transparent',
        color: active ? 'var(--blue-300)' : hover ? 'var(--text-primary)' : 'var(--text-secondary)',
        fontWeight: active ? 'var(--fw-semibold)' : 'var(--fw-regular)',
        boxShadow: active ? 'inset 2px 0 0 var(--accent)' : 'none',
        transition: 'background 120ms, color 120ms'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: icon,
      size: 18,
      style: {
        flex: 'none'
      }
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        flex: 1
      }
    }, label), badge != null && /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-mono)',
        fontSize: '11px',
        fontWeight: 600,
        color: badge.tone === 'crit' ? 'var(--red-400)' : 'var(--text-muted)',
        background: badge.tone === 'crit' ? 'rgba(244,80,62,0.14)' : 'var(--surface-raised)',
        padding: '1px 7px',
        borderRadius: 'var(--radius-pill)'
      }
    }, badge.value));
  }
  function Sidebar({
    route,
    go
  }) {
    const D = window.TF_DATA;
    const myCount = D.containers.filter(c => c.operador === D.currentUser.name && c.status !== 'disponible').length;
    const items = [{
      id: 'tasks',
      icon: 'list-checks',
      label: 'Mis tareas',
      badge: {
        value: myCount
      }
    }, {
      id: 'dashboard',
      icon: 'layout-dashboard',
      label: 'Panel de control'
    }, {
      id: 'intake',
      icon: 'log-in',
      label: 'Registrar ingreso'
    }, {
      id: 'inspection',
      icon: 'clipboard-check',
      label: 'Inspección'
    }, {
      id: 'detail',
      icon: 'wrench',
      label: 'Reparaciones',
      badge: {
        value: 57
      }
    }, {
      id: 'repairs',
      icon: 'hammer',
      label: 'Registro de trabajo'
    }];
    const ops = [{
      id: 'yard',
      icon: 'container',
      label: 'Patio'
    }, {
      id: 'dispatch',
      icon: 'truck',
      label: 'Despacho'
    }, {
      id: 'aging',
      icon: 'clock-alert',
      label: 'Demorados',
      badge: {
        value: 11,
        tone: 'crit'
      }
    }];
    return /*#__PURE__*/React.createElement("aside", {
      style: shellStyles.sidebar
    }, /*#__PURE__*/React.createElement("div", {
      style: shellStyles.brand
    }, /*#__PURE__*/React.createElement("img", {
      src: "../../assets/logo-full.svg",
      alt: "TankFlow",
      style: {
        height: 30
      }
    })), /*#__PURE__*/React.createElement("nav", {
      style: shellStyles.nav
    }, /*#__PURE__*/React.createElement("div", {
      style: shellStyles.navSection
    }, "TALLER"), items.map(it => /*#__PURE__*/React.createElement(NavItem, _extends({
      key: it.id
    }, it, {
      active: route === it.id,
      onClick: () => go(it.id)
    }))), /*#__PURE__*/React.createElement("div", {
      style: shellStyles.navSection
    }, "DESPACHO"), ops.map(it => /*#__PURE__*/React.createElement(NavItem, _extends({
      key: it.id
    }, it, {
      active: route === it.id,
      onClick: () => go(it.id)
    })))), /*#__PURE__*/React.createElement("div", {
      style: {
        padding: '12px',
        borderTop: '1px solid var(--border-subtle)',
        display: 'flex',
        alignItems: 'center',
        gap: '10px'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: 32,
        height: 32,
        borderRadius: '50%',
        background: 'var(--steel-700)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '12px',
        fontWeight: 600,
        color: 'var(--steel-200)',
        flex: 'none'
      }
    }, "MF"), /*#__PURE__*/React.createElement("div", {
      style: {
        minWidth: 0
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 'var(--text-sm)',
        fontWeight: 600,
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis'
      }
    }, "M. Ferreyra"), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: '11px',
        color: 'var(--text-muted)'
      }
    }, "Supervisor de patio"))));
  }
  function Topbar({
    depot,
    setDepot
  }) {
    return /*#__PURE__*/React.createElement("header", {
      style: shellStyles.topbar
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'relative',
        width: 320,
        maxWidth: '40%'
      }
    }, /*#__PURE__*/React.createElement(Input, {
      mono: true,
      placeholder: "Buscar contenedor (MSKU 204418-7)\u2026",
      icon: /*#__PURE__*/React.createElement(Icon, {
        name: "search"
      })
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1
      }
    }), /*#__PURE__*/React.createElement("button", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
        padding: '7px 12px',
        background: 'var(--surface-raised)',
        border: '1px solid var(--border-default)',
        borderRadius: 'var(--radius-md)',
        color: 'var(--text-secondary)',
        cursor: 'pointer',
        fontFamily: 'var(--font-body)',
        fontSize: 'var(--text-sm)'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "map-pin",
      size: 16
    }), depot, /*#__PURE__*/React.createElement(Icon, {
      name: "chevron-down",
      size: 14,
      style: {
        opacity: 0.6
      }
    })), /*#__PURE__*/React.createElement(IconButton, {
      variant: "ghost",
      "aria-label": "Notificaciones"
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "bell"
    })));
  }
  function AppShell({
    route,
    go,
    children
  }) {
    return /*#__PURE__*/React.createElement("div", {
      style: shellStyles.app
    }, /*#__PURE__*/React.createElement(Sidebar, {
      route: route,
      go: go
    }), /*#__PURE__*/React.createElement("div", {
      style: shellStyles.main
    }, /*#__PURE__*/React.createElement(Topbar, {
      depot: "Dep\xF3sito Norte"
    }), /*#__PURE__*/React.createElement("div", {
      style: shellStyles.content
    }, children)));
  }
  Object.assign(window, {
    AppShell,
    Sidebar,
    Topbar,
    NavItem,
    Icon
  });
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "shell.jsx", error: String((e && e.message) || e) }); }

// ui_kits/depot/ContainerDetail.jsx
try { (() => {
/* __IIFE__ */
;
(function () {
  // TankFlow UI kit — Detalle de contenedor (tracking / timeline).
  const {
    Card,
    SectionHeader,
    Button,
    StatusBadge,
    RepairTag,
    AgingIndicator,
    IconButton
  } = window.TankFlowDesignSystem_32ec47;
  function TimelineRow({
    ev,
    last
  }) {
    const color = ev.done ? 'var(--green-500)' : ev.active ? 'var(--amber-500)' : 'var(--steel-600)';
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 14
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        flex: 'none'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: 32,
        height: 32,
        borderRadius: '50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: ev.done ? 'rgba(45,212,160,0.14)' : ev.active ? 'rgba(245,166,35,0.16)' : 'var(--surface-raised)',
        border: '1px solid ' + (ev.active ? 'var(--amber-500)' : 'transparent')
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: ev.icon,
      size: 16,
      style: {
        color
      }
    })), !last && /*#__PURE__*/React.createElement("div", {
      style: {
        width: 2,
        flex: 1,
        minHeight: 26,
        background: ev.done ? 'var(--green-500)' : 'var(--steel-700)',
        opacity: ev.done ? 0.5 : 1
      }
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        paddingBottom: last ? 0 : 18,
        flex: 1
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 8
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontWeight: 600,
        fontSize: 'var(--text-base)',
        color: ev.done || ev.active ? 'var(--text-primary)' : 'var(--text-muted)'
      }
    }, ev.title), ev.active && /*#__PURE__*/React.createElement(StatusBadge, {
      tone: "warn",
      dot: true
    }, "En curso")), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 12,
        marginTop: 3,
        fontSize: 'var(--text-xs)',
        color: 'var(--text-muted)',
        fontFamily: 'var(--font-mono)'
      }
    }, /*#__PURE__*/React.createElement("span", null, ev.time), ev.who && /*#__PURE__*/React.createElement("span", null, "\xB7 ", ev.who)), ev.note && /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 'var(--text-sm)',
        color: 'var(--text-secondary)',
        marginTop: 5
      }
    }, ev.note)));
  }
  function InfoRow({
    k,
    v,
    mono
  }) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        justifyContent: 'space-between',
        gap: 12,
        padding: '9px 0',
        borderBottom: '1px solid var(--border-subtle)'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 'var(--text-sm)',
        color: 'var(--text-muted)'
      }
    }, k), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 'var(--text-sm)',
        fontWeight: 500,
        fontFamily: mono ? 'var(--font-mono)' : 'inherit',
        textAlign: 'right'
      }
    }, v));
  }
  function ContainerDetail({
    go
  }) {
    const D = window.TF_DATA;
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("button", {
      onClick: () => go('dashboard'),
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 6,
        background: 'none',
        border: 'none',
        color: 'var(--text-muted)',
        cursor: 'pointer',
        fontFamily: 'var(--font-body)',
        fontSize: 'var(--text-sm)',
        marginBottom: 14,
        padding: 0
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "arrow-left",
      size: 15
    }), " Volver al panel"), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        gap: 16,
        marginBottom: 22
      }
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 12
      }
    }, /*#__PURE__*/React.createElement("h1", {
      style: {
        margin: 0,
        fontFamily: 'var(--font-mono)',
        fontSize: 'var(--text-3xl)',
        fontWeight: 600,
        letterSpacing: '0.02em'
      }
    }, "MSKU 204418-7"), /*#__PURE__*/React.createElement(StatusBadge, {
      status: "reparacion-pendiente"
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        color: 'var(--text-muted)',
        marginTop: 6,
        fontSize: 'var(--text-sm)'
      }
    }, "40HC \xB7 Maersk \xB7 Orden de reparaci\xF3n #RP-1183 \xB7 posici\xF3n B3-14")), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 10
      }
    }, /*#__PURE__*/React.createElement(Button, {
      variant: "secondary",
      iconLeft: /*#__PURE__*/React.createElement(Icon, {
        name: "package-search"
      })
    }, "Repuesto recibido"), /*#__PURE__*/React.createElement(Button, {
      variant: "success",
      iconLeft: /*#__PURE__*/React.createElement(Icon, {
        name: "check"
      })
    }, "Finalizar reparaci\xF3n"))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 12,
        padding: '13px 16px',
        borderRadius: 'var(--radius-md)',
        background: 'rgba(244,80,62,0.10)',
        border: '1px solid rgba(244,80,62,0.32)',
        marginBottom: 22
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "clock-alert",
      size: 20,
      color: 'var(--red-400)',
      style: {
        flex: 'none'
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        fontSize: 'var(--text-sm)'
      }
    }, /*#__PURE__*/React.createElement("strong", {
      style: {
        color: 'var(--red-400)'
      }
    }, "31 d\xEDas en Reparaci\xF3n Pendiente sin avanzar."), " ", /*#__PURE__*/React.createElement("span", {
      style: {
        color: 'var(--text-secondary)'
      }
    }, "Reparaci\xF3n detenida esperando repuesto estructural (ETA 21 jun). Supera el umbral de 30 d\xEDas."))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: '1.4fr 1fr',
        gap: '20px',
        alignItems: 'start'
      }
    }, /*#__PURE__*/React.createElement(Card, {
      title: "Tracking del equipo"
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        paddingTop: 4
      }
    }, D.timeline.map((ev, i) => /*#__PURE__*/React.createElement(TimelineRow, {
      key: i,
      ev: ev,
      last: i === D.timeline.length - 1
    })))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: '20px'
      }
    }, /*#__PURE__*/React.createElement(Card, {
      title: "Reparaci\xF3n"
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 12
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 8,
        flexWrap: 'wrap'
      }
    }, /*#__PURE__*/React.createElement(RepairTag, {
      type: "estructural"
    }), /*#__PURE__*/React.createElement(RepairTag, {
      type: "pintura"
    })), /*#__PURE__*/React.createElement(AgingIndicator, {
      days: 31
    }))), /*#__PURE__*/React.createElement(Card, {
      title: "Datos del equipo"
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(InfoRow, {
      k: "C\xF3digo ISO",
      v: "MSKU 204418-7",
      mono: true
    }), /*#__PURE__*/React.createElement(InfoRow, {
      k: "Tipo",
      v: "40HC"
    }), /*#__PURE__*/React.createElement(InfoRow, {
      k: "Naviera",
      v: "Maersk"
    }), /*#__PURE__*/React.createElement(InfoRow, {
      k: "Ingreso (gate-in)",
      v: "2026-06-12 08:41",
      mono: true
    }), /*#__PURE__*/React.createElement(InfoRow, {
      k: "ETA repuesto",
      v: "2026-06-21",
      mono: true
    }), /*#__PURE__*/React.createElement(InfoRow, {
      k: "Inspector",
      v: "J. C\xE1ceres"
    }), /*#__PURE__*/React.createElement(InfoRow, {
      k: "Posici\xF3n",
      v: "B3-14",
      mono: true
    }))))));
  }
  Object.assign(window, {
    ContainerDetail
  });
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/depot/ContainerDetail.jsx", error: String((e && e.message) || e) }); }

// ui_kits/depot/Dashboard.jsx
try { (() => {
/* __IIFE__ */
;
(function () {
  // TankFlow UI kit — Dashboard (panel de control con alertas de antigüedad).
  const {
    Card,
    SectionHeader,
    StatCard,
    StatusBadge,
    RepairTag,
    AgingIndicator,
    Button,
    Switch,
    IconButton
  } = window.TankFlowDesignSystem_32ec47;
  function DistBar({
    label,
    value,
    max,
    color,
    tone
  }) {
    const pct = Math.round(value / max * 100);
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: '12px'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: 120,
        flex: 'none',
        fontSize: 'var(--text-sm)',
        color: 'var(--text-secondary)'
      }
    }, label), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        height: 8,
        background: 'var(--steel-800)',
        borderRadius: 'var(--radius-pill)',
        overflow: 'hidden'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: pct + '%',
        height: '100%',
        background: color,
        borderRadius: 'var(--radius-pill)'
      }
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        width: 36,
        textAlign: 'right',
        fontFamily: 'var(--font-mono)',
        fontSize: 'var(--text-sm)',
        fontWeight: 600
      }
    }, value));
  }
  function Dashboard({
    go
  }) {
    const D = window.TF_DATA;
    const [onlyCritical, setOnlyCritical] = React.useState(false);
    const distColors = {
      'inspeccion-pendiente': 'var(--steel-400)',
      'reparacion-pendiente': 'var(--amber-500)',
      'en-reparacion': 'var(--blue-500)',
      'disponible': 'var(--green-500)'
    };
    const repColors = {
      estructural: 'var(--rep-estructural)',
      interior: 'var(--rep-interior)',
      rotulacion: 'var(--rep-rotulacion)',
      pintura: 'var(--rep-pintura)',
      regulatoria: 'var(--rep-regulatoria)'
    };
    let aging = D.containers.filter(c => c.status !== 'disponible').sort((a, b) => b.daysInStatus - a.daysInStatus);
    if (onlyCritical) aging = aging.filter(c => c.daysInStatus >= 30);
    aging = aging.slice(0, 8);
    const maxDist = Math.max(...D.distribution.map(d => d.value));
    const maxRep = Math.max(...D.byRepair.map(d => d.value));
    const th = {
      textAlign: 'left',
      padding: '10px 14px',
      fontSize: '10px',
      fontFamily: 'var(--font-mono)',
      textTransform: 'uppercase',
      letterSpacing: '0.07em',
      color: 'var(--text-muted)',
      fontWeight: 600,
      borderBottom: '1px solid var(--border-subtle)',
      whiteSpace: 'nowrap'
    };
    const td = {
      padding: '12px 14px',
      borderBottom: '1px solid var(--border-subtle)',
      verticalAlign: 'middle'
    };
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SectionHeader, {
      eyebrow: "Patio \xB7 Dep\xF3sito Norte",
      title: "Dashboard",
      subtitle: "142 equipos en patio \xB7 actualizado hace 4 min",
      actions: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
        variant: "secondary",
        size: "md",
        iconLeft: /*#__PURE__*/React.createElement(Icon, {
          name: "clipboard-check"
        }),
        onClick: () => go('inspection')
      }, "Inspecci\xF3n"), /*#__PURE__*/React.createElement(Button, {
        size: "md",
        iconLeft: /*#__PURE__*/React.createElement(Icon, {
          name: "log-in"
        }),
        onClick: () => go('intake')
      }, "Registrar ingreso"))
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        gap: '16px',
        marginBottom: '20px'
      }
    }, /*#__PURE__*/React.createElement(StatCard, {
      label: "En patio",
      value: "142",
      icon: /*#__PURE__*/React.createElement(Icon, {
        name: "container"
      }),
      delta: "8 ingresos hoy",
      deltaDir: "up"
    }), /*#__PURE__*/React.createElement(StatCard, {
      label: "En reparaci\xF3n",
      value: "57",
      variant: "accent",
      icon: /*#__PURE__*/React.createElement(Icon, {
        name: "wrench"
      }),
      note: "45 reparaci\xF3n pendiente"
    }), /*#__PURE__*/React.createElement(StatCard, {
      label: "Despachados hoy",
      value: "14",
      icon: /*#__PURE__*/React.createElement(Icon, {
        name: "truck"
      }),
      delta: "vs 11 ayer",
      deltaDir: "up"
    }), /*#__PURE__*/React.createElement(StatCard, {
      label: "+30 d\xEDas en reparaci\xF3n",
      value: String(D.kpis.masDe30),
      variant: "critical",
      icon: /*#__PURE__*/React.createElement(Icon, {
        name: "clock-alert"
      }),
      note: "requieren atenci\xF3n"
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: '1.7fr 1fr',
        gap: '20px',
        alignItems: 'start'
      }
    }, /*#__PURE__*/React.createElement(Card, {
      bodyFlush: true,
      title: /*#__PURE__*/React.createElement("span", {
        style: {
          display: 'flex',
          alignItems: 'center',
          gap: 8
        }
      }, /*#__PURE__*/React.createElement(Icon, {
        name: "clock-alert",
        size: 18,
        color: 'var(--red-400)'
      }), "Equipos demorados"),
      actions: /*#__PURE__*/React.createElement("div", {
        style: {
          display: 'flex',
          alignItems: 'center',
          gap: 14
        }
      }, /*#__PURE__*/React.createElement(Switch, {
        label: "Solo +30 d\xEDas",
        checked: onlyCritical,
        onChange: e => setOnlyCritical(e.target.checked)
      }), /*#__PURE__*/React.createElement(Button, {
        variant: "ghost",
        size: "sm",
        onClick: () => go('aging')
      }, "Ver todos"))
    }, /*#__PURE__*/React.createElement("table", {
      style: {
        width: '100%',
        borderCollapse: 'collapse'
      }
    }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", {
      style: th
    }, "Contenedor"), /*#__PURE__*/React.createElement("th", {
      style: th
    }, "Reparaci\xF3n"), /*#__PURE__*/React.createElement("th", {
      style: th
    }, "Estado"), /*#__PURE__*/React.createElement("th", {
      style: th
    }, "Antig\xFCedad"), /*#__PURE__*/React.createElement("th", {
      style: {
        ...th,
        textAlign: 'right'
      }
    }))), /*#__PURE__*/React.createElement("tbody", null, aging.map(c => /*#__PURE__*/React.createElement("tr", {
      key: c.id,
      style: {
        cursor: 'pointer'
      },
      onClick: () => go('detail'),
      onMouseEnter: e => e.currentTarget.style.background = 'var(--surface-hover)',
      onMouseLeave: e => e.currentTarget.style.background = 'transparent'
    }, /*#__PURE__*/React.createElement("td", {
      style: td
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-mono)',
        fontSize: 'var(--text-sm)',
        fontWeight: 600,
        letterSpacing: '0.03em'
      }
    }, c.code), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: '11px',
        color: 'var(--text-muted)',
        marginTop: 2
      }
    }, c.naviera, " \xB7 ", c.tipo, " \xB7 ", c.ubicacion)), /*#__PURE__*/React.createElement("td", {
      style: td
    }, c.repairType ? /*#__PURE__*/React.createElement(RepairTag, {
      type: c.repairType
    }) : /*#__PURE__*/React.createElement("span", {
      style: {
        color: 'var(--text-muted)',
        fontSize: 'var(--text-sm)'
      }
    }, "\u2014")), /*#__PURE__*/React.createElement("td", {
      style: td
    }, /*#__PURE__*/React.createElement(StatusBadge, {
      status: c.status
    })), /*#__PURE__*/React.createElement("td", {
      style: td
    }, /*#__PURE__*/React.createElement(AgingIndicator, {
      days: c.daysInStatus,
      showFlag: false,
      unit: "en reparaci\xF3n"
    })), /*#__PURE__*/React.createElement("td", {
      style: {
        ...td,
        textAlign: 'right'
      }
    }, /*#__PURE__*/React.createElement(IconButton, {
      variant: "ghost",
      size: "sm",
      "aria-label": "Abrir"
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "chevron-right"
    })))))))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: '20px'
      }
    }, /*#__PURE__*/React.createElement(Card, {
      title: "Resumen de Estatus"
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: '13px'
      }
    }, D.distribution.map(d => /*#__PURE__*/React.createElement(DistBar, {
      key: d.status,
      label: d.label,
      value: d.value,
      max: maxDist,
      color: distColors[d.status]
    })))), /*#__PURE__*/React.createElement(Card, {
      title: "Reparaciones por tipo"
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: '13px'
      }
    }, D.byRepair.map(d => /*#__PURE__*/React.createElement(DistBar, {
      key: d.type,
      label: d.label,
      value: d.value,
      max: maxRep,
      color: repColors[d.type]
    })))))));
  }
  Object.assign(window, {
    Dashboard
  });
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/depot/Dashboard.jsx", error: String((e && e.message) || e) }); }

// ui_kits/depot/Inspection.jsx
try { (() => {
/* __IIFE__ */
;
(function () {
  // TankFlow UI kit — Inspección & definición de reparación.
  const {
    Card,
    SectionHeader,
    Input,
    Select,
    Button,
    Switch,
    StatusBadge,
    RepairTag
  } = window.TankFlowDesignSystem_32ec47;
  const REPAIRS = [{
    type: 'estructural',
    label: 'Estructural',
    icon: 'hard-hat',
    desc: 'Paneles, esquineros, piso, techo'
  }, {
    type: 'interior',
    label: 'Interior',
    icon: 'package',
    desc: 'Revestimiento, listones, ventilación'
  }, {
    type: 'rotulacion',
    label: 'Rotulación',
    icon: 'tag',
    desc: 'Placas, marcas, números ISO'
  }, {
    type: 'pintura',
    label: 'Pintura',
    icon: 'paint-roller',
    desc: 'Tratamiento y repintado'
  }, {
    type: 'regulatoria',
    label: 'Insp. regulatoria',
    icon: 'shield-check',
    desc: 'CSC / IICL / ensayos'
  }];
  const repColors = {
    estructural: 'var(--rep-estructural)',
    interior: 'var(--rep-interior)',
    rotulacion: 'var(--rep-rotulacion)',
    pintura: 'var(--rep-pintura)',
    regulatoria: 'var(--rep-regulatoria)'
  };
  function RepairOption({
    r,
    selected,
    onToggle
  }) {
    return /*#__PURE__*/React.createElement("button", {
      onClick: onToggle,
      style: {
        display: 'flex',
        alignItems: 'flex-start',
        gap: 12,
        textAlign: 'left',
        cursor: 'pointer',
        padding: '14px',
        borderRadius: 'var(--radius-md)',
        border: '1px solid ' + (selected ? repColors[r.type] : 'var(--border-default)'),
        background: selected ? 'color-mix(in srgb, ' + repColors[r.type] + ' 12%, transparent)' : 'var(--surface-raised)',
        transition: 'border-color 120ms, background 120ms'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 36,
        height: 36,
        flex: 'none',
        borderRadius: 'var(--radius-sm)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'color-mix(in srgb, ' + repColors[r.type] + ' 18%, transparent)'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: r.icon,
      size: 19,
      color: repColors[r.type]
    })), /*#__PURE__*/React.createElement("span", {
      style: {
        flex: 1
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 8
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontWeight: 600,
        fontSize: 'var(--text-base)'
      }
    }, r.label), selected && /*#__PURE__*/React.createElement(Icon, {
      name: "check",
      size: 15,
      color: repColors[r.type]
    })), /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'block',
        fontSize: 'var(--text-xs)',
        color: 'var(--text-muted)',
        marginTop: 3
      }
    }, r.desc)));
  }
  function Inspection({
    go
  }) {
    const [needsRepair, setNeedsRepair] = React.useState(true);
    const [selected, setSelected] = React.useState(['estructural']);
    const toggle = t => setSelected(s => s.includes(t) ? s.filter(x => x !== t) : [...s, t]);
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SectionHeader, {
      eyebrow: "Operaci\xF3n \xB7 Inspecci\xF3n",
      title: "Inspecci\xF3n de equipo",
      subtitle: "MSKU 204418-7 \xB7 40HC \xB7 Maersk \xB7 posici\xF3n B3-14",
      actions: /*#__PURE__*/React.createElement(StatusBadge, {
        status: "inspeccion-pendiente"
      })
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: '1.3fr 1fr',
        gap: '20px',
        alignItems: 'start'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: '20px'
      }
    }, /*#__PURE__*/React.createElement(Card, {
      title: "Checklist de inspecci\xF3n"
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column'
      }
    }, [['Estructura externa y esquineros', 'fail'], ['Pisos y largueros', 'ok'], ['Puertas y burletes', 'ok'], ['Interior / revestimiento', 'warn'], ['Marcas, placas y CSC', 'ok']].map(([label, st], i) => /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '12px 2px',
        borderBottom: i < 4 ? '1px solid var(--border-subtle)' : 'none'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 'var(--text-base)'
      }
    }, label), /*#__PURE__*/React.createElement(StatusBadge, {
      tone: st === 'ok' ? 'ok' : st === 'warn' ? 'warn' : 'critical',
      dot: true
    }, st === 'ok' ? 'Conforme' : st === 'warn' ? 'Observado' : 'No conforme'))))), /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
      }
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        fontWeight: 600,
        fontSize: 'var(--text-md)'
      }
    }, "\xBFEl equipo requiere reparaci\xF3n?"), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 'var(--text-sm)',
        color: 'var(--text-muted)',
        marginTop: 3
      }
    }, "Define el flujo siguiente del contenedor")), /*#__PURE__*/React.createElement(Switch, {
      checked: needsRepair,
      onChange: e => setNeedsRepair(e.target.checked),
      label: needsRepair ? 'Sí' : 'No'
    })))), /*#__PURE__*/React.createElement(Card, {
      title: "Definici\xF3n de reparaci\xF3n"
    }, needsRepair ? /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: '12px'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 'var(--text-xs)',
        color: 'var(--text-secondary)',
        fontWeight: 500
      }
    }, "Tipo de reparaci\xF3n (uno o varios)"), REPAIRS.map(r => /*#__PURE__*/React.createElement(RepairOption, {
      key: r.type,
      r: r,
      selected: selected.includes(r.type),
      onToggle: () => toggle(r.type)
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: 12,
        marginTop: 4
      }
    }, /*#__PURE__*/React.createElement(Select, {
      label: "Prioridad",
      options: ['Normal', 'Alta', 'Urgente']
    }), /*#__PURE__*/React.createElement(Input, {
      label: "ETA repuesto",
      mono: true,
      placeholder: "2026-06-21"
    }))) : /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 12,
        padding: '24px 0',
        textAlign: 'center'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "check-check",
      size: 34,
      color: 'var(--green-400)'
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        color: 'var(--text-secondary)'
      }
    }, "Sin reparaci\xF3n. El equipo pasa directo a ", /*#__PURE__*/React.createElement("strong", {
      style: {
        color: 'var(--green-400)'
      }
    }, "Disponible"), " para despacho.")))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 10,
        justifyContent: 'flex-end',
        marginTop: 20
      }
    }, /*#__PURE__*/React.createElement(Button, {
      variant: "ghost",
      onClick: () => go('dashboard')
    }, "Cancelar"), needsRepair ? /*#__PURE__*/React.createElement(Button, {
      variant: "primary",
      iconLeft: /*#__PURE__*/React.createElement(Icon, {
        name: "wrench"
      }),
      onClick: () => go('detail')
    }, "Crear orden de reparaci\xF3n") : /*#__PURE__*/React.createElement(Button, {
      variant: "success",
      iconLeft: /*#__PURE__*/React.createElement(Icon, {
        name: "check"
      }),
      onClick: () => go('dashboard')
    }, "Marcar como disponible")));
  }
  Object.assign(window, {
    Inspection
  });
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/depot/Inspection.jsx", error: String((e && e.message) || e) }); }

// ui_kits/depot/Intake.jsx
try { (() => {
/* __IIFE__ */
;
(function () {
  // TankFlow UI kit — Registrar ingreso (Gate-in).
  const {
    Card,
    SectionHeader,
    Input,
    Select,
    Button,
    StatusBadge
  } = window.TankFlowDesignSystem_32ec47;
  function FieldRow({
    children,
    cols = 2
  }) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: `repeat(${cols}, 1fr)`,
        gap: '16px'
      }
    }, children);
  }
  function Intake({
    go
  }) {
    const [done, setDone] = React.useState(false);
    const [code, setCode] = React.useState('');
    if (done) {
      return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SectionHeader, {
        eyebrow: "Operaci\xF3n \xB7 Gate-in",
        title: "Ingreso registrado"
      }), /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement("div", {
        style: {
          display: 'flex',
          alignItems: 'center',
          gap: 16,
          padding: '8px 0 18px'
        }
      }, /*#__PURE__*/React.createElement("div", {
        style: {
          width: 52,
          height: 52,
          borderRadius: '50%',
          background: 'rgba(45,212,160,0.14)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flex: 'none'
        }
      }, /*#__PURE__*/React.createElement(Icon, {
        name: "check-check",
        size: 26,
        color: 'var(--green-400)'
      })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
        style: {
          fontFamily: 'var(--font-display)',
          fontSize: 'var(--text-xl)',
          fontWeight: 700
        }
      }, code || 'MSKU 204418-7', " ingres\xF3 al patio"), /*#__PURE__*/React.createElement("div", {
        style: {
          color: 'var(--text-muted)',
          marginTop: 4
        }
      }, "Posici\xF3n asignada B3-14 \xB7 siguiente paso: inspecci\xF3n"))), /*#__PURE__*/React.createElement("div", {
        style: {
          display: 'flex',
          gap: 10
        }
      }, /*#__PURE__*/React.createElement(Button, {
        iconLeft: /*#__PURE__*/React.createElement(Icon, {
          name: "clipboard-check"
        }),
        onClick: () => go('inspection')
      }, "Iniciar inspecci\xF3n"), /*#__PURE__*/React.createElement(Button, {
        variant: "secondary",
        onClick: () => setDone(false)
      }, "Registrar otro"), /*#__PURE__*/React.createElement(Button, {
        variant: "ghost",
        onClick: () => go('dashboard')
      }, "Volver al panel"))));
    }
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SectionHeader, {
      eyebrow: "Operaci\xF3n \xB7 Gate-in",
      title: "Registrar ingreso",
      subtitle: "Alta de un contenedor que ingresa al dep\xF3sito",
      actions: /*#__PURE__*/React.createElement(StatusBadge, {
        status: "inspeccion-pendiente"
      }, "Nuevo ingreso")
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: 760,
        display: 'flex',
        flexDirection: 'column',
        gap: '20px'
      }
    }, /*#__PURE__*/React.createElement(Card, {
      title: "Identificaci\xF3n del equipo"
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: '16px'
      }
    }, /*#__PURE__*/React.createElement(FieldRow, null, /*#__PURE__*/React.createElement(Input, {
      label: "C\xF3digo ISO 6346",
      mono: true,
      placeholder: "MSKU 204418-7",
      icon: /*#__PURE__*/React.createElement(Icon, {
        name: "container"
      }),
      value: code,
      onChange: e => setCode(e.target.value)
    }), /*#__PURE__*/React.createElement(Select, {
      label: "Tipo / tama\xF1o",
      placeholder: "Seleccionar\u2026",
      options: ['20DV', '40DV', '40HC', '20RF', '45HC', {
        value: '20TK',
        label: "20' Tank container"
      }, {
        value: '40TK',
        label: "40' Tank container"
      }]
    })), /*#__PURE__*/React.createElement(FieldRow, null, /*#__PURE__*/React.createElement(Select, {
      label: "Naviera",
      placeholder: "Seleccionar\u2026",
      options: ['Maersk', 'MSC', 'CMA CGM', 'Hapag-Lloyd', 'ONE', 'Evergreen', 'COSCO']
    }), /*#__PURE__*/React.createElement(Input, {
      label: "Tara (kg)",
      mono: true,
      placeholder: "3 750"
    })))), /*#__PURE__*/React.createElement(Card, {
      title: "Log\xEDstica de ingreso"
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: '16px'
      }
    }, /*#__PURE__*/React.createElement(FieldRow, null, /*#__PURE__*/React.createElement(Input, {
      label: "Transportista",
      placeholder: "Transporte Andino S.A.",
      icon: /*#__PURE__*/React.createElement(Icon, {
        name: "truck"
      })
    }), /*#__PURE__*/React.createElement(Input, {
      label: "Chofer / patente",
      placeholder: "AB 123 CD"
    })), /*#__PURE__*/React.createElement(FieldRow, null, /*#__PURE__*/React.createElement(Select, {
      label: "Posici\xF3n en patio",
      placeholder: "Asignar autom\xE1ticamente",
      options: ['Automática', 'B1', 'B2', 'B3', 'B4', 'B5', 'B6']
    }), /*#__PURE__*/React.createElement(Select, {
      label: "Condici\xF3n declarada",
      placeholder: "Seleccionar\u2026",
      options: ['Vacío — apto', 'Vacío — requiere inspección', 'Con daño visible']
    })), /*#__PURE__*/React.createElement(Input, {
      label: "Observaciones",
      placeholder: "Notas del operador de port\xF3n\u2026"
    }))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 10,
        justifyContent: 'flex-end'
      }
    }, /*#__PURE__*/React.createElement(Button, {
      variant: "ghost",
      onClick: () => go('dashboard')
    }, "Cancelar"), /*#__PURE__*/React.createElement(Button, {
      iconLeft: /*#__PURE__*/React.createElement(Icon, {
        name: "log-in"
      }),
      onClick: () => setDone(true)
    }, "Confirmar ingreso"))));
  }
  Object.assign(window, {
    Intake
  });
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/depot/Intake.jsx", error: String((e && e.message) || e) }); }

// ui_kits/depot/MyTasks.jsx
try { (() => {
/* __IIFE__ */
;
(function () {
  // TankFlow UI kit — Mis tareas: equipos que esperan una acción del usuario actual.
  const {
    Card,
    SectionHeader,
    StatusBadge,
    RepairTag,
    AgingIndicator,
    StatCard,
    Button,
    IconButton
  } = window.TankFlowDesignSystem_32ec47;

  // Cada grupo = una etapa que requiere acción, en orden de prioridad operativa.
  const GROUPS = [{
    status: 'reparacion-pendiente',
    title: 'Reparación pendiente — iniciar trabajo',
    icon: 'package-search',
    action: {
      label: 'Iniciar reparación',
      icon: 'wrench',
      route: 'detail',
      variant: 'primary'
    }
  }, {
    status: 'inspeccion-pendiente',
    title: 'Pendientes de inspección',
    icon: 'clipboard-list',
    action: {
      label: 'Inspeccionar',
      icon: 'clipboard-check',
      route: 'inspection',
      variant: 'primary'
    }
  }, {
    status: 'en-reparacion',
    title: 'En reparación — por finalizar',
    icon: 'wrench',
    action: {
      label: 'Finalizar',
      icon: 'check',
      route: 'detail',
      variant: 'success'
    }
  }];
  function TaskRow({
    c,
    action,
    go,
    last
  }) {
    return /*#__PURE__*/React.createElement("div", {
      onClick: () => go('repairs', c),
      onMouseEnter: e => e.currentTarget.style.background = 'var(--surface-hover)',
      onMouseLeave: e => e.currentTarget.style.background = 'transparent',
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 16,
        padding: '12px 16px',
        cursor: 'pointer',
        borderBottom: last ? 'none' : '1px solid var(--border-subtle)',
        transition: 'background 120ms'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        minWidth: 150
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-mono)',
        fontSize: 'var(--text-sm)',
        fontWeight: 600,
        letterSpacing: '0.03em'
      }
    }, c.code), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: '11px',
        color: 'var(--text-muted)',
        marginTop: 2
      }
    }, c.naviera, " \xB7 ", c.tipo, " \xB7 ", c.ubicacion)), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1
      }
    }, c.repairType ? /*#__PURE__*/React.createElement(RepairTag, {
      type: c.repairType
    }) : /*#__PURE__*/React.createElement("span", {
      style: {
        color: 'var(--text-muted)',
        fontSize: 'var(--text-sm)'
      }
    }, "Sin reparaci\xF3n")), /*#__PURE__*/React.createElement("div", {
      style: {
        width: 100
      }
    }, /*#__PURE__*/React.createElement(AgingIndicator, {
      days: c.daysInStatus,
      showFlag: false
    })), /*#__PURE__*/React.createElement("div", {
      onClick: e => e.stopPropagation(),
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: 8
      }
    }, /*#__PURE__*/React.createElement(Button, {
      variant: action.variant,
      size: "sm",
      iconLeft: /*#__PURE__*/React.createElement(Icon, {
        name: action.icon
      }),
      onClick: () => go(action.route)
    }, action.label), /*#__PURE__*/React.createElement(IconButton, {
      variant: "ghost",
      size: "sm",
      "aria-label": "Abrir",
      onClick: () => go('repairs', c)
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "chevron-right"
    }))));
  }
  function MyTasks({
    go
  }) {
    const D = window.TF_DATA;
    const me = D.currentUser;
    const mine = D.containers.filter(c => c.operador === me.name && c.status !== 'disponible');
    const groups = GROUPS.map(g => ({
      ...g,
      items: mine.filter(c => c.status === g.status).sort((a, b) => b.daysInStatus - a.daysInStatus)
    })).filter(g => g.items.length > 0);
    const total = mine.length;
    const critical = mine.filter(c => c.daysInStatus >= 30).length;
    const repuesto = mine.filter(c => c.status === 'reparacion-pendiente').length;
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SectionHeader, {
      eyebrow: `Sesión · ${me.role}`,
      title: "Mis tareas",
      subtitle: `${me.name} · equipos que esperan una acción tuya`,
      actions: /*#__PURE__*/React.createElement(Button, {
        variant: "secondary",
        size: "md",
        iconLeft: /*#__PURE__*/React.createElement(Icon, {
          name: "container"
        }),
        onClick: () => go('yard')
      }, "Ver todo el patio")
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: '16px',
        marginBottom: 24
      }
    }, /*#__PURE__*/React.createElement(StatCard, {
      label: "Tareas asignadas",
      value: String(total),
      variant: "accent",
      icon: /*#__PURE__*/React.createElement(Icon, {
        name: "list-checks"
      }),
      note: "esperan tu acci\xF3n"
    }), /*#__PURE__*/React.createElement(StatCard, {
      label: "Reparaci\xF3n pendiente",
      value: String(repuesto),
      icon: /*#__PURE__*/React.createElement(Icon, {
        name: "package-search"
      }),
      note: "iniciar trabajo"
    }), /*#__PURE__*/React.createElement(StatCard, {
      label: "+30 d\xEDas en reparaci\xF3n",
      value: String(critical),
      variant: "critical",
      icon: /*#__PURE__*/React.createElement(Icon, {
        name: "clock-alert"
      }),
      note: "prioridad alta"
    })), groups.length === 0 ? /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 12,
        padding: '40px 0',
        textAlign: 'center'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "check-check",
      size: 34,
      color: "var(--green-400)"
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        color: 'var(--text-secondary)'
      }
    }, "No ten\xE9s tareas pendientes. Todo al d\xEDa."))) : /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 20
      }
    }, groups.map(g => /*#__PURE__*/React.createElement(Card, {
      key: g.status,
      bodyFlush: true,
      title: /*#__PURE__*/React.createElement("span", {
        style: {
          display: 'flex',
          alignItems: 'center',
          gap: 9
        }
      }, /*#__PURE__*/React.createElement(Icon, {
        name: g.icon,
        size: 18,
        color: g.status === 'reparacion-pendiente' ? 'var(--amber-400)' : 'var(--blue-300)'
      }), g.title),
      actions: /*#__PURE__*/React.createElement("span", {
        style: {
          fontFamily: 'var(--font-mono)',
          fontSize: 12,
          fontWeight: 600,
          color: 'var(--text-secondary)',
          background: 'var(--surface-raised)',
          padding: '2px 9px',
          borderRadius: 'var(--radius-pill)'
        }
      }, g.items.length)
    }, g.items.map((c, i) => /*#__PURE__*/React.createElement(TaskRow, {
      key: c.id,
      c: c,
      action: g.action,
      go: go,
      last: i === g.items.length - 1
    }))))));
  }
  Object.assign(window, {
    MyTasks
  });
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/depot/MyTasks.jsx", error: String((e && e.message) || e) }); }

// ui_kits/depot/Repairs.jsx
try { (() => {
/* __IIFE__ */
;
(function () {
  // TankFlow UI kit — Formularios de registro de trabajo por proceso de reparación.
  const {
    Card,
    SectionHeader,
    Input,
    Select,
    Button,
    Switch,
    StatusBadge,
    RepairTag
  } = window.TankFlowDesignSystem_32ec47;
  const repColors = {
    estructural: 'var(--rep-estructural)',
    interior: 'var(--rep-interior)',
    rotulacion: 'var(--rep-rotulacion)',
    pintura: 'var(--rep-pintura)'
  };

  // Definición de cada proceso: tareas (checklist) + materiales sugeridos.
  const PROCESSES = {
    rotulacion: {
      label: 'Reparación de Rotulación',
      short: 'Rotulación',
      icon: 'tag',
      desc: 'Placas, marcas y rótulos del tank container',
      tasks: ['Repintado de número ISO 6346', 'Rótulos de mercancía peligrosa (IMDG / placas-etiqueta)', 'Número UN y panel naranja', 'Actualización de placa CSC / data plate', 'Marcas de última prueba (2.5 / 5 años)'],
      materials: ['Plantillas de números', 'Pintura de marcado', 'Placa CSC', 'Set de placas-etiqueta']
    },
    estructural: {
      label: 'Reparación Estructural',
      short: 'Estructural',
      icon: 'hard-hat',
      desc: 'Marco ISO, soportes del tanque y accesos',
      tasks: ['Enderezado del marco ISO', 'Reemplazo de esquineros / cantoneras', 'Reparación de cunas y soportes del tanque', 'Escalera, pasarela y barandas', 'Tratamiento anticorrosivo de soldaduras'],
      materials: ['Esquinero ISO', 'Perfil de marco', 'Soporte / cuna', 'Electrodos / gas']
    },
    interior: {
      label: 'Reparación Interior',
      short: 'Interior',
      icon: 'package',
      desc: 'Revestimiento interno, válvulas y estanqueidad',
      tasks: ['Inspección y reparación de revestimiento interno', 'Limpieza y desgasificación del tanque', 'Reparación de válvula de fondo y descarga', 'Sellado de boca de hombre (manlid) y tapa', 'Prueba de estanqueidad interior'],
      materials: ['Revestimiento interno', 'Juntas / o-rings', 'Válvula de fondo', 'Sellador']
    },
    pintura: {
      label: 'Pintura',
      short: 'Pintura',
      icon: 'paint-roller',
      desc: 'Tratamiento y repintado del marco y cilindro',
      tasks: ['Lijado y preparación del marco', 'Imprimación (primer) anticorrosiva', 'Pintura de acabado del marco', 'Repintado del cilindro / tanque', 'Control de espesor y secado'],
      materials: ['Imprimación anticorrosiva', 'Pintura de acabado', 'Disolvente', 'Discos de lija']
    }
  };
  const ORDER = ['rotulacion', 'estructural', 'interior', 'pintura'];
  const CYCLE = ['pendiente', 'curso', 'hecho'];
  const STATE_META = {
    pendiente: {
      tone: 'neutral',
      label: 'Pendiente'
    },
    curso: {
      tone: 'warn',
      label: 'En curso'
    },
    hecho: {
      tone: 'ok',
      label: 'Hecho'
    }
  };
  function ProcessTab({
    id,
    active,
    onClick
  }) {
    const p = PROCESSES[id];
    const [hover, setHover] = React.useState(false);
    const c = repColors[id];
    return /*#__PURE__*/React.createElement("button", {
      onClick: onClick,
      onMouseEnter: () => setHover(true),
      onMouseLeave: () => setHover(false),
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 9,
        cursor: 'pointer',
        padding: '9px 14px',
        borderRadius: 'var(--radius-md)',
        fontFamily: 'var(--font-body)',
        fontSize: 'var(--text-sm)',
        fontWeight: 600,
        border: '1px solid ' + (active ? c : 'var(--border-default)'),
        background: active ? 'color-mix(in srgb, ' + c + ' 14%, transparent)' : hover ? 'var(--surface-hover)' : 'var(--surface-raised)',
        color: active ? 'var(--text-primary)' : 'var(--text-secondary)',
        transition: 'border-color 120ms, background 120ms, color 120ms',
        whiteSpace: 'nowrap'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 9,
        height: 9,
        borderRadius: 2,
        background: c,
        flex: 'none'
      }
    }), p.short);
  }
  function TaskRow({
    label,
    state,
    onCycle,
    last
  }) {
    const meta = STATE_META[state];
    const [hover, setHover] = React.useState(false);
    return /*#__PURE__*/React.createElement("button", {
      onClick: onCycle,
      onMouseEnter: () => setHover(true),
      onMouseLeave: () => setHover(false),
      style: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 12,
        width: '100%',
        textAlign: 'left',
        cursor: 'pointer',
        border: 'none',
        background: hover ? 'var(--surface-hover)' : 'transparent',
        padding: '13px 8px',
        margin: '0 -8px',
        width: 'calc(100% + 16px)',
        borderBottom: last ? 'none' : '1px solid var(--border-subtle)',
        fontFamily: 'var(--font-body)',
        transition: 'background 120ms'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 11
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: state === 'hecho' ? 'check-circle-2' : state === 'curso' ? 'loader' : 'circle',
      size: 18,
      color: state === 'hecho' ? 'var(--green-400)' : state === 'curso' ? 'var(--amber-400)' : 'var(--text-muted)'
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 'var(--text-base)',
        color: state === 'pendiente' ? 'var(--text-secondary)' : 'var(--text-primary)'
      }
    }, label)), /*#__PURE__*/React.createElement(StatusBadge, {
      tone: meta.tone,
      dot: true
    }, meta.label));
  }
  function RepairForm({
    go,
    container
  }) {
    const initProc = container && PROCESSES[container.repairType] ? container.repairType : 'rotulacion';
    const [active, setActive] = React.useState(initProc);
    const [states, setStates] = React.useState({});
    const [waiting, setWaiting] = React.useState(false);
    const [reqForm, setReqForm] = React.useState({
      part: '',
      qty: '',
      urg: 'Normal',
      note: ''
    });
    const [requests, setRequests] = React.useState([{
      part: 'Junta de manlid 480 mm',
      qty: '2',
      urg: 'Alta',
      estado: 'En compras'
    }]);
    React.useEffect(() => {
      if (container && PROCESSES[container.repairType]) setActive(container.repairType);
    }, [container]);
    const setReq = (k, v) => setReqForm(f => ({
      ...f,
      [k]: v
    }));
    const submitReq = () => {
      if (!reqForm.part.trim()) return;
      setRequests(r => [{
        part: reqForm.part.trim(),
        qty: reqForm.qty || '1',
        urg: reqForm.urg,
        estado: 'Solicitado'
      }, ...r]);
      setReqForm({
        part: '',
        qty: '',
        urg: 'Normal',
        note: ''
      });
    };
    const p = PROCESSES[active];
    const c = repColors[active];
    // estado por tarea, namespaced por proceso
    const key = i => active + ':' + i;
    const getState = i => states[key(i)] || 'pendiente';
    const cycle = i => setStates(s => {
      const cur = s[key(i)] || 'pendiente';
      const next = CYCLE[(CYCLE.indexOf(cur) + 1) % CYCLE.length];
      return {
        ...s,
        [key(i)]: next
      };
    });
    const done = p.tasks.filter((_, i) => getState(i) === 'hecho').length;
    const total = p.tasks.length;
    const pct = Math.round(done / total * 100);
    const allDone = done === total;
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SectionHeader, {
      eyebrow: "Reparaci\xF3n \xB7 Registro de trabajo",
      title: p.label,
      subtitle: container ? `${container.code} · ${container.tipo} · ${container.naviera} · posición ${container.ubicacion}` : "TGHU 785530-2 · T11 (40' Tank · 26 000 L) · Stolt · Orden #RP-1183 · posición B3-14",
      actions: /*#__PURE__*/React.createElement(StatusBadge, {
        status: "en-reparacion"
      })
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 10,
        marginBottom: 22,
        flexWrap: 'wrap'
      }
    }, ORDER.map(id => /*#__PURE__*/React.createElement(ProcessTab, {
      key: id,
      id: id,
      active: id === active,
      onClick: () => setActive(id)
    }))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: '1.3fr 1fr',
        gap: '20px',
        alignItems: 'start'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: '20px'
      }
    }, /*#__PURE__*/React.createElement(Card, {
      title: 'Tareas · ' + p.short,
      actions: /*#__PURE__*/React.createElement("span", {
        style: {
          fontFamily: 'var(--font-mono)',
          fontSize: 'var(--text-xs)',
          color: 'var(--text-muted)'
        }
      }, done, "/", total, " hechas")
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        height: 6,
        borderRadius: 999,
        background: 'var(--bg-sunken)',
        overflow: 'hidden',
        marginBottom: 6
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        height: '100%',
        width: pct + '%',
        background: c,
        borderRadius: 999,
        transition: 'width 280ms var(--ease-out)'
      }
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 'var(--text-xs)',
        color: 'var(--text-muted)',
        marginBottom: 6
      }
    }, "Toc\xE1 una tarea para avanzar su estado: Pendiente \u2192 En curso \u2192 Hecho."), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column'
      }
    }, p.tasks.map((t, i) => /*#__PURE__*/React.createElement(TaskRow, {
      key: i,
      label: t,
      state: getState(i),
      onCycle: () => cycle(i),
      last: i === total - 1
    })))), /*#__PURE__*/React.createElement(Card, {
      title: "Materiales y repuestos utilizados"
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 12
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 8,
        flexWrap: 'wrap'
      }
    }, p.materials.map((m, i) => /*#__PURE__*/React.createElement("span", {
      key: i,
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: 7,
        padding: '6px 11px',
        borderRadius: 'var(--radius-md)',
        border: '1px solid var(--border-default)',
        background: 'var(--surface-raised)',
        fontSize: 'var(--text-sm)',
        color: 'var(--text-secondary)'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "package",
      size: 14,
      color: c
    }), m))), /*#__PURE__*/React.createElement(Input, {
      label: "Agregar material / repuesto",
      placeholder: "Descripci\xF3n y cantidad\u2026",
      icon: /*#__PURE__*/React.createElement(Icon, {
        name: "plus"
      })
    })))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: '20px'
      }
    }, /*#__PURE__*/React.createElement(Card, {
      title: "Registro de trabajo"
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: '16px'
      }
    }, /*#__PURE__*/React.createElement(Select, {
      label: "Responsable",
      placeholder: "Asignar operario\u2026",
      options: ['M. Ferreyra', 'J. Cáceres', 'R. Pinto', 'D. Sosa', 'Cuadrilla A', 'Cuadrilla B']
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: 12
      }
    }, /*#__PURE__*/React.createElement(Input, {
      label: "Inicio",
      mono: true,
      placeholder: "2026-06-23",
      icon: /*#__PURE__*/React.createElement(Icon, {
        name: "calendar"
      })
    }), /*#__PURE__*/React.createElement(Input, {
      label: "Horas-hombre",
      mono: true,
      placeholder: "0.0"
    })), /*#__PURE__*/React.createElement(Select, {
      label: "Prioridad",
      options: ['Normal', 'Alta', 'Urgente']
    }), /*#__PURE__*/React.createElement(Input, {
      label: "Observaciones del trabajo",
      placeholder: "Detalle de lo realizado, hallazgos\u2026"
    }))), /*#__PURE__*/React.createElement(Card, {
      title: "Espera de repuesto"
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 12
      }
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        fontWeight: 600,
        fontSize: 'var(--text-base)'
      }
    }, "\xBFEn espera de repuesto?"), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 'var(--text-xs)',
        color: 'var(--text-muted)',
        marginTop: 3
      }
    }, "Detiene el avance y se cuenta la antig\xFCedad")), /*#__PURE__*/React.createElement(Switch, {
      checked: waiting,
      onChange: e => setWaiting(e.target.checked),
      label: waiting ? 'Sí' : 'No'
    })), waiting && /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 14,
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: 12
      }
    }, /*#__PURE__*/React.createElement(Input, {
      label: "Repuesto",
      placeholder: "V\xE1lvula de fondo"
    }), /*#__PURE__*/React.createElement(Input, {
      label: "ETA",
      mono: true,
      placeholder: "2026-07-02"
    }))), /*#__PURE__*/React.createElement(Card, {
      title: /*#__PURE__*/React.createElement("span", {
        style: {
          display: 'flex',
          alignItems: 'center',
          gap: 8
        }
      }, /*#__PURE__*/React.createElement(Icon, {
        name: "package-plus",
        size: 18,
        color: 'var(--amber-400)'
      }), "Solicitar repuesto"),
      actions: requests.length > 0 ? /*#__PURE__*/React.createElement("span", {
        style: {
          fontFamily: 'var(--font-mono)',
          fontSize: 12,
          fontWeight: 600,
          color: 'var(--text-secondary)',
          background: 'var(--surface-raised)',
          padding: '2px 9px',
          borderRadius: 'var(--radius-pill)'
        }
      }, requests.length) : null
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 12
      }
    }, /*#__PURE__*/React.createElement(Input, {
      label: "Repuesto / parte",
      placeholder: "Ej. V\xE1lvula de fondo 3\"",
      icon: /*#__PURE__*/React.createElement(Icon, {
        name: "package"
      }),
      value: reqForm.part,
      onChange: e => setReq('part', e.target.value)
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: '90px 1fr',
        gap: 12
      }
    }, /*#__PURE__*/React.createElement(Input, {
      label: "Cantidad",
      mono: true,
      placeholder: "1",
      value: reqForm.qty,
      onChange: e => setReq('qty', e.target.value)
    }), /*#__PURE__*/React.createElement(Select, {
      label: "Urgencia",
      options: ['Normal', 'Alta', 'Crítica'],
      value: reqForm.urg,
      onChange: e => setReq('urg', e.target.value)
    })), /*#__PURE__*/React.createElement(Input, {
      label: "Nota para compras",
      placeholder: "Especificaciones, medidas, proveedor\u2026",
      value: reqForm.note,
      onChange: e => setReq('note', e.target.value)
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        justifyContent: 'flex-end'
      }
    }, /*#__PURE__*/React.createElement(Button, {
      variant: "secondary",
      size: "sm",
      iconLeft: /*#__PURE__*/React.createElement(Icon, {
        name: "send"
      }),
      disabled: !reqForm.part.trim(),
      onClick: submitReq
    }, "Enviar solicitud"))), requests.length > 0 && /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 14,
        paddingTop: 14,
        borderTop: '1px solid var(--border-subtle)',
        display: 'flex',
        flexDirection: 'column',
        gap: 8
      }
    }, requests.map((r, i) => /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 10
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "package",
      size: 15,
      color: 'var(--text-muted)'
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        minWidth: 0
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 'var(--text-sm)',
        color: 'var(--text-primary)',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis'
      }
    }, r.part), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: '11px',
        color: 'var(--text-muted)',
        fontFamily: 'var(--font-mono)'
      }
    }, "x", r.qty, " \xB7 ", r.urg)), /*#__PURE__*/React.createElement(StatusBadge, {
      tone: r.estado === 'Solicitado' ? 'warn' : 'neutral',
      dot: true
    }, r.estado))))))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 10,
        justifyContent: 'flex-end',
        marginTop: 20
      }
    }, /*#__PURE__*/React.createElement(Button, {
      variant: "ghost",
      onClick: () => go('detail')
    }, "Cancelar"), /*#__PURE__*/React.createElement(Button, {
      variant: "secondary",
      iconLeft: /*#__PURE__*/React.createElement(Icon, {
        name: "save"
      }),
      onClick: () => go('detail')
    }, "Guardar avance"), /*#__PURE__*/React.createElement(Button, {
      variant: "success",
      iconLeft: /*#__PURE__*/React.createElement(Icon, {
        name: "check"
      }),
      disabled: !allDone,
      onClick: () => go('detail')
    }, allDone ? 'Finalizar ' + p.short.toLowerCase() : 'Completar tareas para finalizar')));
  }
  Object.assign(window, {
    RepairForm
  });
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/depot/Repairs.jsx", error: String((e && e.message) || e) }); }

// ui_kits/depot/Yard.jsx
try { (() => {
/* __IIFE__ */
;
(function () {
  // TankFlow UI kit — Patio: todos los equipos en el depósito + acción por equipo.
  const {
    Card,
    SectionHeader,
    StatusBadge,
    RepairTag,
    AgingIndicator,
    Button,
    IconButton,
    Input,
    Select,
    Switch
  } = window.TankFlowDesignSystem_32ec47;

  // Contextual next action per lifecycle status.
  const ACTION = {
    'inspeccion-pendiente': {
      label: 'Inspeccionar',
      icon: 'clipboard-check',
      route: 'inspection',
      variant: 'primary'
    },
    'reparacion-pendiente': {
      label: 'Ver orden',
      icon: 'wrench',
      route: 'detail',
      variant: 'secondary'
    },
    'en-reparacion': {
      label: 'Ver orden',
      icon: 'wrench',
      route: 'detail',
      variant: 'secondary'
    },
    'disponible': {
      label: 'Despachar',
      icon: 'truck',
      route: 'detail',
      variant: 'success'
    }
  };
  const TABS = [{
    id: 'todos',
    label: 'Todos'
  }, {
    id: 'inspeccion-pendiente',
    label: 'Inspección Pendiente'
  }, {
    id: 'reparacion-pendiente',
    label: 'Reparación Pendiente'
  }, {
    id: 'en-reparacion',
    label: 'En Reparación'
  }, {
    id: 'disponible',
    label: 'Disponible'
  }];
  function Yard({
    go
  }) {
    const D = window.TF_DATA;
    const [tab, setTab] = React.useState('todos');
    const [q, setQ] = React.useState('');
    const [onlyCritical, setOnlyCritical] = React.useState(false);
    const [sortDays, setSortDays] = React.useState(true);

    // Todos los equipos físicamente en el depósito (los 4 estados son in-yard).
    const inYard = D.containers;
    const counts = TABS.reduce((acc, t) => {
      acc[t.id] = t.id === 'todos' ? inYard.length : inYard.filter(c => c.status === t.id).length;
      return acc;
    }, {});
    let rows = inYard.filter(c => tab === 'todos' || c.status === tab).filter(c => !onlyCritical || c.daysInStatus >= 30).filter(c => {
      if (!q.trim()) return true;
      const s = q.toLowerCase();
      return c.code.toLowerCase().includes(s) || c.naviera.toLowerCase().includes(s) || c.ubicacion.toLowerCase().includes(s);
    });
    rows = rows.slice().sort((a, b) => sortDays ? b.daysInStatus - a.daysInStatus : a.code.localeCompare(b.code));
    const th = {
      textAlign: 'left',
      padding: '10px 14px',
      fontSize: '10px',
      fontFamily: 'var(--font-mono)',
      textTransform: 'uppercase',
      letterSpacing: '0.07em',
      color: 'var(--text-muted)',
      fontWeight: 600,
      borderBottom: '1px solid var(--border-subtle)',
      whiteSpace: 'nowrap'
    };
    const td = {
      padding: '12px 14px',
      borderBottom: '1px solid var(--border-subtle)',
      verticalAlign: 'middle'
    };
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SectionHeader, {
      eyebrow: "Patio \xB7 Dep\xF3sito Norte",
      title: "Equipos en patio",
      subtitle: `${inYard.length} equipos en el depósito · ${counts['reparacion-pendiente']} con reparación pendiente`,
      actions: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
        variant: "secondary",
        size: "md",
        iconLeft: /*#__PURE__*/React.createElement(Icon, {
          name: "clipboard-check"
        }),
        onClick: () => go('inspection')
      }, "Inspecci\xF3n"), /*#__PURE__*/React.createElement(Button, {
        size: "md",
        iconLeft: /*#__PURE__*/React.createElement(Icon, {
          name: "log-in"
        }),
        onClick: () => go('intake')
      }, "Registrar ingreso"))
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 6,
        flexWrap: 'wrap',
        marginBottom: 16
      }
    }, TABS.map(t => {
      const active = tab === t.id;
      return /*#__PURE__*/React.createElement("button", {
        key: t.id,
        onClick: () => setTab(t.id),
        style: {
          display: 'inline-flex',
          alignItems: 'center',
          gap: 8,
          cursor: 'pointer',
          padding: '7px 13px',
          borderRadius: 'var(--radius-pill)',
          fontFamily: 'var(--font-body)',
          fontSize: 'var(--text-sm)',
          fontWeight: active ? 600 : 400,
          border: '1px solid ' + (active ? 'var(--accent)' : 'var(--border-default)'),
          background: active ? 'var(--accent-quiet)' : 'var(--surface-raised)',
          color: active ? 'var(--blue-300)' : 'var(--text-secondary)',
          transition: 'all 120ms'
        }
      }, t.label, /*#__PURE__*/React.createElement("span", {
        style: {
          fontFamily: 'var(--font-mono)',
          fontSize: 11,
          fontWeight: 600,
          padding: '0 6px',
          borderRadius: 'var(--radius-pill)',
          background: active ? 'rgba(31,156,240,0.18)' : 'var(--steel-800)',
          color: active ? 'var(--blue-300)' : 'var(--text-muted)'
        }
      }, counts[t.id]));
    })), /*#__PURE__*/React.createElement(Card, {
      bodyFlush: true
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 12,
        padding: '12px 14px',
        borderBottom: '1px solid var(--border-subtle)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: 300,
        maxWidth: '45%'
      }
    }, /*#__PURE__*/React.createElement(Input, {
      mono: true,
      placeholder: "Buscar c\xF3digo, naviera o posici\xF3n\u2026",
      icon: /*#__PURE__*/React.createElement(Icon, {
        name: "search"
      }),
      value: q,
      onChange: e => setQ(e.target.value)
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1
      }
    }), /*#__PURE__*/React.createElement(Switch, {
      label: "Solo +30 d\xEDas",
      checked: onlyCritical,
      onChange: e => setOnlyCritical(e.target.checked)
    }), /*#__PURE__*/React.createElement(Button, {
      variant: "secondary",
      size: "sm",
      iconLeft: /*#__PURE__*/React.createElement(Icon, {
        name: "arrow-up-down"
      }),
      onClick: () => setSortDays(v => !v)
    }, sortDays ? 'Antigüedad' : 'Código')), /*#__PURE__*/React.createElement("table", {
      style: {
        width: '100%',
        borderCollapse: 'collapse'
      }
    }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", {
      style: th
    }, "Contenedor"), /*#__PURE__*/React.createElement("th", {
      style: th
    }, "Tipo"), /*#__PURE__*/React.createElement("th", {
      style: th
    }, "Posici\xF3n"), /*#__PURE__*/React.createElement("th", {
      style: th
    }, "Reparaci\xF3n"), /*#__PURE__*/React.createElement("th", {
      style: th
    }, "Estado"), /*#__PURE__*/React.createElement("th", {
      style: th
    }, "Antig\xFCedad"), /*#__PURE__*/React.createElement("th", {
      style: {
        ...th,
        textAlign: 'right'
      }
    }, "Acci\xF3n"))), /*#__PURE__*/React.createElement("tbody", null, rows.map(c => {
      const act = ACTION[c.status] || ACTION['inspeccion-pendiente'];
      return /*#__PURE__*/React.createElement("tr", {
        key: c.id,
        style: {
          cursor: 'pointer',
          transition: 'background 120ms'
        },
        onClick: () => go('detail'),
        onMouseEnter: e => e.currentTarget.style.background = 'var(--surface-hover)',
        onMouseLeave: e => e.currentTarget.style.background = 'transparent'
      }, /*#__PURE__*/React.createElement("td", {
        style: td
      }, /*#__PURE__*/React.createElement("div", {
        style: {
          fontFamily: 'var(--font-mono)',
          fontSize: 'var(--text-sm)',
          fontWeight: 600,
          letterSpacing: '0.03em'
        }
      }, c.code), /*#__PURE__*/React.createElement("div", {
        style: {
          fontSize: '11px',
          color: 'var(--text-muted)',
          marginTop: 2
        }
      }, c.naviera)), /*#__PURE__*/React.createElement("td", {
        style: td
      }, /*#__PURE__*/React.createElement("span", {
        style: {
          fontFamily: 'var(--font-mono)',
          fontSize: 'var(--text-sm)',
          color: 'var(--text-secondary)'
        }
      }, c.tipo)), /*#__PURE__*/React.createElement("td", {
        style: td
      }, /*#__PURE__*/React.createElement("span", {
        style: {
          fontFamily: 'var(--font-mono)',
          fontSize: 'var(--text-sm)',
          color: 'var(--text-secondary)'
        }
      }, c.ubicacion)), /*#__PURE__*/React.createElement("td", {
        style: td
      }, c.repairType ? /*#__PURE__*/React.createElement(RepairTag, {
        type: c.repairType
      }) : /*#__PURE__*/React.createElement("span", {
        style: {
          color: 'var(--text-muted)',
          fontSize: 'var(--text-sm)'
        }
      }, "\u2014")), /*#__PURE__*/React.createElement("td", {
        style: td
      }, /*#__PURE__*/React.createElement(StatusBadge, {
        status: c.status
      })), /*#__PURE__*/React.createElement("td", {
        style: td
      }, /*#__PURE__*/React.createElement(AgingIndicator, {
        days: c.daysInStatus,
        showFlag: false
      })), /*#__PURE__*/React.createElement("td", {
        style: {
          ...td,
          textAlign: 'right'
        },
        onClick: e => e.stopPropagation()
      }, /*#__PURE__*/React.createElement("div", {
        style: {
          display: 'inline-flex',
          alignItems: 'center',
          gap: 8,
          justifyContent: 'flex-end'
        }
      }, /*#__PURE__*/React.createElement(Button, {
        variant: act.variant,
        size: "sm",
        iconLeft: /*#__PURE__*/React.createElement(Icon, {
          name: act.icon
        }),
        onClick: () => go(act.route)
      }, act.label), /*#__PURE__*/React.createElement(IconButton, {
        variant: "ghost",
        size: "sm",
        "aria-label": "Abrir",
        onClick: () => go('detail')
      }, /*#__PURE__*/React.createElement(Icon, {
        name: "chevron-right"
      })))));
    }), rows.length === 0 && /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", {
      colSpan: 7,
      style: {
        ...td,
        textAlign: 'center',
        padding: '40px 14px',
        color: 'var(--text-muted)'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "search-x",
      size: 22
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 8
      }
    }, "Sin equipos que coincidan con el filtro.")))))));
  }
  Object.assign(window, {
    Yard
  });
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/depot/Yard.jsx", error: String((e && e.message) || e) }); }

// ui_kits/depot/data.js
try { (() => {
// TankFlow — mock depot data (shared across UI-kit screens).
// Fake data for visual recreation only.

window.TF_DATA = function () {
  const navieras = ['Maersk', 'MSC', 'CMA CGM', 'Hapag-Lloyd', 'ONE', 'Evergreen', 'COSCO'];
  const tipos = ['20DV', '40DV', '40HC', '20RF', '45HC', '20TK', '40TK'];
  const repairTypes = ['estructural', 'interior', 'rotulacion', 'pintura', 'regulatoria'];
  const statuses = ['inspeccion-pendiente', 'reparacion-pendiente', 'en-reparacion', 'disponible'];

  // ISO-6346-ish codes
  const codes = ['MSKU 204418-7', 'MSCU 773901-2', 'CMAU 510337-9', 'HLXU 668120-4', 'ONEU 339047-1', 'EGHU 904512-8', 'CSNU 118870-6', 'TGHU 442095-3', 'MSKU 661204-5', 'MSCU 285517-0', 'CAXU 730118-2', 'BMOU 559043-7', 'FCIU 802266-1', 'TCNU 410937-5', 'GESU 677401-9', 'DRYU 320885-4', 'MRKU 991027-8', 'SUDU 145520-3', 'APZU 660874-2', 'TLLU 503391-6'];
  function pick(arr, i) {
    return arr[i % arr.length];
  }
  const containers = codes.map((code, i) => {
    const status = pick(statuses, i + 2);
    const needsRepair = ['reparacion-pendiente', 'en-reparacion'].includes(status);
    const days = [38, 41, 33, 7, 12, 21, 5, 47, 3, 16, 28, 9, 34, 2, 19, 11, 52, 6, 24, 1][i];
    // Tiempo en el ESTADO actual (siempre <= días en patio).
    const daysInStatus = [12, 33, 9, 4, 12, 18, 5, 41, 3, 7, 28, 9, 31, 2, 6, 11, 45, 6, 14, 1][i];
    return {
      id: 'C' + (1000 + i),
      code,
      naviera: pick(navieras, i),
      tipo: pick(tipos, i + 1),
      status,
      repairType: needsRepair ? pick(repairTypes, i) : null,
      days,
      daysInStatus,
      gateIn: '2026-06-' + String(i * 3 % 18 + 1).padStart(2, '0'),
      etaRepuesto: status === 'reparacion-pendiente' ? '2026-06-' + String(i * 5 % 12 + 18).padStart(2, '0') : null,
      operador: pick(['M. Ferreyra', 'J. Cáceres', 'L. Romero', 'P. Núñez'], i),
      ubicacion: 'B' + (i % 6 + 1) + '-' + String(i * 7 % 40).padStart(2, '0')
    };
  });
  const kpis = {
    enPatio: 142,
    enReparacion: 57,
    esperaRepuesto: 32,
    masDe30: containers.filter(c => c.daysInStatus >= 30 && c.status !== 'disponible').length + 8,
    despachadosHoy: 14,
    ingresosHoy: 8
  };

  // status distribution for the dashboard
  const distribution = [{
    status: 'inspeccion-pendiente',
    label: 'Inspección Pendiente',
    value: 38,
    tone: 'neutral'
  }, {
    status: 'reparacion-pendiente',
    label: 'Reparación Pendiente',
    value: 45,
    tone: 'warn'
  }, {
    status: 'en-reparacion',
    label: 'En Reparación',
    value: 57,
    tone: 'info'
  }, {
    status: 'disponible',
    label: 'Disponible',
    value: 32,
    tone: 'ok'
  }];
  const byRepair = [{
    type: 'estructural',
    label: 'Estructural',
    value: 24
  }, {
    type: 'interior',
    label: 'Interior',
    value: 12
  }, {
    type: 'rotulacion',
    label: 'Rotulación',
    value: 9
  }, {
    type: 'pintura',
    label: 'Pintura',
    value: 8
  }, {
    type: 'regulatoria',
    label: 'Insp. regulatoria',
    value: 4
  }];

  // a sample timeline for the detail screen
  const timeline = [{
    icon: 'log-in',
    title: 'Ingreso al patio (Gate-in)',
    time: '2026-06-12 08:41',
    who: 'M. Ferreyra',
    done: true,
    note: 'Posición asignada B3-14'
  }, {
    icon: 'clipboard-check',
    title: 'Inspección completada',
    time: '2026-06-12 11:20',
    who: 'J. Cáceres',
    done: true,
    note: 'Daño en panel lateral derecho'
  }, {
    icon: 'wrench',
    title: 'Reparación definida — Estructural',
    time: '2026-06-12 11:35',
    who: 'J. Cáceres',
    done: true,
    note: 'Orden #RP-1183'
  }, {
    icon: 'package-search',
    title: 'Esperando repuesto',
    time: '2026-06-13 09:00',
    who: 'Sistema',
    done: false,
    active: true,
    note: 'ETA 2026-06-21'
  }, {
    icon: 'check-check',
    title: 'Reparación finalizada',
    time: '—',
    who: '',
    done: false
  }, {
    icon: 'truck',
    title: 'Despacho (Gate-out)',
    time: '—',
    who: '',
    done: false
  }];

  // Usuario actual (sesión simulada) y su rol.
  const currentUser = {
    name: 'M. Ferreyra',
    initials: 'MF',
    role: 'Supervisor de patio'
  };
  return {
    containers,
    kpis,
    distribution,
    byRepair,
    repairTypes,
    statuses,
    timeline,
    currentUser
  };
}();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/depot/data.js", error: String((e && e.message) || e) }); }

// ui_kits/depot/shell.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* __IIFE__ */
;
(function () {
  // TankFlow UI kit — app shell (sidebar + topbar).
  const {
    Button,
    IconButton,
    Input
  } = window.TankFlowDesignSystem_32ec47;

  // Safe React-managed Lucide icon: lucide mutates only the inner <span>,
  // which React never reconciles, so re-renders/conditionals don't crash.
  function Icon({
    name,
    size = 18,
    color,
    style,
    strokeWidth = 1.75
  }) {
    const ref = React.useRef(null);
    React.useEffect(() => {
      const el = ref.current;
      if (!el || !window.lucide) return;
      el.innerHTML = '';
      const i = document.createElement('i');
      i.setAttribute('data-lucide', name);
      el.appendChild(i);
      window.lucide.createIcons({
        attrs: {
          'stroke-width': strokeWidth,
          width: size,
          height: size
        }
      });
    });
    return /*#__PURE__*/React.createElement("span", {
      ref: ref,
      style: {
        display: 'inline-flex',
        width: size,
        height: size,
        color,
        ...style
      }
    });
  }
  const shellStyles = {
    app: {
      display: 'flex',
      height: '100vh',
      background: 'var(--bg-app)',
      color: 'var(--text-primary)',
      fontFamily: 'var(--font-body)'
    },
    sidebar: {
      width: 'var(--sidebar-w)',
      flex: 'none',
      background: 'var(--steel-950)',
      borderRight: '1px solid var(--border-subtle)',
      display: 'flex',
      flexDirection: 'column'
    },
    brand: {
      display: 'flex',
      alignItems: 'center',
      gap: '10px',
      height: 'var(--topbar-h)',
      padding: '0 18px',
      borderBottom: '1px solid var(--border-subtle)'
    },
    nav: {
      padding: '14px 12px',
      display: 'flex',
      flexDirection: 'column',
      gap: '2px',
      flex: 1,
      overflowY: 'auto'
    },
    navSection: {
      fontSize: '10px',
      fontFamily: 'var(--font-mono)',
      textTransform: 'uppercase',
      letterSpacing: '0.08em',
      color: 'var(--text-muted)',
      padding: '14px 10px 6px'
    },
    main: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      minWidth: 0
    },
    topbar: {
      height: 'var(--topbar-h)',
      flex: 'none',
      borderBottom: '1px solid var(--border-subtle)',
      background: 'var(--steel-900)',
      display: 'flex',
      alignItems: 'center',
      gap: '16px',
      padding: '0 24px'
    },
    content: {
      flex: 1,
      overflowY: 'auto',
      padding: '28px 32px'
    }
  };
  function NavItem({
    icon,
    label,
    badge,
    active,
    onClick
  }) {
    const [hover, setHover] = React.useState(false);
    return /*#__PURE__*/React.createElement("button", {
      onClick: onClick,
      onMouseEnter: () => setHover(true),
      onMouseLeave: () => setHover(false),
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: '11px',
        width: '100%',
        padding: '9px 11px',
        borderRadius: 'var(--radius-md)',
        border: 'none',
        cursor: 'pointer',
        fontFamily: 'var(--font-body)',
        fontSize: 'var(--text-base)',
        textAlign: 'left',
        background: active ? 'var(--accent-quiet)' : hover ? 'var(--surface-hover)' : 'transparent',
        color: active ? 'var(--blue-300)' : hover ? 'var(--text-primary)' : 'var(--text-secondary)',
        fontWeight: active ? 'var(--fw-semibold)' : 'var(--fw-regular)',
        boxShadow: active ? 'inset 2px 0 0 var(--accent)' : 'none',
        transition: 'background 120ms, color 120ms'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: icon,
      size: 18,
      style: {
        flex: 'none'
      }
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        flex: 1
      }
    }, label), badge != null && /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-mono)',
        fontSize: '11px',
        fontWeight: 600,
        color: badge.tone === 'crit' ? 'var(--red-400)' : 'var(--text-muted)',
        background: badge.tone === 'crit' ? 'rgba(244,80,62,0.14)' : 'var(--surface-raised)',
        padding: '1px 7px',
        borderRadius: 'var(--radius-pill)'
      }
    }, badge.value));
  }
  function Sidebar({
    route,
    go
  }) {
    const D = window.TF_DATA;
    const myCount = D.containers.filter(c => c.operador === D.currentUser.name && c.status !== 'disponible').length;
    const items = [{
      id: 'tasks',
      icon: 'list-checks',
      label: 'Mis tareas',
      badge: {
        value: myCount
      }
    }, {
      id: 'dashboard',
      icon: 'layout-dashboard',
      label: 'Dashboard'
    }, {
      id: 'yard',
      icon: 'container',
      label: 'Storage'
    }, {
      id: 'inspection',
      icon: 'clipboard-check',
      label: 'Inspección'
    }, {
      id: 'detail',
      icon: 'wrench',
      label: 'Reparaciones',
      badge: {
        value: 57
      }
    }, {
      id: 'repairs',
      icon: 'hammer',
      label: 'Ordenes de Trabajo'
    }];
    const ops = [{
      id: 'intake',
      icon: 'log-in',
      label: 'Depot In / Out'
    }, {
      id: 'dispatch',
      icon: 'truck',
      label: 'Despacho'
    }, {
      id: 'aging',
      icon: 'clock-alert',
      label: 'Demorados',
      badge: {
        value: 11,
        tone: 'crit'
      }
    }];
    return /*#__PURE__*/React.createElement("aside", {
      style: shellStyles.sidebar
    }, /*#__PURE__*/React.createElement("div", {
      style: shellStyles.brand
    }, /*#__PURE__*/React.createElement("img", {
      src: "../../assets/logo-full.svg",
      alt: "TankFlow",
      style: {
        height: 30
      }
    })), /*#__PURE__*/React.createElement("nav", {
      style: shellStyles.nav
    }, /*#__PURE__*/React.createElement("div", {
      style: shellStyles.navSection
    }, "Operaci\xF3n"), items.map(it => /*#__PURE__*/React.createElement(NavItem, _extends({
      key: it.id
    }, it, {
      active: route === it.id,
      onClick: () => go(it.id)
    }))), /*#__PURE__*/React.createElement("div", {
      style: shellStyles.navSection
    }, "Patio"), ops.map(it => /*#__PURE__*/React.createElement(NavItem, _extends({
      key: it.id
    }, it, {
      active: route === it.id,
      onClick: () => go(it.id)
    })))), /*#__PURE__*/React.createElement("div", {
      style: {
        padding: '12px',
        borderTop: '1px solid var(--border-subtle)',
        display: 'flex',
        alignItems: 'center',
        gap: '10px'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: 32,
        height: 32,
        borderRadius: '50%',
        background: 'var(--steel-700)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '12px',
        fontWeight: 600,
        color: 'var(--steel-200)',
        flex: 'none'
      }
    }, "MF"), /*#__PURE__*/React.createElement("div", {
      style: {
        minWidth: 0
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 'var(--text-sm)',
        fontWeight: 600,
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis'
      }
    }, "M. Ferreyra"), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: '11px',
        color: 'var(--text-muted)'
      }
    }, "Supervisor de patio"))));
  }
  function Topbar({
    depot,
    setDepot
  }) {
    return /*#__PURE__*/React.createElement("header", {
      style: shellStyles.topbar
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'relative',
        width: 320,
        maxWidth: '40%'
      }
    }, /*#__PURE__*/React.createElement(Input, {
      mono: true,
      placeholder: "Buscar contenedor (MSKU 204418-7)\u2026",
      icon: /*#__PURE__*/React.createElement(Icon, {
        name: "search"
      })
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1
      }
    }), /*#__PURE__*/React.createElement("button", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
        padding: '7px 12px',
        background: 'var(--surface-raised)',
        border: '1px solid var(--border-default)',
        borderRadius: 'var(--radius-md)',
        color: 'var(--text-secondary)',
        cursor: 'pointer',
        fontFamily: 'var(--font-body)',
        fontSize: 'var(--text-sm)'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "map-pin",
      size: 16
    }), depot, /*#__PURE__*/React.createElement(Icon, {
      name: "chevron-down",
      size: 14,
      style: {
        opacity: 0.6
      }
    })), /*#__PURE__*/React.createElement(IconButton, {
      variant: "ghost",
      "aria-label": "Notificaciones"
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "bell"
    })));
  }
  function AppShell({
    route,
    go,
    children
  }) {
    return /*#__PURE__*/React.createElement("div", {
      style: shellStyles.app
    }, /*#__PURE__*/React.createElement(Sidebar, {
      route: route,
      go: go
    }), /*#__PURE__*/React.createElement("div", {
      style: shellStyles.main
    }, /*#__PURE__*/React.createElement(Topbar, {
      depot: "Dep\xF3sito Norte"
    }), /*#__PURE__*/React.createElement("div", {
      style: shellStyles.content
    }, children)));
  }
  Object.assign(window, {
    AppShell,
    Sidebar,
    Topbar,
    NavItem,
    Icon
  });
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/depot/shell.jsx", error: String((e && e.message) || e) }); }

__ds_ns.AgingIndicator = __ds_scope.AgingIndicator;

__ds_ns.RepairTag = __ds_scope.RepairTag;

__ds_ns.StatCard = __ds_scope.StatCard;

__ds_ns.StatusBadge = __ds_scope.StatusBadge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.SectionHeader = __ds_scope.SectionHeader;

})();
