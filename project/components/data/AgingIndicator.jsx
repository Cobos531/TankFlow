import React from 'react';

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
export function AgingIndicator({ days = 0, warnAt = 14, critAt = 30, max = 60, unit = 'días en estado', showFlag = true, className = '' }) {
  inject();
  const level = days >= critAt ? 'crit' : days >= warnAt ? 'warn' : 'ok';
  const pct = Math.min(100, Math.round((days / max) * 100));
  return (
    <div className={['tf-aging', `tf-aging--${level}`, className].filter(Boolean).join(' ')}>
      <div className="tf-aging__top">
        <span className="tf-aging__days">{String(days).padStart(2, '0')}</span>
        <span className="tf-aging__unit">{unit}</span>
      </div>
      <div className="tf-aging__bar"><div className="tf-aging__fill" style={{ width: `${pct}%` }}></div></div>
      {showFlag && level === 'crit' && (
        <span className="tf-aging__flag">+{critAt} días en este estado</span>
      )}
    </div>
  );
}
