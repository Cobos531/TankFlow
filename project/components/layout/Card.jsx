import React from 'react';

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

export function Card({ title, actions, raised = false, flush = false, bodyFlush = false, className = '', children }) {
  inject();
  return (
    <div className={['tf-card', raised && 'tf-card--raised', flush && 'tf-card--flush', className].filter(Boolean).join(' ')}>
      {(title || actions) && (
        <div className="tf-card__header">
          {title && <span className="tf-card__title">{title}</span>}
          {actions && <div className="tf-card__actions">{actions}</div>}
        </div>
      )}
      <div className={['tf-card__body', bodyFlush && 'tf-card__body--flush'].filter(Boolean).join(' ')}>
        {children}
      </div>
    </div>
  );
}
