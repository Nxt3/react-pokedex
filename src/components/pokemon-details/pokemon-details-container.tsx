import { Group, Modal, Text } from '@mantine/core';

import { usePokemonDetailsQuery } from '../../api/pokeapi';
import { Pokemon } from '../../types/pokemon';
import { PokemonDetails } from './pokemon-details';

export function PokemonDetailsContainer({
  pokemon,
  showDetails,
  closeDetails
}: {
  pokemon: Pokemon;
  showDetails: boolean;
  closeDetails: () => void;
}) {
  const { data: pokemonDetails, isLoading } = usePokemonDetailsQuery(pokemon!.id);

  return (
    <Modal.Root
      size="xl"
      opened={showDetails}
      onClose={closeDetails}
      centered
      transitionProps={{ transition: 'slide-up', duration: 200, timingFunction: 'ease-in-out' }}
    >
      <Modal.Overlay backgroundOpacity={0.65} blur={3} />
      <Modal.Content radius="lg">
        <Modal.Header>
          <Modal.Title>
            <Group gap="xs">
              <Text fw={500}>#{pokemon.id}</Text>
              <Text fw={800}>{pokemon.name.toUpperCase()}</Text>
            </Group>
          </Modal.Title>
          <Modal.CloseButton />
        </Modal.Header>
        <Modal.Body>
          <PokemonDetails pokemon={pokemon} pokemonDetails={pokemonDetails} isLoading={isLoading} />
        </Modal.Body>
      </Modal.Content>
    </Modal.Root>
  );
}
