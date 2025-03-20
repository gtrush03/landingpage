import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import fs from 'fs';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    {
      name: 'copy-redirects',
      closeBundle() {
        // Copy _redirects file to dist folder during build
        if (fs.existsSync('public/_redirects')) {
          fs.copyFileSync('public/_redirects', 'dist/_redirects');
          console.log('✓ _redirects file copied to dist folder');
        }
        
        // Copy robots.txt and sitemap.xml to dist folder during build
        if (fs.existsSync('public/robots.txt')) {
          fs.copyFileSync('public/robots.txt', 'dist/robots.txt');
          console.log('✓ robots.txt file copied to dist folder');
        }
        
        if (fs.existsSync('public/sitemap.xml')) {
          fs.copyFileSync('public/sitemap.xml', 'dist/sitemap.xml');
          console.log('✓ sitemap.xml file copied to dist folder');
        }
      }
    }
  ],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  server: {
    historyApiFallback: true,
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom', 'react-router-dom'],
          three: ['three', '@react-three/fiber', '@react-three/drei'],
        }
      }
    }
  },
  define: {
    'process.env.VITE_GA_MEASUREMENT_ID': JSON.stringify(process.env.VITE_GA_MEASUREMENT_ID)
  }
});