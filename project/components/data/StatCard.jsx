import React from 'react';

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

export function StatCard({ label, value, unit, icon, delta, deltaDir = 'flat', note, variant, className = '' }) {
  inject();
  const arrow = deltaDir === 'up' ? '▲' : deltaDir === 'down' ? '▼' : '–';
  return (
    <div className={['tf-stat', variant && `tf-stat--${variant}`, className].filter(Boolean).join(' ')}>
      <div className="tf-stat__head">
        <span className="tf-stat__label">{label}</span>
        {icon && <span className="tf-stat__icon">{icon}</span>}
      </div>
      <div className="tf-stat__value">{value}{unit && <sub>{unit}</sub>}</div>
      {(delta || note) && (
        <div className="tf-stat__foot">
          {delta && <span className={`tf-stat__delta--${deltaDir}`}>{arrow} {delta}</span>}
          {note && <span className="tf-stat__note">{note}</span>}
        </div>
      )}
    </div>
  );
}
