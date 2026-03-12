import { getBlogs } from '@/lib/api';
import type { Metadata } from 'next';
import _BlogListingClient from './BlogListingClient';
const BlogListingClient = _BlogListingClient as any;

export const revalidate = 60;

export const metadata: Metadata = {
  title: 'Blog Posts & Articles | Blogger Community',
  description: 'Explore hundreds of blog posts and articles. Find content by category, tag, or search. Read latest stories from our blogging community.',
};

export default async function BlogListingPage() {
  const { blogs } = await getBlogs(1, 100);
  return <BlogListingClient blogs={blogs} />;
}
