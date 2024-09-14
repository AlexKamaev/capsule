// vite.config.js
import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    port: 3000 // Порт, на котором будет запущен сервер разработки
  },
  build: {
    outDir: 'dist' // Папка для собранных файлов
  }
});
