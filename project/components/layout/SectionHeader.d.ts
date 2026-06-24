import React from 'react';

export interface SectionHeaderProps {
  /** Small mono eyebrow above the title (accent color). */
  eyebrow?: string;
  /** Section title. */
  title?: React.ReactNode;
  /** Supporting subtitle below the title. */
  subtitle?: React.ReactNode;
  /** Right-aligned actions (buttons, filters). */
  actions?: React.ReactNode;
  className?: string;
}

/** Page/section header with eyebrow, title, subtitle and actions. */
export function SectionHeader(props: SectionHeaderProps): JSX.Element;
