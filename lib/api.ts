const SMAKSLY_API = process.env.NEXT_PUBLIC_SMAKSLY_API || 'https://smakaly-334466283114.me-central1.run.app';
const PROJECT_ID = process.env.NEXT_PUBLIC_PROJECT_ID || '69b1ba9846994943c30a76fd';

export interface BlogPost {
  _id: string;
  title: string;
  slug: string;
  excerpt: string;
  body: string;
  featuredImage: string;
  publishedAt: string;
  authorName: string;
  authorBio?: string;
  authorAvatar?: string;
  readingTime: number;
  tags: string[];
  category?: {
    name: string;
    slug: string;
  };
  metaTitle?: string;
  metaDescription?: string;
}

export async function getBlogs(page = 1, limit = 12): Promise<{
  blogs: BlogPost[];
  pagination: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
    hasMore: boolean;
  };
}> {
  try {
    const res = await fetch(
      `${SMAKSLY_API}/api/builder/blogs?projectId=${PROJECT_ID}&page=${page}&limit=${limit}&skipDummy=true`,
      { next: { revalidate: 60 } }
    );

    if (!res.ok) {
      throw new Error('Failed to fetch blogs');
    }

    const data = await res.json();
    return {
      blogs: data.data || [],
      pagination: data.pagination || { page, limit, total: 0, totalPages: 0, hasMore: false },
    };
  } catch (error) {
    console.error('Error fetching blogs:', error);
    return {
      blogs: [],
      pagination: { page, limit, total: 0, totalPages: 0, hasMore: false },
    };
  }
}

export async function getBlogBySlug(slug: string): Promise<BlogPost | null> {
  try {
    const res = await fetch(
      `${SMAKSLY_API}/api/builder/blogs?projectId=${PROJECT_ID}&slug=${slug}`,
      { next: { revalidate: 60 } }
    );

    if (!res.ok) {
      return null;
    }

    const data = await res.json();
    const blog = data.data;
    if (!blog) return null;
    return { ...blog, body: blog.body || '' };
  } catch (error) {
    console.error('Error fetching blog:', error);
    return null;
  }
}

export interface SitemapPage {
  path: string;
  type: string;
  updatedAt: string;
}

export async function getPages(): Promise<SitemapPage[]> {
  try {
    const res = await fetch(
      `${SMAKSLY_API}/api/builder/pages/sitemap?projectId=${PROJECT_ID}`,
      { next: { revalidate: 60 } }
    );

    if (!res.ok) {
      return [];
    }

    const data = await res.json();
    return data.data || [];
  } catch (error) {
    console.error('Error fetching pages:', error);
    return [];
  }
}

// Fetch ALL blogs for sitemap (paginates through all pages, skips dummy data)
export async function getAllBlogsForSitemap(): Promise<BlogPost[]> {
  const allBlogs: BlogPost[] = [];
  let page = 1;
  const limit = 50;

  try {
    while (true) {
      const res = await fetch(
        `${SMAKSLY_API}/api/builder/blogs?projectId=${PROJECT_ID}&page=${page}&limit=${limit}&skipDummy=true`,
        { next: { revalidate: 60 } }
      );

      if (!res.ok) break;

      const data = await res.json();
      const blogs = data.data || [];
      if (blogs.length === 0) break;

      allBlogs.push(...blogs);

      if (!data.pagination?.hasMore) break;
      page++;
    }
  } catch (error) {
    console.error('Error fetching all blogs for sitemap:', error);
  }

  return allBlogs;
}
