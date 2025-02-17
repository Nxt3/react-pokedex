import { AppShell, AppShellMain, Text, Title } from '@mantine/core';

function App() {
  return (
    <AppShell padding="md">
      <AppShellMain className="flex justify-center items-center">
        <Title className="text-center">
          <Text inherit variant="gradient" component="span" gradient={{ from: 'blue', to: 'pink' }}>
            Things to come!
          </Text>
        </Title>
      </AppShellMain>
    </AppShell>
  );
}

export default App;
