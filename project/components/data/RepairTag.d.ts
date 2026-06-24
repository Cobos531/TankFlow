import React from 'react';

export type RepairType = 'estructural' | 'interior' | 'rotulacion' | 'pintura' | 'regulatoria';

export interface RepairTagProps {
  /** One of the five repair categories. */
  type: RepairType;
  /** Override the label. */
  children?: React.ReactNode;
  className?: string;
}

/** Color-coded chip identifying a repair category. */
export function RepairTag(props: RepairTagProps): JSX.Element;
