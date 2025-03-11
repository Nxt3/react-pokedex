import { DefaultMantineColor, StyleProp } from '@mantine/core';

import { PokemonType, PokemonTypes } from '../types/pokemon';

export function pokemonTypeColorMapper(type: PokemonType): StyleProp<DefaultMantineColor> {
  return {
    [PokemonTypes.NORMAL]: '#A8A878',
    [PokemonTypes.FIRE]: '#F08030',
    [PokemonTypes.WATER]: '#6890F0',
    [PokemonTypes.ELECTRIC]: '#F8D030',
    [PokemonTypes.GRASS]: '#78C850',
    [PokemonTypes.ICE]: '#98D8D8',
    [PokemonTypes.FIGHTING]: '#C03028',
    [PokemonTypes.POISON]: '#A040A0',
    [PokemonTypes.GROUND]: '#E0C068',
    [PokemonTypes.FLYING]: '#A890F0',
    [PokemonTypes.PSYCHIC]: '#F85888',
    [PokemonTypes.BUG]: '#A8B820',
    [PokemonTypes.ROCK]: '#B8A038',
    [PokemonTypes.GHOST]: '#705898',
    [PokemonTypes.DRAGON]: '#7038F8',
    [PokemonTypes.DARK]: '#705848',
    [PokemonTypes.STEEL]: '#B8B8D0',
    [PokemonTypes.FAIRY]: '#F0B6BC',
    [PokemonTypes.STELLAR]: '#35ACE7'
  }[type];
}
