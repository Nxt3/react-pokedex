import {
  ActionIcon,
  AppShell as MantineAppShell,
  AppShellMain,
  Group,
  Title,
  useComputedColorScheme,
  useMantineColorScheme
} from '@mantine/core';

import { getColorSchemeToggleProps } from '../utils/theme-manager';
import PokemonContainer from './pokemon-container';

function AppShell() {
  const { toggleColorScheme } = useMantineColorScheme();
  const colorSchemeToggleProps = getColorSchemeToggleProps(useComputedColorScheme());

  return (
    <MantineAppShell padding="md" header={{ height: 64 }}>
      <MantineAppShell.Header>
        <Group h="100%" px="md" justify="space-between">
          <Title>React Pokédex</Title>

          <div>
            <ActionIcon size="lg" variant="light" color={colorSchemeToggleProps.color} onClick={toggleColorScheme}>
              {colorSchemeToggleProps.icon}
            </ActionIcon>
          </div>
        </Group>
      </MantineAppShell.Header>

      <AppShellMain className="flex justify-center items-center">
        {/* FIXME: should this be renamed to something else? DexItem? */}
        <PokemonContainer />
      </AppShellMain>
    </MantineAppShell>
  );
}

export default AppShell;
