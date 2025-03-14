import react from '@vitejs/plugin-react-swc';
import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  base: './',
  build: {
    outDir: 'public'
  },
  publicDir: 'assets',
  server: { port: 4300 }
});
