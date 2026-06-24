import React from 'react';

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

export function Input({ label, hint, error, mono = false, icon = null, className = '', id, ...rest }) {
  inject();
  const inputId = id || (label ? `tf-${label.replace(/\s+/g, '-').toLowerCase()}` : undefined);
  const inputEl = (
    <input
      id={inputId}
      className={['tf-input', mono && 'tf-input--mono', error && 'tf-input--error', className].filter(Boolean).join(' ')}
      {...rest}
    />
  );
  return (
    <div className="tf-field">
      {label && <label className="tf-field__label" htmlFor={inputId}>{label}</label>}
      {icon ? (
        <div className="tf-input__wrap tf-input__wrap--icon">
          <span className="tf-input__icon">{icon}</span>
          {inputEl}
        </div>
      ) : inputEl}
      {(hint || error) && (
        <span className={['tf-field__hint', error && 'tf-field__hint--error'].filter(Boolean).join(' ')}>
          {error || hint}
        </span>
      )}
    </div>
  );
}
