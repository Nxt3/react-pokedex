import { ActionIcon, AppShell as MantineAppShell, Group, Stack, Title, useComputedColorScheme, useMantineColorScheme } from '@mantine/core';

import { getColorSchemeToggleProps } from '../utils/theme-manager';
import PokemonContainer from './pokemon-container';
import { WorkInProgressAlert } from './work-in-progress';

function AppShell() {
  const { toggleColorScheme } = useMantineColorScheme();
  const colorSchemeToggleProps = getColorSchemeToggleProps(useComputedColorScheme());

  return (
    <MantineAppShell padding="md" header={{ height: 64 }}>
      <MantineAppShell.Header>
        <Group h="100%" px="md" justify="space-between">
          <Title>React Pokédex</Title>

          <ActionIcon size="lg" variant="light" color={colorSchemeToggleProps.color} onClick={toggleColorScheme}>
            {colorSchemeToggleProps.icon}
          </ActionIcon>
        </Group>
      </MantineAppShell.Header>

      <MantineAppShell.Main>
        <Stack gap="xl">
          <WorkInProgressAlert />

          {/* FIXME: should this be renamed to something else? DexItem? */}
          <PokemonContainer />
        </Stack>
      </MantineAppShell.Main>
    </MantineAppShell>
  );
}

export default AppShell;
