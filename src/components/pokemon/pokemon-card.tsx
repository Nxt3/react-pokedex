import { Card } from '@mantine/core';

export function PokemonCard({ pokemonName }: { pokemonName?: string }) {
  if (!pokemonName) {
    return <Card>Missing no</Card>;
  } else {
    return (
      <>
        <Card>{pokemonName.toUpperCase()}</Card>
      </>
    );
  }
}
