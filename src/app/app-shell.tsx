import {
  ActionIcon,
  AppShell as MantineAppShell,
  Group,
  Stack,
  Title,
  Tooltip,
  useComputedColorScheme,
  useMantineColorScheme
} from '@mantine/core';
import { HiCode } from 'react-icons/hi';

import PokemonContainer from '../components/pokemon-container';
import { WorkInProgressAlert } from '../components/work-in-progress';
import { getColorSchemeToggleProps } from '../utils/theme-manager';

function AppShell() {
  const { toggleColorScheme } = useMantineColorScheme();
  const colorSchemeToggleProps = getColorSchemeToggleProps(useComputedColorScheme());

  return (
    <MantineAppShell padding="md" header={{ height: 64 }}>
      <MantineAppShell.Header>
        <Group h="100%" px="md" justify="space-between">
          <Title fz={{ base: 'var(--mantine-h1-font-size)', xs: 'var(--mantine-h2-font-size)', sm: 'var(--mantine-h1-font-size)' }}>
            React Pokédex
          </Title>

          <Group>
            <Tooltip label="View source code on GitHub">
              <ActionIcon
                aria-label="View source code on GitHub"
                size="lg"
                variant="light"
                color="blue.9"
                onClick={() => window.open('https://github.com/Nxt3/react-pokedex', '_blank')}
              >
                <HiCode />
              </ActionIcon>
            </Tooltip>

            <Tooltip label="Change theme">
              <ActionIcon
                size="lg"
                variant="light"
                color={colorSchemeToggleProps.color}
                onClick={toggleColorScheme}
                aria-label="Change theme"
              >
                {colorSchemeToggleProps.icon}
              </ActionIcon>
            </Tooltip>
          </Group>
        </Group>
      </MantineAppShell.Header>

      <MantineAppShell.Main>
        <Stack gap="xl">
          <WorkInProgressAlert />

          <PokemonContainer />
        </Stack>
      </MantineAppShell.Main>
    </MantineAppShell>
  );
}

export default AppShell;
