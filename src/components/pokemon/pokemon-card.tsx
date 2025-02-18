import { Card, Group, Image, Pill, Text } from '@mantine/core';

import { Pokemon } from '../../types/pokemon';

export function PokemonCard({ pokemon }: { pokemon?: Pokemon }) {
  return (
    <div className="flex flex-row">
      <Card shadow="md">
        {pokemon ? (
          <>
            {
              <div className="flex flex-col items-center">
                <Image src={pokemon.sprites.front_default} alt={pokemon.name} />
                <Text ta="center">{pokemon.name.toUpperCase()}</Text>
                <Group gap="5" className="mt-1">
                  {pokemon.types.map(({ type }, index) => (
                    <Pill key={index}>{type.name}</Pill>
                  ))}
                </Group>
              </div>
            }
          </>
        ) : (
          <Text>{'Missing No'}</Text>
        )}
      </Card>
    </div>
  );
}
