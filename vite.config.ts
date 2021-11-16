import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  build: {
    outDir: 'build',
    brotliSize: false,
    rollupOptions: {
      output: {
        manualChunks: {
          react: ['react', 'react-dom', 'react-router-dom', 'react-router', 'react-is'],
        },
      },
    },
  },

  plugins: [
    react({
      babel: {
        compact: true,
      },
    }),
    tsconfigPaths(),
  ],
});
