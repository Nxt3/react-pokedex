import { MantineProvider } from '@mantine/core';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import AppShell from '../components/app-shell';

function App() {
  return (
    <MantineProvider defaultColorScheme="auto">
      <QueryClientProvider client={new QueryClient()}>
        <AppShell />
      </QueryClientProvider>
    </MantineProvider>
  );
}

export default App;
