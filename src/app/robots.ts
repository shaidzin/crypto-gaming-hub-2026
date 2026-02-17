import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: 'https://crypto-gaming-hub-2026.vercel.app/sitemap.xml',
  };
}
