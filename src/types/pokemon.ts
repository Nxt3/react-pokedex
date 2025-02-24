import { PokeAPI } from 'pokeapi-types';

export type Pokemon = PokeAPI.Pokemon;

export type PokemonDetails = PokeAPI.PokemonSpecies;

export enum PokemonTypes {
  NORMAL = 'normal',
  FIRE = 'fire',
  WATER = 'water',
  ELECTRIC = 'electric',
  GRASS = 'grass',
  ICE = 'ice',
  FIGHTING = 'fighting',
  POISON = 'poison',
  GROUND = 'ground',
  FLYING = 'flying',
  PSYCHIC = 'psychic',
  BUG = 'bug',
  ROCK = 'rock',
  GHOST = 'ghost',
  DRAGON = 'dragon',
  DARK = 'dark',
  STEEL = 'steel',
  FAIRY = 'fairy',
  STELLAR = 'stellar'
}

export type PokemonType = PokemonTypes | `${PokemonTypes}`;
