import type { MetadataRoute } from 'next';

const SITE_URL = 'https://codrixwebsite.vercel.app';

export default function sitemap(): MetadataRoute.Sitemap {
  const languages = { sq: SITE_URL, en: `${SITE_URL}/en`, 'x-default': SITE_URL };

  return [
    { url: SITE_URL, lastModified: new Date(), alternates: { languages } },
    { url: `${SITE_URL}/en`, lastModified: new Date(), alternates: { languages } },
  ];
}
