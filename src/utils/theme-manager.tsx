import {
  ActionIconProps,
  localStorageColorSchemeManager as mantineLocalStorageSchemeManager,
  MantineColorScheme,
  MantineColorSchemeManager,
  useComputedColorScheme
} from '@mantine/core';
import { ReactElement } from 'react';
import { HiMoon, HiSun } from 'react-icons/hi';

import { LOCAL_STORAGE_COLOR_SCHEME_KEY } from '../config/color-scheme';

type ComputedColorScheme = ReturnType<typeof useComputedColorScheme>;

// use defaults from Mantine UI docs
// https://mantine.dev/theming/color-schemes/#color-scheme-manager
export function localStorageColorSchemeManager(key: string = LOCAL_STORAGE_COLOR_SCHEME_KEY): MantineColorSchemeManager {
  return {
    get: mantineLocalStorageSchemeManager({ key }).get,

    set: (scheme: MantineColorScheme) => {
      try {
        localStorage.setItem(key, scheme);
      } catch (error) {
        // remove default impl's logging
      }
    },

    subscribe: mantineLocalStorageSchemeManager({ key }).subscribe,

    unsubscribe: mantineLocalStorageSchemeManager({ key }).unsubscribe,

    clear: mantineLocalStorageSchemeManager({ key }).clear
  };
}

export function getColorSchemeToggleProps(colorScheme: ComputedColorScheme): {
  icon: ReactElement;
  color: ActionIconProps['color'];
} {
  const colorSchemeLookup: Record<ComputedColorScheme, ReturnType<typeof getColorSchemeToggleProps>> = {
    light: { icon: <HiMoon />, color: 'indigo.6' },
    dark: { icon: <HiSun />, color: 'yellow.5' }
  };

  // default is auto; if not set in localStorage, use greyed out icon
  if (!localStorage?.getItem(LOCAL_STORAGE_COLOR_SCHEME_KEY)) {
    return { icon: colorSchemeLookup[colorScheme].icon, color: 'gray.3' };
  }

  return colorSchemeLookup[colorScheme];
}
