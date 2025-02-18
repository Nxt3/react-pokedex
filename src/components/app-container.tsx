import { AppShell, AppShellMain } from '@mantine/core';
import { useQuery } from '@tanstack/react-query';

import { fetchPokemon } from '../api/get-pokemon';
import { PokemonCard } from './pokemon/pokemon-card';

export function AppContainer() {
  const { data: pokemon } = useQuery({ queryKey: ['pokemon'], queryFn: async () => fetchPokemon(1) });

  return (
    <AppShell padding={'md'}>
      <AppShellMain className="flex justify-center items-center">
        <PokemonCard pokemonName={pokemon?.name} />
      </AppShellMain>
    </AppShell>
  );
}

export default AppContainer;
