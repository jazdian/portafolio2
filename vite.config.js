import { defineConfig } from 'vite';

export default defineConfig({
  root: 'src',  // Define 'src' como el directorio raíz
  build: {
    outDir: '../dist',  // Salida de los archivos de construcción en 'dist' en el nivel superior
  },
  server: {
    open: '/index.html',  // Abre 'index.html' por defecto
  }
});
