import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react';
import eslint from 'vite-plugin-eslint';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), eslint()],
   build: {
    outDir: 'build', // Set output directory to build
    rollupOptions: {
      output: {
        manualChunks: {
          // Split dependencies into separate chunks
          vendor: ['react', 'react-dom', 'antd'],
        },
      },
    },
    chunkSizeWarningLimit: 1000, // Adjust chunk size warning limit
  },
})
