/// <reference types="vitest" />

import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// https://vite.dev/config/
export default defineConfig({
  test: {
    globals: true,
  },
  plugins: [react(), tailwindcss()],
});
