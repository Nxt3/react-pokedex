import { Group, MantineSpacing } from '@mantine/core';
import React from 'react';

export function CenteredGroup({
  gap = 'xs',
  align,
  className,
  children
}: {
  gap?: MantineSpacing;
  align?: React.CSSProperties['alignItems'];
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <Group justify="center" gap={gap} align={align} className={className}>
      {children}
    </Group>
  );
}
