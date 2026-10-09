// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://dannydzib.github.io',
  base: '/my-cv',
  trailingSlash: 'always',
  server: { port: 3000 },
});
