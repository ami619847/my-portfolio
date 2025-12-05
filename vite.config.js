import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Needed for GitHub pages
export default defineConfig({
  plugins: [react()],
  base: '/<REPO>/'
})
