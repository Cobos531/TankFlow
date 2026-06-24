import React from 'react';

export interface SelectOption {
  value: string;
  label: string;
}

export interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  /** Field label above the control. */
  label?: string;
  /** Options as strings or {value,label} objects. */
  options?: Array<string | SelectOption>;
  /** Placeholder option shown first with empty value. */
  placeholder?: string;
}

/** Native select styled for TankFlow with label and chevron. */
export function Select(props: SelectProps): JSX.Element;
