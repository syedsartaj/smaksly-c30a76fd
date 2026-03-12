'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Calendar, Clock, Tag, ArrowLeft, User } from 'lucide-react';

interface BlogPostData {
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
  category?: { name: string; slug: string };
}

export default function BlogPost({ blog, blogBasePath = '/blog' }: { blog: BlogPostData | null; blogBasePath?: string }) {
  {/* Blog Post */}

  if (!blog || !blog._id) {
    return (
      <main className="min-h-screen bg-white flex items-center justify-center px-4">
        <div className="text-center max-w-md mx-auto py-24">
          <div className="w-20 h-20 bg-cyan-50 rounded-full flex items-center justify-center mx-auto mb-6">
            <Tag className="w-10 h-10 text-cyan-500" />
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Post Not Found</h1>
          <p className="text-gray-500 mb-8">
            The blog post you're looking for doesn't exist or may have been removed.
          </p>
          <Link
            href={blogBasePath}
            className="inline-flex items-center gap-2 bg-cyan-500 hover:bg-cyan-600 text-white font-semibold px-6 py-3 rounded-full transition-colors duration-200"
            aria-label="Back to blog listing"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </Link>
        </div>
      </main>
    );
  }

  const formattedDate = new Date(blog.publishedAt).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <main className="min-h-screen bg-white font-[Inter,sans-serif]">

      {/* Hero Section */}
      <section aria-label="Featured image and post header" className="w-full">
        <div className="relative w-full h-64 sm:h-80 md:h-[480px] lg:h-[560px] bg-gray-100 overflow-hidden">
          <Image
            src={blog.featuredImage || '/placeholder.svg'}
            alt={`Featured image for ${blog.title}`}
            fill
            unoptimized
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

          {/* Overlay Content */}
          <div className="absolute inset-0 flex flex-col justify-end px-4 pb-8 sm:px-8 md:px-12 lg:px-20">
            <div className="max-w-4xl mx-auto w-full">
              {blog.category && (
                <Link
                  href={`${blogBasePath}/category/${blog.category.slug}`}
                  className="inline-block mb-3 text-xs sm:text-sm font-semibold uppercase tracking-widest text-white bg-cyan-500 hover:bg-cyan-400 px-3 py-1 rounded-full transition-colors duration-200"
                  aria-label={`View posts in ${blog.category.name}`}
                >
                  {blog.category.name}
                </Link>
              )}
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight max-w-3xl">
                {blog.title}
              </h1>
            </div>
          </div>
        </div>
      </section>

      {/* Article Meta & Body */}
      <section aria-label="Article content" className="py-10 md:py-16 px-4 sm:px-8">
        <div className="max-w-4xl mx-auto">

          {/* Back Link */}
          <Link
            href={blogBasePath}
            className="inline-flex items-center gap-2 text-cyan-600 hover:text-cyan-700 font-medium text-sm mb-8 group transition-colors duration-200"
            aria-label="Back to blog listing"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform duration-200" />
            Back to Blog
          </Link>

          {/* Meta Info */}
          <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 mb-6 border-b border-gray-100 pb-6">
            <span className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4 text-cyan-500" aria-hidden="true" />
              <time dateTime={blog.publishedAt}>{formattedDate}</time>
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-cyan-500" aria-hidden="true" />
              <span>{blog.readingTime} min read</span>
            </span>
            {blog.category && (
              <span className="flex items-center gap-1.5">
                <Tag className="w-4 h-4 text-cyan-500" aria-hidden="true" />
                <Link
                  href={`${blogBasePath}/category/${blog.category.slug}`}
                  className="hover:text-cyan-600 transition-colors duration-200"
                >
                  {blog.category.name}
                </Link>
              </span>
            )}
          </div>

          {/* Excerpt */}
          {blog.excerpt && (
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-10 font-medium border-l-4 border-cyan-400 pl-5 italic">
              {blog.excerpt}
            </p>
          )}

          {/* Article Body */}
          <article
            aria-label="Blog post body"
            className="prose-styles text-gray-700 leading-relaxed text-base md:text-lg"
            style={{
              lineHeight: '1.85',
            }}
            dangerouslySetInnerHTML={{ __html: blog.body }}
          />

          <style jsx global>{`
            .prose-styles h1,
            .prose-styles h2,
            .prose-styles h3,
            .prose-styles h4,
            .prose-styles h5,
            .prose-styles h6 {
              color: #111827;
              font-weight: 700;
              line-height: 1.3;
              margin-top: 2rem;
              margin-bottom: 1rem;
            }
            .prose-styles h2 { font-size: 1.75rem; }
            .prose-styles h3 { font-size: 1.4rem; }
            .prose-styles h4 { font-size: 1.15rem; }
            .prose-styles p { margin-bottom: 1.5rem; }
            .prose-styles a {
              color: #06b6d4;
              text-decoration: underline;
              text-underline-offset: 3px;
            }
            .prose-styles a:hover { color: #0891b2; }
            .prose-styles ul,
            .prose-styles ol {
              padding-left: 1.5rem;
              margin-bottom: 1.5rem;
            }
            .prose-styles ul { list-style-type: disc; }
            .prose-styles ol { list-style-type: decimal; }
            .prose-styles li { margin-bottom: 0.5rem; }
            .prose-styles blockquote {
              border-left: 4px solid #06b6d4;
              padding-left: 1.25rem;
              font-style: italic;
              color: #4b5563;
              margin: 1.5rem 0;
            }
            .prose-styles code {
              background: #f1f5f9;
              padding: 0.2em 0.4em;
              border-radius: 4px;
              font-size: 0.9em;
              color: #0e7490;
            }
            .prose-styles pre {
              background: #1e293b;
              color: #e2e8f0;
              padding: 1.25rem;
              border-radius: 10px;
              overflow-x: auto;
              margin-bottom: 1.5rem;
            }
            .prose-styles pre code {
              background: transparent;
              color: inherit;
              padding: 0;
            }
            .prose-styles img {
              border-radius: 12px;
              max-width: 100%;
              margin: 2rem auto;
              display: block;
            }
            .prose-styles hr {
              border-color: #e5e7eb;
              margin: 2.5rem 0;
            }
            .prose-styles table {
              width: 100%;
              border-collapse: collapse;
              margin-bottom: 1.5rem;
            }
            .prose-styles th,
            .prose-styles td {
              border: 1px solid #e5e7eb;
              padding: 0.75rem 1rem;
              text-align: left;
            }
            .prose-styles th {
              background: #f8fafc;
              font-weight: 600;
              color: #374151;
            }
          `}</style>

          {/* Tags */}
          {blog.tags && blog.tags.length > 0 && (
            <div className="mt-12 pt-8 border-t border-gray-100">
              <h2 className="text-sm font-semibold uppercase tracking-widest text-gray-400 mb-4">Tags</h2>
              <div className="flex flex-wrap gap-2" role="list" aria-label="Post tags">
                {blog.tags.map((tag) => (
                  <span
                    key={tag}
                    role="listitem"
                    className="inline-flex items-center gap-1.5 bg-cyan-50 hover:bg-cyan-100 text-cyan-700 text-sm font-medium px-3 py-1.5 rounded-full transition-colors duration-200 cursor-default"
                  >
                    <Tag className="w-3.5 h-3.5" aria-hidden="true" />
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Author Section */}
      <section aria-label="Author information" className="py-12 md:py-16 px-4 sm:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-sm font-semibold uppercase tracking-widest text-gray-400 mb-6">About the Author</h2>
          <div className="flex flex-col sm:flex-row items-start gap-6 bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-gray-100">
            <div className="flex-shrink-0">
              {blog.authorAvatar ? (
                <div className="relative w-20 h-20 rounded-full overflow-hidden ring-4 ring-cyan-100">
                  <Image
                    src={blog.authorAvatar}
                    alt={`Avatar of ${blog.authorName}`}
                    fill
                    unoptimized
                    className="object-cover"
                  />
                </div>
              ) : (
                <div className="w-20 h-20 rounded-full bg-cyan-100 flex items-center justify-center ring-4 ring-cyan-50">
                  <User className="w-9 h-9 text-cyan-500" aria-hidden="true" />
                </div>
              )}
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-xs font-semibold uppercase tracking-widest text-cyan-500 mb-1">Written by</p>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{blog.authorName}</h3>
              {blog.authorBio && (
                <p className="text-gray-500 text-sm leading-relaxed">{blog.authorBio}</p>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Back to Blog CTA */}
      <section aria-label="Navigation back to blog" className="py-12 md:py-16 px-4 sm:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-gray-400 text-sm mb-4">Enjoyed this article?</p>
          <Link
            href={blogBasePath}
            className="inline-flex items-center gap-2 bg-cyan-500 hover:bg-cyan-600 active:bg-cyan-700 text-white font-semibold px-8 py-3.5 rounded-full transition-colors duration-200 shadow-md shadow-cyan-100 hover:shadow-cyan-200"
            aria-label="Browse all blog posts"
          >
            <ArrowLeft className="w-4 h-4" />
            Browse All Posts
          </Link>
        </div>
      </section>

    </main>
  );
}