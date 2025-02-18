import { QueryClient } from '@tanstack/react-query';

import { Pokemon } from '../types/pokemon';

export async function fetchPokemon(id: number): Promise<Pokemon> {
  const queryClient = new QueryClient();

  return await queryClient.fetchQuery({
    queryKey: [`pokemon`, id],
    queryFn: async ({ signal: abortSignal }) => {
      const pokemonResponse: Response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`, {
        signal: abortSignal
      });

      return (await pokemonResponse.json()) as Pokemon;
    }
  });
}
