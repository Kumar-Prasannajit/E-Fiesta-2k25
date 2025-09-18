import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      // Treat Font Awesome React as external (prevents Rollup from bundling it incorrectly)
      external: ['@fortawesome/react-fontawesome'],
    },
    outDir: 'dist', // Ensure output goes to "dist" folder
  },
  resolve: {
    alias: {
      // Optional: helps if imports are messy
      '@': '/src',
    },
  },
});
