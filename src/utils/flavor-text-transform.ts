import { PokeAPI } from 'pokeapi-types';

export function getFlavorText(flavorTextEntries: PokeAPI.FlavorText[]): string | undefined {
  const firstEnglishFlavorText = flavorTextEntries?.find((flavorText) => flavorText?.language?.name === 'en');

  const flavorText = firstEnglishFlavorText?.flavor_text;

  /**
   * NOTE: left unprocessed as it is found in game files
   * https://github.com/veekun/pokedex/issues/218#issuecomment-339841781
   */
  return flavorText
    ?.replace(/\f/g, '\n')
    .replace(/\u00ad\n/g, '')
    .replace(/\u00ad/g, '')
    .replace(/ -\n/g, ' - ')
    .replace(/-\n/g, '-')
    .replace(/\n/g, ' ');
}
