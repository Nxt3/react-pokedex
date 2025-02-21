import { ActionIcon } from '@mantine/core';
import { useQuery } from '@tanstack/react-query';
import { Fragment, useState } from 'react';
import { HiArrowNarrowLeft, HiArrowNarrowRight } from 'react-icons/hi';

import { fetchPokemon } from '../api/get-pokemon';
import { PokemonCard } from './pokemon-card';
import { PokemonDetailsContainer } from './pokemon-details/pokemon-details-container';

// TODO: not sold on the naming of this
export function PokemonContainer() {
  const [id, setId] = useState(1);
  const prev = () => setId(id - 1);
  const next = () => setId(id + 1);

  const { data: pokemon, isLoading } = useQuery({ queryKey: ['pokemon', id], queryFn: async () => fetchPokemon(id) });

  const [showDetails, setDetailsShown] = useState(false);
  const openPokemonDetails = () => setDetailsShown(true);
  const closePokemonDetails = () => setDetailsShown(false);

  return (
    <Fragment>
      <div className="flex flex-col items-center">
        <PokemonCard onOpenDetails={openPokemonDetails} pokemon={pokemon} isLoading={isLoading} />

        <div className="flex justify-center mt-1 gap-1">
          {id >= 2 ? (
            <ActionIcon size="xl" onClick={prev}>
              <HiArrowNarrowLeft />
            </ActionIcon>
          ) : undefined}
          <ActionIcon size="xl" onClick={next}>
            <HiArrowNarrowRight />
          </ActionIcon>
        </div>
      </div>

      {!!pokemon && <PokemonDetailsContainer pokemon={pokemon} showDetails={showDetails} closeDetails={closePokemonDetails} />}
    </Fragment>
  );
}

export default PokemonContainer;
