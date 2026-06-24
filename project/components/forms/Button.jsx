import React from 'react';

const CSS = `
.tf-btn {
  --_bg: var(--accent);
  --_fg: #06121d;
  font-family: var(--font-body);
  font-weight: var(--fw-semibold);
  font-size: var(--text-base);
  line-height: 1;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  border: 1px solid transparent;
  border-radius: var(--radius-md);
  padding: 0 16px;
  height: 38px;
  cursor: pointer;
  white-space: nowrap;
  background: var(--_bg);
  color: var(--_fg);
  transition: background var(--dur-fast) var(--ease-out),
              transform var(--dur-fast) var(--ease-out),
              box-shadow var(--dur-fast) var(--ease-out),
              border-color var(--dur-fast) var(--ease-out);
}
.tf-btn:hover { background: var(--accent-hover); }
.tf-btn:active { transform: translateY(1px); }
.tf-btn:focus-visible { outline: none; box-shadow: 0 0 0 3px var(--focus-ring); }
.tf-btn[disabled] { opacity: 0.45; cursor: not-allowed; transform: none; }

.tf-btn--secondary { --_bg: var(--surface-raised); --_fg: var(--text-primary); border-color: var(--border-strong); }
.tf-btn--secondary:hover { background: var(--surface-hover); }
.tf-btn--ghost { --_bg: transparent; --_fg: var(--text-secondary); }
.tf-btn--ghost:hover { background: var(--surface-hover); color: var(--text-primary); }
.tf-btn--danger { --_bg: var(--red-500); --_fg: #2c0c08; }
.tf-btn--danger:hover { background: var(--red-400); }
.tf-btn--success { --_bg: var(--green-500); --_fg: #07261d; }
.tf-btn--success:hover { background: var(--green-400); }

.tf-btn--sm { height: 30px; font-size: var(--text-sm); padding: 0 12px; border-radius: var(--radius-sm); }
.tf-btn--lg { height: 46px; font-size: var(--text-md); padding: 0 22px; }
.tf-btn--block { width: 100%; }
`;

let injected = false;
function inject() {
  if (injected || typeof document === 'undefined') return;
  injected = true;
  const s = document.createElement('style');
  s.setAttribute('data-tf', 'button');
  s.textContent = CSS;
  document.head.appendChild(s);
}

export function Button({
  variant = 'primary',
  size = 'md',
  block = false,
  iconLeft = null,
  iconRight = null,
  className = '',
  children,
  ...rest
}) {
  inject();
  const cls = [
    'tf-btn',
    variant !== 'primary' && `tf-btn--${variant}`,
    size !== 'md' && `tf-btn--${size}`,
    block && 'tf-btn--block',
    className,
  ].filter(Boolean).join(' ');
  return (
    <button className={cls} {...rest}>
      {iconLeft}
      {children}
      {iconRight}
    </button>
  );
}
