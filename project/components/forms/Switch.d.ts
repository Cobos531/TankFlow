import React from 'react';

export interface SwitchProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
  /** Controlled checked state. */
  checked?: boolean;
  /** Uncontrolled initial state. */
  defaultChecked?: boolean;
  /** Inline label to the right of the track. */
  label?: string;
  /** Disable interaction. */
  disabled?: boolean;
}

/** Toggle switch for binary on/off settings and filters. */
export function Switch(props: SwitchProps): JSX.Element;
