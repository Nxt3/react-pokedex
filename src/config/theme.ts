import { createTheme, MantineThemeOverride } from '@mantine/core';

export const theme: MantineThemeOverride = createTheme({
  breakpoints: {
    xs: '21.25em', // 340px
    sm: '35.5em', // 568px
    md: '41.625em', // 666px
    lg: '64em', // 1024px
    xl: '81.25em' // 1300px
  }
});
