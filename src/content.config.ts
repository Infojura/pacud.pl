// Definicja kolekcji bloga (Astro Content Collections).
// Każdy artykuł to jeden plik Markdown w katalogu src/content/blog/.
// Aby dodać nowy wpis: utwórz plik .md z poniższymi polami we frontmatterze -
// pojawi się automatycznie na liście /blog oraz pod adresem /blog/<nazwa-pliku>.
import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  // Ładujemy wszystkie pliki .md z katalogu z artykułami.
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  // Schemat wymusza komplet i poprawność metadanych każdego artykułu.
  schema: z.object({
    // Tytuł artykułu (nagłówek H1 + kafelek na liście).
    title: z.string(),
    // Krótki opis / zajawka widoczna na kafelku oraz w SEO (meta description).
    description: z.string(),
    // Data publikacji (format w pliku: YYYY-MM-DD).
    pubDate: z.coerce.date(),
    // Autor - domyślnie mecenas Pacud, można nadpisać w pliku.
    author: z.string().default('dr hab. Radosław Pacud'),
    // Kategoria / tag wyświetlany jako etykieta na kafelku (opcjonalnie).
    category: z.string().optional(),
    // Obraz wyróżniający (ścieżka w /public), np. '/images/blog/wpis.jpg' (opcjonalnie).
    image: z.string().optional(),
    // Szkic - ustaw true, aby ukryć wpis na produkcji (nie pojawi się na liście).
    draft: z.boolean().default(false),
  }),
});

export const collections = { blog };
