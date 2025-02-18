import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from '@tailwindcss/vite'
import path from 'node:path'
// https://vite.dev/config/
export default defineConfig({
  plugins: [tailwindcss(), react()],
  resolve: {
    alias: {
      '#': path.resolve(__dirname, './src'),
      '#components': path.resolve(__dirname, './src/components'),
      '#hooks': path.resolve(__dirname, './src/hooks'),
      '#utils': path.resolve(__dirname, './src/utils')
    }
  }
})
