import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// base defaults to '/' for Vercel / Netlify (root deployments).
// For a GitHub Pages *project* site (e.g. user.github.io/<repo>), build with:
//   BASE_PATH=/your-repo/ npm run build
export default defineConfig({
  plugins: [react()],
  base: process.env.BASE_PATH || '/',
  build: {
    chunkSizeWarningLimit: 700,
    rollupOptions: {
      output: {
        // Vite 8 (Rolldown) requires manualChunks to be a function.
        // Split long-lived vendor code into cacheable chunks.
        manualChunks(id) {
          if (!id.includes('node_modules')) return undefined
          if (id.includes('framer-motion')) return 'motion-vendor'
          if (/[\\/]node_modules[\\/](react|react-dom|scheduler)[\\/]/.test(id)) {
            return 'react-vendor'
          }
          return undefined
        },
      },
    },
  },
})
