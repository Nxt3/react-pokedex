import { Group, Image, ImageProps, Space, Text } from '@mantine/core';
import { Fragment } from 'react/jsx-runtime';

import pokeball from '../../assets/pokeball.svg';
import { Pokemon } from '../../types/pokemon';
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

export function PokemonDetails({ pokemon }: { pokemon: Pokemon }) {
  const { name, types, sprites, height, weight } = pokemon;

  // convert decimeters to inches
  const convertToInches = (height: number) => (height * 0.393701).toFixed(1);
  // convert hectograms to pounds
  const convertToPounds = (weight: number) => (weight * 0.220462).toFixed(1);

  // TODO: need to call API for Pokedex flavor text
  // IDEA: pre-fetch this when card is rendered before clicking
  // https://pokeapi.co/api/v2/pokemon-species/{id}
  return (
    <Fragment>
      {/* FIXME: DRY */}
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

      <div className="flex items-center justify-center">
        <PokemonTypings types={types} />
      </div>

      <Text>Height: {convertToInches(height)} in</Text>
      <Text>Weight: {convertToPounds(weight)} lbs</Text>
      <Space h="lg" />
      <Text fw={600}>Abilities</Text>
      {pokemon.abilities.map((ability, index) => (
        <Text key={index}>{toSentenceCase(ability.ability.name)}</Text>
      ))}

      <Space h="lg" />
    </Fragment>
  );
}
