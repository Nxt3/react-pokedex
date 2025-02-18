import { AppShell, AppShellMain } from '@mantine/core';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { PokemonContainer } from '../components/pokemon-container';

function App() {
  return (
    <QueryClientProvider client={new QueryClient()}>
      <AppShell padding={'md'}>
        <AppShellMain className="flex justify-center items-center">
          <PokemonContainer />
        </AppShellMain>
      </AppShell>
    </QueryClientProvider>
  );
}

export default App;
