import { Loader, Stack, Text } from '@mantine/core';
import { Fragment } from 'react/jsx-runtime';

import { Pokemon, PokemonDetails as PokemonDetailsType } from '../../types/pokemon';
import { TemplateState } from '../../types/template-state';
import { getFlavorText } from '../../utils/flavor-text-transform';
import { toSentenceCase } from '../../utils/sentence-case';
import { EvolutionChain } from './evolution-chain';
import { PokemonSprites } from './pokemon-sprites';

export function PokemonDetails({
  pokemon,
  pokemonDetails,
  isLoading
}: {
  pokemon: Pokemon;
  pokemonDetails?: PokemonDetailsType;
  isLoading: boolean;
}) {
  let state: TemplateState = 'loading';

  if (isLoading) {
    state = 'loading';
  }

  if (!!pokemonDetails) {
    state = 'results';
  }

  return {
    loading: () => {
      return (
        <Stack align="center" justify="center" gap="xl">
          <Loader color="blue" size="xl" type="bars" />
        </Stack>
      );
    },
    error: () => {
      // TODO
      return null;
    },
    results: () => {
      const { name, sprites, height, weight } = pokemon;
      const { flavor_text_entries } = pokemonDetails!;
      const flavorText = getFlavorText(flavor_text_entries);

      // TODO: move to utils
      // convert decimeters to inches
      const convertToInches = (height: number) => (height * 0.393701).toFixed(1);
      // convert hectograms to pounds
      const convertToPounds = (weight: number) => (weight * 0.220462).toFixed(1);

      return (
        <Fragment>
          <PokemonSprites name={name} sprites={sprites} />
          {!!flavorText && (
            <Text fs="italic" ta="center" mt="md">
              {flavorText}
            </Text>
          )}
          <Stack mt="lg" gap="0">
            {/* TODO: replace with NumberFormatter */}
            <Text>Height: {convertToInches(height)} in</Text>
            <Text>Weight: {convertToPounds(weight)} lbs</Text>
          </Stack>

          <Text fw={600} mt="lg">
            Abilities
          </Text>
          {pokemon.abilities.map((ability, index) => (
            <Text key={index}>{toSentenceCase(ability.ability.name)}</Text>
          ))}

          <EvolutionChain evolutionChainHref={pokemonDetails?.evolution_chain?.url} />
        </Fragment>
      );
    }
  }[state]();
}
