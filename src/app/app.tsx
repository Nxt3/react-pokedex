import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import AppContainer from '../components/app-container';

function App() {
  return (
    <QueryClientProvider client={new QueryClient()}>
      <AppContainer />
    </QueryClientProvider>
  );
}

export default App;
