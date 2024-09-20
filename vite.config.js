import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"

// vite.config.js
export default defineConfig({
    // config options
    base: '/portfolio/',
    plugins: [react()]
  })