import React from 'react';

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

export function Select({ label, options = [], placeholder, className = '', id, children, ...rest }) {
  inject();
  const selId = id || (label ? `tf-${label.replace(/\s+/g, '-').toLowerCase()}` : undefined);
  return (
    <div className="tf-select-field">
      {label && <label className="tf-select-field__label" htmlFor={selId}>{label}</label>}
      <div className="tf-select__wrap">
        <select id={selId} className={['tf-select', className].filter(Boolean).join(' ')} {...rest}>
          {placeholder && <option value="">{placeholder}</option>}
          {options.map((o) => {
            const val = typeof o === 'string' ? o : o.value;
            const lbl = typeof o === 'string' ? o : o.label;
            return <option key={val} value={val}>{lbl}</option>;
          })}
          {children}
        </select>
        <span className="tf-select__chevron">▾</span>
      </div>
    </div>
  );
}
