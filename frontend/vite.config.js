import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: "./",  // relative paths for Netlify
  build: {
    outDir: 'dist',
    // REMOVE external: ['@fortawesome/react-fontawesome']
  },
  resolve: {
    alias: {
      '@': '/src',
    },
  },
});
