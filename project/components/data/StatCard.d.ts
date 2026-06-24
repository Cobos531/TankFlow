import React from 'react';

/**
 * Tarjeta de métrica / KPI.
 * @startingPoint section="Data" subtitle="Tarjeta de métrica / KPI" viewport="700x180"
 */
export interface StatCardProps {
  /** Uppercase metric label. */
  label: string;
  /** Main metric value (number or formatted string). */
  value: React.ReactNode;
  /** Small unit appended to the value (e.g. "días", "TEU"). */
  unit?: string;
  /** Trailing icon node. */
  icon?: React.ReactNode;
  /** Delta text shown in the footer. */
  delta?: string;
  /** Direction of the delta — sets color and arrow. */
  deltaDir?: 'up' | 'down' | 'flat';
  /** Secondary footer note. */
  note?: string;
  /** Emphasis variant. */
  variant?: 'accent' | 'critical';
  className?: string;
}

/** KPI metric tile for dashboards. */
export function StatCard(props: StatCardProps): JSX.Element;
