import type { MetadataRoute } from 'next';

const SITE_URL = 'https://codrixwebsite.vercel.app';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/en/privacy', '/en/terms', '/kushtet', '/privatesia'],
    },
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
