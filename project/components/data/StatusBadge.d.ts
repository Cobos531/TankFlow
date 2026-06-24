import React from 'react';

export type DepotStatus =
  | 'inspeccion-pendiente' | 'reparacion-pendiente'
  | 'en-reparacion' | 'disponible';

/**
 * Píldora de estado del ciclo de vida del contenedor.
 * @startingPoint section="Data" subtitle="Estados del ciclo de vida del contenedor" viewport="700x120"
 */
export interface StatusBadgeProps {
  /** Lifecycle status — sets tone and default Spanish label. */
  status?: DepotStatus;
  /** Override tone independent of status. */
  tone?: 'neutral' | 'info' | 'ok' | 'warn' | 'critical';
  /** Show the leading status dot. */
  dot?: boolean;
  /** Override the label text. */
  children?: React.ReactNode;
  className?: string;
}

/** Pill badge for a container's lifecycle status in the depot. */
export function StatusBadge(props: StatusBadgeProps): JSX.Element;
