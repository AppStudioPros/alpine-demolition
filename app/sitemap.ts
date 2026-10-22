import type { MetadataRoute } from 'next';

const base = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.alpinedemolition.com';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: base, lastModified: new Date(), changeFrequency: 'weekly', priority: 1 },
    { url: `${base}/services`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/portfolio`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/company-profile`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/safety`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/contact`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/job-openings`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.7 },
    { url: `${base}/news`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.6 },
    { url: `${base}/news/9-news-denver-demolition-coverage`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.5 },
    { url: `${base}/news/denver-post-demolition-coverage`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.5 },
    { url: `${base}/news/longmont-times-call-demolition-coverage`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.5 },
    // GEO city pages
    { url: `${base}/demolition-contractor-denver`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/demolition-contractor-aurora`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/demolition-contractor-fort-collins`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/demolition-contractor-longmont`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/demolition-contractor-arvada`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/demolition-contractor-boulder`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/demolition-contractor-lakewood`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/privacy-policy`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.2 },
  ];
}
