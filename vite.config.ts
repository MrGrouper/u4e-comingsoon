import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: 'https://mrgrouper.github.io/u4e-comingsoon/',
  plugins: [react()],
})
