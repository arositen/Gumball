import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/Gumball/#',
  resolve: {
    alias: [{ find: "@", replacement: path.resolve(__dirname, "/Gumball/#/src") }]
  }
})
