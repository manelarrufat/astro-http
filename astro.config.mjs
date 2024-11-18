// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

import sitemap from '@astrojs/sitemap';

import node from '@astrojs/node';
import db from '@astrojs/db';
import cloudflare from '@astrojs/cloudflare';

import vue from '@astrojs/vue';

// https://astro.build/config
export default defineConfig({
  site: 'https://example.com',
  integrations: [mdx(), sitemap(), db(), vue()],
  // output: 'hybrid',
  // adapter: cloudflare(),


  output: 'hybrid',
  adapter: node({
    mode: 'standalone',
  }),
});