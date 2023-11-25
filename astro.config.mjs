import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
	site: 'https://unk.github.io',
	base: '/wts-23-astro-github-pages',
	integrations: [mdx(), sitemap()],
});
