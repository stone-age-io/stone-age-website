import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    rollupOptions: {
      // MPA: one HTML entry per page, each with its own title/meta for SEO
      input: {
        main: path.resolve(__dirname, 'index.html'),
        builtOn: path.resolve(__dirname, 'built-on.html'),
        accessControl: path.resolve(__dirname, 'access-control.html'),
        helpdesk: path.resolve(__dirname, 'helpdesk.html'),
        kiosk: path.resolve(__dirname, 'kiosk.html'),
        agent: path.resolve(__dirname, 'agent.html'),
        ruleRouter: path.resolve(__dirname, 'rule-router.html'),
      },
    },
  },
});
