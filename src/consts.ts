// Centralne metadane serwisu — jedno źródło prawdy dla SEO, Open Graph,
// danych strukturalnych (JSON-LD), sitemap oraz stopki.
// Zmiana nazwy, adresu czy telefonu w jednym miejscu aktualizuje całe SEO.

export const SITE = {
  // Kanoniczna domena (bez ukośnika na końcu).
  url: 'https://pacud.pl',
  // Pełna nazwa marki / firmy.
  name: 'Kancelaria Prawa Gospodarczego i Ubezpieczeniowego Radosław Pacud',
  // Krótka nazwa (og:site_name, tytuły podstron).
  shortName: 'Kancelaria Radosław Pacud',
  // Domyślny opis (meta description) używany, gdy strona nie poda własnego.
  description:
    'Kancelaria Prawa Gospodarczego i Ubezpieczeniowego Radosław Pacud w Częstochowie — ' +
    'kompleksowa obsługa prawna przedsiębiorstw, M&A, prawo ubezpieczeniowe, RODO, ochrona ' +
    'sygnalistów oraz doradztwo IT. Ponad 25 lat doświadczenia, obsługa w języku polskim i angielskim.',
  // Domyślny obraz do podglądu w social media / wynikach (Open Graph, Twitter).
  // Dedykowana grafika markowa 1200×630 px (standard OG).
  ogImage: '/images/og-image.jpg',
  locale: 'pl_PL',
  lang: 'pl',
  // Słowa kluczowe (pomocniczo; wyszukiwarki traktują je marginalnie,
  // ale bywają wykorzystywane przez modele AI i katalogi).
  keywords: [
    'kancelaria prawna Częstochowa',
    'radca prawny Częstochowa',
    'prawo gospodarcze',
    'prawo ubezpieczeniowe',
    'obsługa prawna przedsiębiorstw',
    'M&A',
    'RODO',
    'ochrona sygnalistów',
    'odszkodowania',
    'Radosław Pacud',
  ],
} as const;

export const CONTACT = {
  street: 'ul. Kopernika 42 lok. 1',
  postalCode: '42-200',
  city: 'Częstochowa',
  region: 'śląskie',
  country: 'PL',
  phone: '+48 34 324 22 42',
  // Uwaga: e-mail celowo nie jest publikowany w danych strukturalnych,
  // aby ograniczyć zbieranie adresu przez boty (na stronie jest obfuskowany).
  latitude: 50.8118,
  longitude: 19.1203,
  linkedin:
    'https://www.linkedin.com/company/kancelaria-prawa-gospodarczego-i-ubezpieczeniowego/',
} as const;

export const FOUNDER = {
  name: 'Radosław Pacud',
  honorificPrefix: 'dr hab.',
  jobTitle: 'Radca prawny, prof. UE Katowice',
} as const;
