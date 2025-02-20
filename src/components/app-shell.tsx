import { AppShell as MantineAppShell, AppShellMain, Group, Title } from '@mantine/core';

import PokemonContainer from './pokemon-container';

function AppShell() {
  return (
    <MantineAppShell padding="md" header={{ height: 64 }}>
      <MantineAppShell.Header>
        <Group h="100%" px="md">
          <Title>React Pokédex</Title>
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
