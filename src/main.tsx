import './index.css';

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import AppContainer from './app/app';

createRoot(document.getElementById('root') as HTMLElement).render(
  <StrictMode>
    <AppContainer />
  </StrictMode>
);
