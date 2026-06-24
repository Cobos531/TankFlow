import React from 'react';

export interface CardProps {
  /** Optional header title. */
  title?: React.ReactNode;
  /** Header action node(s) aligned right. */
  actions?: React.ReactNode;
  /** Use the raised surface + shadow. */
  raised?: boolean;
  /** Remove side borders and radius (edge-to-edge). */
  flush?: boolean;
  /** Remove body padding (e.g. for tables). */
  bodyFlush?: boolean;
  className?: string;
  children?: React.ReactNode;
}

/** Surface container with optional header and actions. */
export function Card(props: CardProps): JSX.Element;
