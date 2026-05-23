import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// IMPORTANT: `base` MUST match the GitHub repo name exactly.
// Repo: afrokreate-website  →  Live URL: https://<user>.github.io/afrokreate-website/
// If you later move to a custom domain, change `base` to '/'.
export default defineConfig({
  base: '/afrokreate-website/',
  plugins: [react()],
});
