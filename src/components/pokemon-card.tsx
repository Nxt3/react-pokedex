import { Card, CardProps, Image, Pill, Skeleton, Stack, Text } from '@mantine/core';

import pokeball from '../assets/pokeball.svg';
import { Pokemon } from '../types/pokemon';
import { TemplateState } from '../types/template-state';
import { PokemonTypings } from './pokemon-typings';

const baseCardProps: CardProps = {
  shadow: 'md',
  radius: 'lg',
  withBorder: true,
  className: 'w-12 h-14 cursor-pointer'
};

export function PokemonCard({
  pokemon,
  isLoading,
  onOpenDetails,
  onHover
}: {
  pokemon?: Pokemon;
  isLoading?: boolean;
  onOpenDetails?: () => void;
  onHover?: () => void;
}) {
  let state: TemplateState = 'loading';

  if (isLoading) {
    state = 'loading';
  }

  if (!!pokemon) {
    state = 'results';
  }

  return {
    loading: () => {
      return (
        <Skeleton width={'inherit'}>
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
        <Card {...baseCardProps} onClick={onOpenDetails} onMouseEnter={onHover}>
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

            <PokemonTypings types={types} />
          </Stack>
        </Card>
      );
    }
  }[state]();
}
