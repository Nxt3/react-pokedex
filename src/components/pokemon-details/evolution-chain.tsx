import { usePokemonEvolutionChainQuery } from '../../api/pokeapi';

export function EvolutionChain({ evolutionChainHref }: { evolutionChainHref?: string }) {
  const { data: evolution } = usePokemonEvolutionChainQuery(evolutionChainHref);

  // TODO: make this way prettier and show species sprites
  return (
    evolution && (
      <ul>
        <li>
          {evolution.chain.species.name}
          {evolution.chain.evolves_to.length > 0 && (
            <ul>
              {evolution.chain.evolves_to.map((_evolution) => (
                <li key={_evolution.species.name}>
                  {_evolution.species.name}
                  {_evolution.evolves_to.length > 0 && (
                    <ul>
                      {_evolution.evolves_to.map((subEvolution) => (
                        <li key={subEvolution.species.name}>{subEvolution.species.name}</li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          )}
        </li>
      </ul>
    )
  );
}
