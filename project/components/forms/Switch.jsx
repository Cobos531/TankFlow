import React from 'react';

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

export function Switch({ checked, defaultChecked, onChange, label, disabled = false, className = '', ...rest }) {
  inject();
  return (
    <label className={['tf-switch', disabled && 'tf-switch--disabled', className].filter(Boolean).join(' ')}>
      <input
        type="checkbox"
        checked={checked}
        defaultChecked={defaultChecked}
        onChange={onChange}
        disabled={disabled}
        {...rest}
      />
      <span className="tf-switch__track"><span className="tf-switch__thumb"></span></span>
      {label && <span className="tf-switch__label">{label}</span>}
    </label>
  );
}
