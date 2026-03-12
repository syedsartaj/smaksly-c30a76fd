import { MetadataRoute } from 'next';
import { getPages, getAllBlogsForSitemap } from '@/lib/api';

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://smaksly-c30a76fd.vercel.app';

export const revalidate = 60;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  if (!BASE_URL) return [];

  const entries: MetadataRoute.Sitemap = [];

  // Dynamic pages from API
  const pages = await getPages();
  for (const page of pages) {
    if (page.type === 'blog-post') continue;
    entries.push({
      url: `${BASE_URL}${page.path === '/' ? '' : page.path}`,
      lastModified: new Date(page.updatedAt),
      changeFrequency: page.path === '/' ? 'daily' : 'weekly',
      priority: page.path === '/' ? 1.0 : 0.8,
    });
  }

  // Dynamic blog posts (fetches ALL pages, skips dummy data)
  try {
    const blogs = await getAllBlogsForSitemap();
    for (const blog of blogs) {
      entries.push({
        url: `${BASE_URL}/blog/${blog.slug}`,
        lastModified: new Date(blog.publishedAt),
        changeFrequency: 'weekly',
        priority: 0.7,
      });
    }
  } catch (error) {
    console.error('Sitemap: failed to fetch blogs', error);
  }

  return entries;
}
