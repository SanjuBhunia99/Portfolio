import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
// https://vite.dev/config/
export default defineConfig({
  plugins: [react({jsxRuntime: "automatic"}),
  tailwindcss(),
  ],
   base:"https://SanjuBhunia99.github.io/Portfolio",
  
   build: {
    target: "esnext",
    minify: "terser",
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },
    cssCodeSplit: true,
    sourcemap: false,
    chunkSizeWarningLimit: 600,
    rollupOptions: {
      output: {
        manualChunks: {
          react: ["react", "react-dom"],
        },
      },
    },
  },

  optimizeDeps: {
    include: ["react", "react-dom"],
  },

  server: {
    open: true,
  },
});


