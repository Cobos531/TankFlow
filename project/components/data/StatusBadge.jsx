import React from 'react';

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
  'inspeccion-pendiente': { tone: 'neutral',  label: 'Inspección Pendiente' },
  'reparacion-pendiente': { tone: 'warn',     label: 'Reparación Pendiente' },
  'en-reparacion':        { tone: 'info',     label: 'En Reparación' },
  'disponible':           { tone: 'ok',       label: 'Disponible' },
};

export function StatusBadge({ status, tone, dot = true, className = '', children }) {
  inject();
  const mapped = status ? STATUS_MAP[status] : null;
  const resolvedTone = tone || (mapped ? mapped.tone : 'neutral');
  const label = children || (mapped ? mapped.label : status);
  return (
    <span className={['tf-badge', `tf-badge--${resolvedTone}`, className].filter(Boolean).join(' ')}>
      {dot && <span className="tf-badge__dot"></span>}
      {label}
    </span>
  );
}
