import { ActionIcon, Group, Stack } from '@mantine/core';
import { useQueryClient } from '@tanstack/react-query';
import { Fragment, useState } from 'react';
import { HiArrowNarrowLeft, HiArrowNarrowRight } from 'react-icons/hi';

import { pokemonDetailsQueryOptions, usePokemonQuery } from '../api/pokeapi';
import { PokemonCard } from './pokemon-card';
import { PokemonDetailsContainer } from './pokemon-details/pokemon-details-container';

// TODO / FIXME: not sold on the naming of this
export function PokemonContainer() {
  const queryClient = useQueryClient();

  const [id, setId] = useState(1);
  const prev = () => setId(id - 1);
  const next = () => setId(id + 1);

  const { data: pokemon, isLoading } = usePokemonQuery(id);

  const [showDetails, setDetailsShown] = useState(false);
  const openPokemonDetails = () => setDetailsShown(true);
  const closePokemonDetails = () => setDetailsShown(false);

  const prefetchPokemonDetails = () => queryClient.prefetchQuery(pokemonDetailsQueryOptions(id));

  return (
    <Fragment>
      <Stack justify="center" align="center">
        <PokemonCard onOpenDetails={openPokemonDetails} pokemon={pokemon} isLoading={isLoading} onHover={prefetchPokemonDetails} />

        <Group justify="center" align="center" gap="xl">
          {id >= 2 ? (
            <ActionIcon size="xl" onClick={prev}>
              <HiArrowNarrowLeft />
            </ActionIcon>
          ) : undefined}
          <ActionIcon size="xl" onClick={next}>
            <HiArrowNarrowRight />
          </ActionIcon>
        </Group>
      </Stack>

      {!!pokemon && <PokemonDetailsContainer pokemon={pokemon} showDetails={showDetails} closeDetails={closePokemonDetails} />}
    </Fragment>
  );
}

export default PokemonContainer;
