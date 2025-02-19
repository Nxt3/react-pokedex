import { Card, CardProps, Group, Image, Pill, Skeleton, Stack, Text } from '@mantine/core';
import { Fragment } from 'react';

import pokeball from '../../assets/pokeball.svg';
import { Pokemon } from '../../types/pokemon';

const baseCardProps: CardProps = {
  shadow: 'md',
  radius: 'md',
  withBorder: true,
  className: 'w-12 h-12'
};

export function PokemonCard({ pokemon, isLoading }: { pokemon?: Pokemon; isLoading: boolean }) {
  let state: 'loading' | 'results' | 'error' = 'loading';

  if (isLoading) {
    state = 'loading';
  }

  if (!!pokemon) {
    state = 'results';
  }

  return {
    loading: () => {
      return (
        <Skeleton>
          <Card {...baseCardProps}></Card>
        </Skeleton>
      );
    },
    error: () => {
      // TODO: error handling
      return null;
    },
    results: () => {
      return (
        <Card {...baseCardProps}>
          {pokemon ? (
            <Fragment>
              {
                <Stack align="center" justify="center" gap="xs">
                  <Card.Section>
                    <Image src={pokemon.sprites.front_default} alt={pokemon.name} fallbackSrc={pokeball} className="mt-1" />
                  </Card.Section>

                  <Text ta="center">{pokemon.name.toUpperCase()}</Text>

                  <Group gap={5}>
                    {pokemon.types.map(({ type }, index) => (
                      <Pill key={index}>{type.name.toUpperCase()}</Pill>
                    ))}
                  </Group>
                </Stack>
              }
            </Fragment>
          ) : (
            <Text>{'Missing No'}</Text>
          )}
        </Card>
      );
    }
  }[state]();
}
