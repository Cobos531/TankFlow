import React from 'react';

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

export function SectionHeader({ eyebrow, title, subtitle, actions, className = '' }) {
  inject();
  return (
    <div className={['tf-secthead', className].filter(Boolean).join(' ')}>
      <div className="tf-secthead__left">
        {eyebrow && <span className="tf-secthead__eyebrow">{eyebrow}</span>}
        {title && <span className="tf-secthead__title">{title}</span>}
        {subtitle && <span className="tf-secthead__sub">{subtitle}</span>}
      </div>
      {actions && <div className="tf-secthead__actions">{actions}</div>}
    </div>
  );
}
