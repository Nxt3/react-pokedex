import { Card, Group, Image, Pill, Text } from '@mantine/core';

import { Pokemon } from '../../types/pokemon';

export function PokemonCard({ pokemon }: { pokemon?: Pokemon }) {
  return (
    <div className="flex">
      <Card shadow="md" radius="md" padding="lg" withBorder className="w-12 flex-grow-0 flex-shrink-0">
        {pokemon ? (
          <>
            {
              <div className="flex flex-col items-center">
                <Card.Section>
                  <Image src={pokemon.sprites.front_default} alt={pokemon.name} />
                </Card.Section>

                <Text ta="center">{pokemon.name.toUpperCase()}</Text>

                <Group gap="5" className="mt-1">
                  {pokemon.types.map(({ type }, index) => (
                    <Pill key={index}>{type.name.toUpperCase()}</Pill>
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
