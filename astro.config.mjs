// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // Kanoniczna domena serwisu — używana do generowania absolutnych URL-i
  // (canonical, Open Graph, sitemap). Zmień, jeśli domena będzie inna.
  site: 'https://pacud.pl',
  trailingSlash: 'ignore',
  integrations: [
    sitemap({
      // Podpowiedzi dla wyszukiwarek co do priorytetu i częstotliwości zmian.
      changefreq: 'monthly',
      priority: 0.7,
      lastmod: new Date(),
      serialize(item) {
        // Strona główna ma najwyższy priorytet.
        if (item.url === 'https://pacud.pl/') {
          item.priority = 1.0;
          item.changefreq = 'weekly';
        }
        return item;
      },
    }),
  ],
});
