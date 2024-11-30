import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
// https://dev.to/rashidshamloo/deploying-vite-react-app-to-github-pages-35hf
export default defineConfig({
  plugins: [react()],
  base: "/roberika.github.io"
})
