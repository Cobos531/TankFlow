import React from 'react';

/**
 * Botón de acción con variantes y tamaños.
 * @startingPoint section="Forms" subtitle="Botón con variantes y tamaños" viewport="700x140"
 */
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Visual style. */
  variant?: 'primary' | 'secondary' | 'ghost' | 'danger' | 'success';
  /** Control height. */
  size?: 'sm' | 'md' | 'lg';
  /** Stretch to container width. */
  block?: boolean;
  /** Icon node rendered before the label. */
  iconLeft?: React.ReactNode;
  /** Icon node rendered after the label. */
  iconRight?: React.ReactNode;
  children?: React.ReactNode;
}

/** Primary action control for TankFlow. */
export function Button(props: ButtonProps): JSX.Element;
