import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    hot: true, // Ensures hot module reloading is enabled
    watch: {
      usePolling: true, // Useful if you're running into issues with file system watching
    },
  },
})