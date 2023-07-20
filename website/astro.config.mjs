import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({

  // Config: Deploy to GitHub Pages
  site: 'https://30DaysOf.github.io',
  base: '/semantic-kernel/',

  integrations: [
    starlight({
      title: 'Semantic Kernel',
      social: {
        github: 'https://github.com/30DaysOf/semantic-kernel',
      },
      sidebar: [
        {
          label: 'Guides',
          items: [
            // Each item here is one entry in the navigation menu.
            { label: 'Example Guide', link: '/guides/example/' },
          ],
        },
        {
          label: 'Reference',
          autogenerate: { directory: 'reference' },
        },
      ],
    }),
  ],

  // Process images with sharp: https://docs.astro.build/en/guides/assets/#using-sharp
  image: { service: { entrypoint: 'astro/assets/services/sharp' } },
});
