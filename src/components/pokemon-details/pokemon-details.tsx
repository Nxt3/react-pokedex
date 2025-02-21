import { Pokemon } from '../../types/pokemon';

export function PokemonDetails({ pokemon }: { pokemon: Pokemon }) {
  return <div>{JSON.stringify(pokemon)}</div>;
}
