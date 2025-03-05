import { Image, ImageProps, Stack, Text } from '@mantine/core';
import { PokeAPI } from 'pokeapi-types';
import { Fragment } from 'react/jsx-runtime';

import pokeball from '../../assets/pokeball.svg';
import { CenteredGroup } from '../centered-group';

export function PokemonSprites({ name, sprites }: { name: string; sprites: PokeAPI.PokemonSprites }) {
  const hasFemaleSprites = !!sprites.front_female;

  return (
    <CenteredGroup gap="xl">
      <PokemonSpritePair
        name={name}
        sprites={[sprites.front_default, sprites.front_shiny]}
        spriteType="default"
        pairLabel={hasFemaleSprites ? 'Male' : undefined}
      />

      {hasFemaleSprites && (
        <Fragment>
          <PokemonSpritePair
            name={name}
            sprites={[sprites.front_female, sprites.front_shiny_female]}
            spriteType="female"
            pairLabel="Female"
          />
        </Fragment>
      )}
    </CenteredGroup>
  );
}

const commonSpriteProps = (
  name: string,
  variant: 'default' | 'female' | 'shiny default' | 'shiny female'
): ImageProps & { alt: HTMLImageElement['alt'] } => ({
  w: 96,
  alt: `${name} ${variant} sprite`,
  fallbackSrc: pokeball
});

/**
 * Normal sprite and shiny sprite
 */
function PokemonSpritePair({
  name,
  sprites,
  spriteType,
  pairLabel
}: {
  name: string;
  sprites: [string, string];
  spriteType: 'default' | 'female';
  pairLabel?: 'Male' | 'Female';
}) {
  const [normalSprite, shinySprite] = sprites;

  return (
    <Stack align="center" justify="center" gap={0}>
      <CenteredGroup>
        <Image src={normalSprite} {...commonSpriteProps(name, spriteType)} />
        <Image src={shinySprite} {...commonSpriteProps(name, `shiny ${spriteType}`)} />
      </CenteredGroup>

      {!!pairLabel && <Text size="sm">{pairLabel}</Text>}
    </Stack>
  );
}
