import { MantineColorSchemeManager, MantineProvider } from '@mantine/core';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { theme } from '../config/theme';
import { localStorageColorSchemeManager } from '../utils/theme-manager';
import AppShell from './app-shell';

const colorSchemeManager: MantineColorSchemeManager = localStorageColorSchemeManager();
const queryClient = new QueryClient();

function App() {
  return (
    <MantineProvider theme={theme} defaultColorScheme="auto" colorSchemeManager={colorSchemeManager}>
      <QueryClientProvider client={queryClient}>
        <AppShell />
      </QueryClientProvider>
    </MantineProvider>
  );
}

export default App;
