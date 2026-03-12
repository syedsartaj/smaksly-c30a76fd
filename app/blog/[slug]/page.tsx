import { getBlogBySlug, getBlogs } from '@/lib/api';
import type { Metadata } from 'next';
import _BlogPostClient from './BlogPostClient';
const BlogPostClient = _BlogPostClient as any;

export const revalidate = 60;

interface BlogPostPageProps {
  params: { slug: string };
}

export async function generateStaticParams() {
  const { blogs } = await getBlogs(1, 50);
  return blogs.map((blog) => ({ slug: blog.slug }));
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const blog = await getBlogBySlug(params.slug);
  return {
    title: blog?.metaTitle || blog?.title || 'Blog Post',
    description: blog?.metaDescription || blog?.excerpt || '',
    openGraph: blog?.featuredImage ? { images: [blog.featuredImage] } : undefined,
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const blog = await getBlogBySlug(params.slug);
  return <BlogPostClient blog={blog || null} />;
}
