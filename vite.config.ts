import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import tailwindcss from '@tailwindcss/vite';
import svgr from 'vite-plugin-svgr';
import { analyzer } from 'vite-bundle-analyzer';
import { compression } from 'vite-plugin-compression2';

// https://vite.dev/config/
export default defineConfig({
  base: '/personal-website/',
  plugins: [react(), tailwindcss(), svgr(), analyzer({ analyzerPort: 8687 }), compression()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  // The 'build' property configures how Vite builds the project for production.
  build: {
    // 'rollupOptions' allows you to customize the underlying Rollup bundler used by Vite.
    rollupOptions: {
      output: {
        // 'manualChunks' lets you define custom chunk splitting for better caching and load performance.
        manualChunks: {
          // The 'vendor' chunk will contain 'react' and 'react-dom' libraries.
          vendor: ['react', 'react-dom'],
          // The 'router' chunk will contain 'react-router' and 'react-router-dom' libraries.
          router: ['react-router', 'react-router-dom'],
          // The 'i18n' chunk will contain internationalization libraries.
          i18n: ['react-i18next', 'i18next'],
          // The 'ui' chunk will contain UI-related libraries.
          ui: ['clsx', 'fireworks-js'],
          gsap: ['gsap', '@gsap/react'],
          animations: ['canvas-confetti'],
        },
      },
    },
    // 'sourcemap' allows you to disable source map generation in production.
    sourcemap: false,
    // 'chunkSizeWarningLimit' sets the warning threshold (in KB) for chunk sizes. Here, it's set to 1000KB.
    chunkSizeWarningLimit: 300,
    // 'cssCodeSplit' allows you to create separate CSS files for each chunk.
    cssCodeSplit: true,
    // 'cssMinify' allows you to compress CSS in production.
    cssMinify: true,
  },
});
