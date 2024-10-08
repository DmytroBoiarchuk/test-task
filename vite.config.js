import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api1': {
        target: 'https://aclean-52e2f83f8d01.herokuapp.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api1/, ''),
      },
      '/api2': {
        target: 'https://aclean-52e2f83f8d01.herokuapp.com/shpp-second',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api2/, ''),
      },
      '/api3': {
        target: 'https://aclean-52e2f83f8d01.herokuapp.com/shpp-first',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api3/, ''),
      },
    },
  },
})