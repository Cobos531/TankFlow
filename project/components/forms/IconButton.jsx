import React from 'react';

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

export function IconButton({ variant = 'default', size = 'md', active = false, className = '', children, ...rest }) {
  inject();
  const cls = [
    'tf-iconbtn',
    variant === 'ghost' && 'tf-iconbtn--ghost',
    size === 'sm' && 'tf-iconbtn--sm',
    active && 'tf-iconbtn--active',
    className,
  ].filter(Boolean).join(' ');
  return <button className={cls} {...rest}>{children}</button>;
}
