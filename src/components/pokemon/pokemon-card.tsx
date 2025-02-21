import { Card, CardProps, Group, Image, Pill, Skeleton, Stack, Text } from '@mantine/core';

import pokeball from '../../assets/pokeball.svg';
import { Pokemon } from '../../types/pokemon';
import { PokemonTypes } from './pokemon-types';

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
      const { id, name, types, sprites } = pokemon!;

      return (
        // TODO: open modal with more details onClick
        <Card {...baseCardProps} onClick={() => console.log(`Clicked #${id}: ${name.toUpperCase()}`)}>
          <Stack align="flex-end" justify="flex-start" gap="xs">
            <Pill size="sm" radius={baseCardProps.radius}>
              {id}
            </Pill>
          </Stack>

          <Stack align="center" justify="center" gap="xs">
            <Card.Section>
              <Image src={sprites.front_default} alt={name} fallbackSrc={pokeball} className="mt-1" />
            </Card.Section>

            <Text ta="center" fw={800}>
              {name.toUpperCase()}
            </Text>

            <Group gap={10}>
              <PokemonTypes types={types} />
            </Group>
          </Stack>
        </Card>
      );
    }
  }[state]();
}
