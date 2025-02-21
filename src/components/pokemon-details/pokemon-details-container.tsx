import { Modal } from '@mantine/core';

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
  return (
    <Modal
      title={`#${pokemon?.id} ${pokemon?.name.toUpperCase()}`}
      opened={showDetails}
      onClose={closeDetails}
      centered
      overlayProps={{
        backgroundOpacity: 0.65,
        blur: 3
      }}
      transitionProps={{ transition: 'slide-up', duration: 200, timingFunction: 'ease-in-out' }}
    >
      <PokemonDetails pokemon={pokemon!} />
    </Modal>
  );
}
