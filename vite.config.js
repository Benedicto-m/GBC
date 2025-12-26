import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'
import { readFileSync } from 'fs'

// Plugin pour servir les fichiers Markdown depuis content/ en développement
function markdownContentPlugin() {
  return {
    name: 'markdown-content',
    configureServer(server) {
      server.middlewares.use('/content', (req, res, next) => {
        try {
          const filePath = resolve(__dirname, 'content', req.url.slice(1))
          const content = readFileSync(filePath, 'utf-8')
          res.setHeader('Content-Type', 'text/markdown; charset=utf-8')
          res.end(content)
        } catch (error) {
          next()
        }
      })
    },
  }
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), markdownContentPlugin()],
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
      '@content': resolve(__dirname, './content'),
    },
  },
  // Servir les fichiers Markdown depuis le dossier content
  publicDir: 'public',
  server: {
    fs: {
      // Permettre l'accès aux fichiers dans le dossier content
      allow: ['..'],
    },
  },
  // Copier les fichiers Markdown dans le build
  build: {
    rollupOptions: {
      // Les fichiers Markdown seront servis comme assets statiques depuis public/content/
    },
  },
})

