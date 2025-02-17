import './index.css';

import { MantineProvider } from '@mantine/core';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import App from './app.tsx';

createRoot(document.getElementById('root') as HTMLElement).render(
  <StrictMode>
    <MantineProvider defaultColorScheme="auto">
      <App />
    </MantineProvider>
  </StrictMode>
);
