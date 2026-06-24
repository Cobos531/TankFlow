import React from 'react';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  /** Field label above the control. */
  label?: string;
  /** Helper text below the control. */
  hint?: string;
  /** Error message; overrides hint and applies error styling. */
  error?: string;
  /** Render value in the mono/data typeface (codes, IDs). */
  mono?: boolean;
  /** Leading icon node. */
  icon?: React.ReactNode;
}

/** Text input with label, hint, error and optional leading icon. */
export function Input(props: InputProps): JSX.Element;
