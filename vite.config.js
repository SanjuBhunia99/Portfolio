// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'
// import tailwindcss from '@tailwindcss/vite'
// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [react({ jsxRuntime: "automatic" }), tailwindcss()],
//   base: "https://sanjubhunia99.github.io/Portfolio/",

//   build: {
//     target: "esnext",
//     minify: "terser",
//     terserOptions: {
//       compress: {
//         drop_console: true,
//         drop_debugger: true,
//       },
//     },
//     cssCodeSplit: true,
//     sourcemap: false,
//     chunkSizeWarningLimit: 600,
//     rollupOptions: {
//       output: {
//         manualChunks: {
//           react: ["react", "react-dom"],
//         },
//       },
//     },
//   },

//   optimizeDeps: {
//     include: ["react", "react-dom"],
//   },


import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react({ jsxRuntime: "automatic" }), tailwindcss()],
  base: "/Portfolio/",

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
        manualChunks(id) {
          if (id.includes("node_modules")) {
            return "vendor";
          }
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