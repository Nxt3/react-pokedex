import { Group, Image, ImageProps, Loader, Stack, Text } from '@mantine/core';
import { Fragment } from 'react/jsx-runtime';

import pokeball from '../../assets/pokeball.svg';
import { Pokemon, PokemonDetails as PokemonDetailsType } from '../../types/pokemon';
import { TemplateState } from '../../types/template-state';
import { getFlavorText } from '../../utils/flavor-text-transform';
import { toSentenceCase } from '../../utils/sentence-case';
import { PokemonTypings } from '../pokemon-typings';

const commonSpriteProps = (
  name: string,
  variant: 'default' | 'shiny' | 'female' | 'shiny female'
): ImageProps & { alt: HTMLImageElement['alt'] } => ({
  w: 96,
  alt: `${name} ${variant} sprite`,
  fallbackSrc: pokeball
});

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
      const { name, types, sprites, height, weight } = pokemon;
      const { flavor_text_entries } = pokemonDetails!;
      const flavorText = getFlavorText(flavor_text_entries);

      // TODO: move to utils
      // convert decimeters to inches
      const convertToInches = (height: number) => (height * 0.393701).toFixed(1);
      // convert hectograms to pounds
      const convertToPounds = (weight: number) => (weight * 0.220462).toFixed(1);

      return (
        <Fragment>
          {/* FIXME: DRY */}
          {/* TODO: Differentiate between male/female */}
          <Group gap="xs" justify="center">
            <Image src={sprites.front_default} {...commonSpriteProps(name, 'default')} />
            <Image src={sprites.front_shiny} {...commonSpriteProps(name, 'shiny')} />
            {sprites.front_female && (
              <Fragment>
                <Image src={sprites.front_female} {...commonSpriteProps(name, 'female')} />
                <Image src={sprites.front_shiny_female} {...commonSpriteProps(name, 'shiny female')} />
              </Fragment>
            )}
          </Group>

          <PokemonTypings types={types} />

          {!!flavorText && (
            <Text fs="italic" ta="center" mt="md">
              {flavorText}
            </Text>
          )}

          <Stack mt="lg" gap="0">
            <Text>Height: {convertToInches(height)} in</Text>
            <Text>Weight: {convertToPounds(weight)} lbs</Text>
          </Stack>

          <Text fw={600} mt="lg">
            Abilities
          </Text>
          {pokemon.abilities.map((ability, index) => (
            <Text key={index}>{toSentenceCase(ability.ability.name)}</Text>
          ))}
        </Fragment>
      );
    }
  }[state]();
}
