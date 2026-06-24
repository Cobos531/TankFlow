import React from 'react';

export interface IconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Visual style. */
  variant?: 'default' | 'ghost';
  /** Control size. */
  size?: 'sm' | 'md';
  /** Highlight as the selected/active control. */
  active?: boolean;
  /** A single icon node (Lucide). */
  children?: React.ReactNode;
}

/** Square icon-only button for toolbars and row actions. */
export function IconButton(props: IconButtonProps): JSX.Element;
