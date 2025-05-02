import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/puneuniversity-ideabank/',
  plugins: [react(), tailwindcss()],

    server: {
      proxy: {
        '/api': {
          target: 'https://design3.dcpl.co.in/AyushCOE/APIs',
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, ''),
        },
      },
    },
});