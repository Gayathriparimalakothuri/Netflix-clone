import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from 'tailwindcss'
import autoprefixer from 'autoprefixer'
// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
 
    server: {
      proxy: {
        "/api": {
          target: "http://localhost:5000",
        },
      },
    },
 
 
})
