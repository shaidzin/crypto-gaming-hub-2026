// Sitemap - SEO for search engines
export default function sitemap() {
  const baseUrl = 'https://affiliate-content.vercel.app';
  
  const articles = [
    { slug: 'best-crypto-dice-games-2025', date: '2026-02-17' },
    { slug: 'usdt-betting-beginners-guide', date: '2026-02-16' },
    { slug: 'crypto-ludo-vs-traditional-ludo', date: '2026-02-15' },
    { slug: 'advanced-betting-strategies', date: '2026-02-14' },
    { slug: 'tron-vs-ethereum-gaming', date: '2026-02-13' },
    { slug: 'top-usdt-casinos-reviewed', date: '2026-02-12' },
    { slug: 'best-crypto-betting-sites', date: '2026-02-11' },
    { slug: 'crypto-gambling-legal-guide', date: '2026-02-10' },
    { slug: 'bitcoin-vs-usdt-betting', date: '2026-02-09' },
    { slug: 'provably-fair-explained', date: '2026-02-08' },
  ];

  const staticPages = [
    { url: '/', priority: '1.0' },
    { url: '/reviews', priority: '0.9' },
    { url: '/guides', priority: '0.9' },
    { url: '/strategy', priority: '0.8' },
    { url: '/about', priority: '0.6' },
  ];

  const articlesUrls = articles.map(article => ({
    url: `${baseUrl}/article/${article.slug}`,
    lastModified: article.date,
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));

  const staticUrls = staticPages.map(page => ({
    url: `${baseUrl}${page.url}`,
    lastModified: '2026-02-17',
    changeFrequency: 'monthly' as const,
    priority: parseFloat(page.priority),
  }));

  return [...staticUrls, ...articlesUrls];
}
