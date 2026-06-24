import React from 'react';

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
  estructural: { label: 'Estructural', color: 'var(--rep-estructural)' },
  interior:    { label: 'Interior',    color: 'var(--rep-interior)' },
  rotulacion:  { label: 'Rotulación',  color: 'var(--rep-rotulacion)' },
  pintura:     { label: 'Pintura',     color: 'var(--rep-pintura)' },
  regulatoria: { label: 'Insp. regulatoria', color: 'var(--rep-regulatoria)' },
};

export function RepairTag({ type, className = '', children }) {
  inject();
  const info = REPAIR_MAP[type] || { label: children || type, color: 'var(--steel-400)' };
  return (
    <span className={['tf-reptag', className].filter(Boolean).join(' ')}>
      <span className="tf-reptag__swatch" style={{ background: info.color }}></span>
      {children || info.label}
    </span>
  );
}
