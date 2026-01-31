import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
    // Carga las variables de entorno del archivo .env.local
    const env = loadEnv(mode, process.cwd(), '');

    return {
      server: {
        port: 3000,
        host: '0.0.0.0',
      },
      plugins: [react()],
      define: {
        // Mantenemos tus claves de Gemini
        'process.env.API_KEY': JSON.stringify(env.GEMINI_API_KEY),
        'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY),
        
        // Añadimos la nueva API Key de Google Maps
        'process.env.VITE_GOOGLE_MAPS_API_KEY': JSON.stringify('AIzaSyCgZ1O18GHKXZM6t90aPcveft1WsTER7hs'),
      },
      resolve: {
        alias: {
          '@': path.resolve(__dirname, '.'),
        }
      }
    };
});