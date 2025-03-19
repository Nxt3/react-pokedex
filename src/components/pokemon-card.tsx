import { Card, CardProps, Pill, Skeleton, SkeletonProps, Stack, Text } from '@mantine/core';

import { Pokemon } from '../types/pokemon';
import { TemplateState } from '../types/template-state';
import { FrontDefaultSprite } from './pokemon-details/pokemon-sprites';
import { PokemonTypings } from './pokemon-typings';

const baseCardProps: CardProps & SkeletonProps = {
  shadow: 'md',
  radius: 'lg',
  w: '12rem',
  h: '14rem'
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
      return <Skeleton {...baseCardProps} />;
    },
    error: () => {
      // TODO: error handling
      return null;
    },
    results: () => {
      const { id, name, types, sprites } = pokemon!;

      return (
        <Card {...baseCardProps} withBorder onClick={onOpenDetails} onMouseEnter={onHover} style={{ cursor: 'pointer' }}>
          <Stack align="flex-end" justify="flex-start" gap="xs">
            <Pill size="sm" radius={baseCardProps.radius}>
              {id}
            </Pill>
          </Stack>

          <Stack align="center" justify="center" gap="xs">
            <Card.Section>
              <FrontDefaultSprite marginTop="xs" name={name} sprites={sprites} />
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
