import { sentryVitePlugin } from "@sentry/vite-plugin";
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), sentryVitePlugin({
    org: "portfolio-xv",
    project: "iphone15pro"
  }), sentryVitePlugin({
    org: "portfolio-xv",
    project: "iphone15pro"
  })],

  build: {
    sourcemap: true
  }
})