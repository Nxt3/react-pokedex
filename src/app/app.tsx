import { MantineColorSchemeManager, MantineProvider } from '@mantine/core';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import AppShell from '../components/app-shell';
import { localStorageColorSchemeManager } from '../utils/theme-manager';

const colorSchemeManager: MantineColorSchemeManager = localStorageColorSchemeManager();
const queryClient = new QueryClient();

function App() {
  return (
    <MantineProvider defaultColorScheme="auto" colorSchemeManager={colorSchemeManager}>
      <QueryClientProvider client={queryClient}>
        <AppShell />
      </QueryClientProvider>
    </MantineProvider>
  );
}

export default App;
