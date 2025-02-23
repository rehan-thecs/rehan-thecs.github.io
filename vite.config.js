import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),tailwindcss()],
})
export default {
  base: '/rehan-thecs.github.io/', // Set this to the name of your repo if it's not hosted on your GitHub profile root
}
