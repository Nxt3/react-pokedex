import { AppShell, AppShellMain, Group, Title } from '@mantine/core';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { PokemonContainer } from '../components/pokemon-container';

function App() {
  return (
    <QueryClientProvider client={new QueryClient()}>
      <AppShell padding="md" header={{ height: 64 }}>
        <AppShell.Header>
          <Group h="100%" px="md">
            <Title>React Pokédex</Title>
          </Group>
        </AppShell.Header>

        <AppShellMain className="flex justify-center items-center">
          <PokemonContainer />
        </AppShellMain>
      </AppShell>
    </QueryClientProvider>
  );
}

export default App;
