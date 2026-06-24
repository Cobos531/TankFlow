import React from 'react';

/**
 * Antigüedad en patio con escalado OK → atención → crítico.
 * @startingPoint section="Data" subtitle="Antigüedad en patio con escalado" viewport="700x150"
 */
export interface AgingIndicatorProps {
  /** Days the container has spent in its CURRENT status. */
  days: number;
  /** Threshold (days) for the warning level. Default 14. */
  warnAt?: number;
  /** Threshold (days) for the critical level. Default 30. */
  critAt?: number;
  /** Days mapped to a full bar. Default 60. */
  max?: number;
  /** Unit caption under the number. Default "días en estado". */
  unit?: string;
  /** Show the "+30 días en este estado" flag when critical. */
  showFlag?: boolean;
  className?: string;
}

/**
 * Time-in-status meter that escalates OK → warn → critical, flagging
 * equipment stuck over a month in the same state.
 */
export function AgingIndicator(props: AgingIndicatorProps): JSX.Element;
