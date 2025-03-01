import { Pill, Text } from '@mantine/core';

import { Pokemon, PokemonType } from '../types/pokemon';
import { pokemonTypeColorMapper } from '../utils/pokemon-type-color-mapper';
import { CenteredGroup } from './centered-group';

export function PokemonTypings({ types, className }: { types: Pokemon['types']; className?: string }) {
  return (
    <CenteredGroup align="center" gap="sm" className={className}>
      {types.map(({ type }, index) => {
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
    </CenteredGroup>
  );
}
