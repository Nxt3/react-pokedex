import { Group } from '@mantine/core';
import { PokeAPI } from 'pokeapi-types';
import { Fragment } from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';

import { usePokemonEvolutionChainQuery, usePokemonQuery } from '../../api/pokeapi';
import { FrontDefaultSprite } from './pokemon-sprites';

export function EvolutionChain({ evolutionChainHref }: { evolutionChainHref?: string }) {
  const { data: evolutionChain } = usePokemonEvolutionChainQuery(evolutionChainHref);

  const getEvolutionChainIds = (chain: PokeAPI.ChainLink): number[] => {
    const ids: number[] = [];

    const traverseChain = (chain: PokeAPI.ChainLink) => {
      const speciesUrl = chain?.species?.url;
      const speciesMatchArray = speciesUrl?.match(/\/(\d+)\/$/);
      const speciesId = speciesMatchArray ? parseInt(speciesMatchArray[1]) : undefined;

      if (typeof speciesId === 'number' && !isNaN(speciesId)) {
        ids.push(speciesId);
      }

      if (chain.evolves_to) {
        chain.evolves_to.forEach((evolution: PokeAPI.ChainLink) => {
          traverseChain(evolution);
        });
      }
    };

    traverseChain(chain);
    return ids;
  };

  const evolutionIds = evolutionChain?.chain ? getEvolutionChainIds(evolutionChain.chain) : [];

  return (
    <Fragment>
      {evolutionChain?.chain && evolutionIds.length >= 1 && (
        <Group>
          {evolutionIds.map((id, index) => (
            <Fragment key={id}>
              <EvolutionSprite speciesId={id} />
              {index < evolutionIds.length - 1 && <HiArrowNarrowRight />}
            </Fragment>
          ))}
        </Group>
      )}
    </Fragment>
  );
}

function EvolutionSprite({ speciesId }: { speciesId: number }) {
  const { data: pokemon } = usePokemonQuery(speciesId);

  return pokemon && <FrontDefaultSprite name={pokemon.name} sprites={pokemon.sprites} />;
}
