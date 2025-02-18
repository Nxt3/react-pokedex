import { ActionIcon, Loader } from '@mantine/core';
import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import { HiArrowNarrowLeft, HiArrowNarrowRight } from 'react-icons/hi';

import { fetchPokemon } from '../api/get-pokemon';
import { PokemonCard } from './pokemon/pokemon-card';

export function PokemonContainer() {
  const [id, setId] = useState(1);
  const { data: pokemon, isLoading } = useQuery({ queryKey: ['pokemon', id], queryFn: async () => fetchPokemon(id) });

  const next = () => {
    setId(id + 1);
  };

  const prev = () => {
    setId(id - 1);
  };

  return (
    <>
      <div className="flex flex-col items-center">
        {isLoading && <Loader></Loader>}
        {!isLoading && <PokemonCard pokemon={pokemon} />}

        <div className="flex justify-center mt-1 gap-1">
          {id >= 2 ? (
            <ActionIcon size="xl" onClick={prev}>
              <HiArrowNarrowLeft />
            </ActionIcon>
          ) : null}
          <ActionIcon size="xl" onClick={next}>
            <HiArrowNarrowRight />
          </ActionIcon>
        </div>
      </div>
    </>
  );
}

export default PokemonContainer;
