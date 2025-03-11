import { useQuery } from '@tanstack/react-query';
import { PokeAPI } from 'pokeapi-types';

import { Pokemon, PokemonDetails } from '../types/pokemon';

const POKEAPI_BASE_URL = 'https://pokeapi.co/api/v2';

const pokemonQueryKey = (id: number) => ['pokemon', id];
const pokemonDetailsQueryKey = (id: number) => ['pokemon-details', id];
const pokemonEvolutionChainQueryKey = (url?: string) => ['pokemon-evolution-chain', url];

// Pokemon details
export const usePokemonQuery = (id: number) =>
  useQuery({
    queryKey: pokemonQueryKey(id),
    queryFn: () => fetchPokemon(id)
  });

export const usePokemonDetailsQuery = (id: number) =>
  useQuery({
    queryKey: pokemonDetailsQueryKey(id),
    queryFn: () => fetchPokemonDetails(id)
  });

export const pokemonDetailsQueryOptions = (id: number) => ({
  queryKey: pokemonDetailsQueryKey(id),
  queryFn: () => fetchPokemonDetails(id)
});

// Evolutionary chain
export const usePokemonEvolutionChainQuery = (url?: string) =>
  useQuery({
    queryKey: pokemonEvolutionChainQueryKey(url),
    queryFn: () => (url ? fetchPokemonEvolutionChain(url) : Promise.resolve(null))
  });

export const pokemonEvolutionChainQueryOptions = (url: string) => ({
  queryKey: pokemonEvolutionChainQueryKey(url),
  queryFn: () => fetchPokemonEvolutionChain(url)
});

// TODO: use this maybe?
// async function fetchNumberOfPokemon(): Promise<number> {
//   const allPokemonResponse = await fetch(`${POKEAPI_BASE_URL}/pokemon?limit=100000&offset=0`);
//   return ((await allPokemonResponse.json()) as PokeAPI.NamedAPIResourceList)?.results?.length;
// }

async function fetchPokemon(id: number): Promise<Pokemon> {
  const pokemonResponse = await fetch(`${POKEAPI_BASE_URL}/pokemon/${id}`);
  return (await pokemonResponse.json()) as Pokemon;
}

async function fetchPokemonDetails(id: number): Promise<PokemonDetails> {
  const pokemonDetailsResponse = await fetch(`${POKEAPI_BASE_URL}/pokemon-species/${id}`);
  return (await pokemonDetailsResponse.json()) as PokemonDetails;
}

async function fetchPokemonEvolutionChain(url: string): Promise<PokeAPI.EvolutionChain> {
  const evolutionChainResponse = await fetch(url);
  return (await evolutionChainResponse.json()) as PokeAPI.EvolutionChain;
}
