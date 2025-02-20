import { Card, CardProps, Group, Image, Pill, Skeleton, Stack, Text } from '@mantine/core';
import { Fragment } from 'react';

import pokeball from '../../assets/pokeball.svg';
import { Pokemon, PokemonType } from '../../types/pokemon';
import { pokemonTypeColorMapper } from '../../utils/pokemon-type-color-mapper';

const baseCardProps: CardProps = {
  shadow: 'md',
  radius: 'lg',
  withBorder: true,
  className: 'w-12 h-14'
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
                <Fragment>
                  <Stack align="flex-end" justify="flex-start" gap="xs">
                    <Pill size="sm" radius={baseCardProps.radius}>
                      {pokemon.id}
                    </Pill>
                  </Stack>

                  <Stack align="center" justify="center" gap="xs">
                    <Card.Section>
                      <Image src={pokemon.sprites.front_default} alt={pokemon.name} fallbackSrc={pokeball} className="mt-1" />
                    </Card.Section>

                    <Text ta="center" fw={800}>
                      {pokemon.name.toUpperCase()}
                    </Text>

                    {/* TODO: refactor this into it's own component */}
                    <Group gap={10}>
                      {pokemon.types.map(({ type }, index) => {
                        const typeName = type.name as PokemonType;

                        return (
                          <Pill
                            key={index}
                            styles={() => ({
                              root: {
                                // NOTE: using outline to circumvent a11y contrast concerns
                                outline: `2px solid ${pokemonTypeColorMapper(typeName)}`
                              }
                            })}
                          >
                            <Text inherit fw={600}>
                              {typeName.toUpperCase()}
                            </Text>
                          </Pill>
                        );
                      })}
                    </Group>
                  </Stack>
                </Fragment>
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
