import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react';
import eslint from 'vite-plugin-eslint';

// https://vitejs.dev/config/
export default defineConfig({
  //base: '/VERSAPRO_Web/',
  plugins: [react(), eslint()],
  server: {
    port: 3000,
    host: '0.0.0.0',
  },
  preview: {
    port: 3000,  // Add this line to force Vite preview to use port 3000
    host: '0.0.0.0',
  },
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
