import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
// import image from '@astrojs/image';

export default defineConfig({
  // Integrations
  integrations: [
    react(),
    tailwind({
      applyBaseStyles: false,
    }),
    // image(),
  ],
  
  // Site configuration for SEO
  site: 'https://manuelamateus.com',
  
  // Build configuration
  build: {
    format: 'file',
  },
  
  // Optimization
  output: 'static',
  
  // Routing
  trailingSlash: 'never',
  
  // Vite configuration
  vite: {
    ssr: {
      external: ['svgo'],
    },
  },
});
