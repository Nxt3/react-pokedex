import { Group, MantineSpacing } from '@mantine/core';
import React from 'react';

export function CenteredGroup({
  gap = 'xs',
  align,
  children
}: {
  gap?: MantineSpacing;
  align?: React.CSSProperties['alignItems'];
  children: React.ReactNode;
}) {
  return (
    <Group justify="center" gap={gap} align={align}>
      {children}
    </Group>
  );
}
