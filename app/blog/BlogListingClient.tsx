'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Search, Clock, User, Calendar, Tag, ChevronRight, BookOpen, Filter, X } from 'lucide-react';

interface BlogPost {
  _id: string;
  title: string;
  slug: string;
  excerpt: string;
  featuredImage: string;
  publishedAt: string;
  authorName: string;
  readingTime: number;
  tags: string[];
  category?: { name: string; slug: string };
}

export default function BlogListingPage({ blogs = [], blogBasePath = '/blog' }: { blogs: BlogPost[]; blogBasePath?: string }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const categories = useMemo(() => {
    const cats = blogs
      .filter((b) => b.category)
      .map((b) => b.category!);
    const unique = Array.from(new Map(cats.map((c) => [c.slug, c])).values());
    return unique;
  }, [blogs]);

  const allTags = useMemo(() => {
    const tags = blogs.flatMap((b) => b.tags);
    return Array.from(new Set(tags));
  }, [blogs]);

  const filteredBlogs = useMemo(() => {
    return blogs.filter((blog) => {
      const matchesSearch =
        searchQuery === '' ||
        blog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        blog.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        blog.authorName.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesCategory =
        !selectedCategory ||
        blog.category?.slug === selectedCategory;

      const matchesTag =
        !selectedTag ||
        blog.tags.includes(selectedTag);

      return matchesSearch && matchesCategory && matchesTag;
    });
  }, [blogs, searchQuery, selectedCategory, selectedTag]);

  const formatDate = (dateString: string) => {
    try {
      return new Date(dateString).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      });
    } catch {
      return dateString;
    }
  };

  const clearFilters = () => {
    setSearchQuery('');
    setSelectedCategory(null);
    setSelectedTag(null);
  };

  const hasActiveFilters = searchQuery || selectedCategory || selectedTag;

  const featuredPost = filteredBlogs[0];
  const remainingPosts = filteredBlogs.slice(1);

  return (
    <main className="min-h-screen bg-white font-[Inter,sans-serif]">
      {/* Blog Listing */}

      {/* Hero Header */}
      <section className="bg-gradient-to-br from-cyan-500 via-cyan-400 to-cyan-600 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <BookOpen className="w-6 h-6 text-white opacity-80" aria-hidden="true" />
            <span className="text-white/80 text-sm font-medium uppercase tracking-widest">Our Blog</span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white mb-4 leading-tight">
            Stories, Tips &amp; Insights
          </h1>
          <p className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto mb-10">
            Explore our latest articles, guides, and thought leadership pieces crafted to inspire and inform.
          </p>

          {/* Search Bar */}
          <div className="relative max-w-xl mx-auto">
            <label htmlFor="blog-search" className="sr-only">Search articles</label>
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" aria-hidden="true" />
            <input
              id="blog-search"
              type="search"
              placeholder="Search articles, topics, authors..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-4 rounded-2xl bg-white text-gray-800 placeholder-gray-400 shadow-xl focus:outline-none focus:ring-2 focus:ring-cyan-300 text-base"
              aria-label="Search blog articles"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                aria-label="Clear search"
              >
                <X className="w-5 h-5" />
              </button>
            )}
          </div>
        </div>
      </section>

      {/* Category Navigation & Filters */}
      <section className="sticky top-0 z-30 bg-white border-b border-gray-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4 py-3">
            {/* Category Pills */}
            <nav
              aria-label="Blog categories"
              className="flex items-center gap-2 overflow-x-auto scrollbar-hide flex-1 min-w-0"
            >
              <button
                onClick={() => setSelectedCategory(null)}
                className={`flex-shrink-0 px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                  !selectedCategory
                    ? 'bg-cyan-500 text-white shadow-md shadow-cyan-200'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
                aria-pressed={!selectedCategory}
              >
                All Posts
              </button>
              {categories.map((cat) => (
                <button
                  key={cat.slug}
                  onClick={() => setSelectedCategory(selectedCategory === cat.slug ? null : cat.slug)}
                  className={`flex-shrink-0 px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                    selectedCategory === cat.slug
                      ? 'bg-cyan-500 text-white shadow-md shadow-cyan-200'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                  aria-pressed={selectedCategory === cat.slug}
                >
                  {cat.name}
                </button>
              ))}
            </nav>

            {/* Filter Toggle */}
            <button
              onClick={() => setIsFilterOpen(!isFilterOpen)}
              className={`flex-shrink-0 flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold border transition-all duration-200 ${
                isFilterOpen || selectedTag
                  ? 'border-cyan-500 text-cyan-600 bg-cyan-50'
                  : 'border-gray-200 text-gray-600 hover:border-cyan-300 hover:text-cyan-600'
              }`}
              aria-expanded={isFilterOpen}
              aria-label="Toggle tag filters"
            >
              <Filter className="w-4 h-4" aria-hidden="true" />
              <span className="hidden sm:inline">Tags</span>
              {selectedTag && (
                <span className="w-2 h-2 rounded-full bg-cyan-500 inline-block" aria-hidden="true" />
              )}
            </button>
          </div>

          {/* Tag Filter Panel */}
          {isFilterOpen && allTags.length > 0 && (
            <div className="pb-3 flex flex-wrap gap-2" role="group" aria-label="Filter by tag">
              {allTags.map((tag) => (
                <button
                  key={tag}
                  onClick={() => setSelectedTag(selectedTag === tag ? null : tag)}
                  className={`flex items-center gap-1 px-3 py-1.5 rounded-full text-xs font-medium border transition-all duration-200 ${
                    selectedTag === tag
                      ? 'bg-cyan-500 text-white border-cyan-500'
                      : 'bg-white text-gray-500 border-gray-200 hover:border-cyan-300 hover:text-cyan-600'
                  }`}
                  aria-pressed={selectedTag === tag}
                >
                  <Tag className="w-3 h-3" aria-hidden="true" />
                  {tag}
                </button>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Active Filter Summary */}
      {hasActiveFilters && (
        <div className="bg-cyan-50 border-b border-cyan-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2.5 flex items-center justify-between gap-4">
            <p className="text-sm text-cyan-700">
              <span className="font-semibold">{filteredBlogs.length}</span>{' '}
              {filteredBlogs.length === 1 ? 'result' : 'results'} found
              {searchQuery && <span> for &ldquo;<strong>{searchQuery}</strong>&rdquo;</span>}
            </p>
            <button
              onClick={clearFilters}
              className="text-sm text-cyan-600 hover:text-cyan-800 font-medium flex items-center gap-1 transition-colors"
              aria-label="Clear all active filters"
            >
              <X className="w-4 h-4" aria-hidden="true" />
              Clear filters
            </button>
          </div>
        </div>
      )}

      {/* Blog Content */}
      <section className="py-12 md:py-20" aria-label="Blog articles">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Empty State */}
          {filteredBlogs.length === 0 && (
            <div className="flex flex-col items-center justify-center py-24 text-center">
              <div className="w-20 h-20 rounded-full bg-cyan-50 flex items-center justify-center mb-6">
                <BookOpen className="w-10 h-10 text-cyan-300" aria-hidden="true" />
              </div>
              <h2 className="text-2xl font-bold text-gray-800 mb-2">
                {blogs.length === 0 ? 'No posts yet' : 'No results found'}
              </h2>
              <p className="text-gray-500 max-w-md mb-8">
                {blogs.length === 0
                  ? 'Check back soon — great content is on its way!'
                  : 'Try adjusting your search or filters to find what you\'re looking for.'}
              </p>
              {hasActiveFilters && (
                <button
                  onClick={clearFilters}
                  className="px-6 py-3 bg-cyan-500 text-white rounded-full font-semibold hover:bg-cyan-600 transition-colors shadow-md shadow-cyan-200"
                >
                  Clear all filters
                </button>
              )}
            </div>
          )}

          {/* Featured Post */}
          {featuredPost && !hasActiveFilters && (
            <article className="mb-16 group" aria-label={`Featured post: ${featuredPost.title}`}>
              <Link
                href={`${blogBasePath}/${featuredPost.slug}`}
                className="flex flex-col lg:flex-row gap-0 rounded-3xl overflow-hidden bg-white shadow-xl hover:shadow-2xl transition-shadow duration-300 border border-gray-100"
                aria-label={`Read featured article: ${featuredPost.title}`}
              >
                {/* Featured Image */}
                <div className="relative w-full lg:w-1/2 aspect-[16/9] lg:aspect-auto lg:min-h-[400px] overflow-hidden bg-gray-100">
                  <Image
                    src={featuredPost.featuredImage || '/placeholder.svg'}
                    alt={`Featured image for ${featuredPost.title}`}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                  <span className="absolute top-4 left-4 bg-cyan-500 text-white text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wide">
                    Featured
                  </span>
                </div>

                {/* Featured Content */}
                <div className="flex-1 p-8 md:p-10 lg:p-12 flex flex-col justify-center">
                  {featuredPost.category && (
                    <span className="text-cyan-500 text-sm font-semibold uppercase tracking-wider mb-3 inline-block">
                      {featuredPost.category.name}
                    </span>
                  )}
                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-900 mb-4 leading-tight group-hover:text-cyan-600 transition-colors duration-200">
                    {featuredPost.title}
                  </h2>
                  <p className="text-gray-500 text-base md:text-lg leading-relaxed mb-6 line-clamp-3">
                    {featuredPost.excerpt}
                  </p>

                  {/* Meta */}
                  <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400 mb-6">
                    <span className="flex items-center gap-1.5">
                      <User className="w-4 h-4 text-cyan-400" aria-hidden="true" />
                      <span>{featuredPost.authorName}</span>
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Calendar className="w-4 h-4 text-cyan-400" aria-hidden="true" />
                      <time dateTime={featuredPost.publishedAt}>{formatDate(featuredPost.publishedAt)}</time>
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Clock className="w-4 h-4 text-cyan-400" aria-hidden="true" />
                      <span>{featuredPost.readingTime} min read</span>
                    </span>
                  </div>

                  {/* Tags */}
                  {featuredPost.tags.length > 0 && (
                    <div className="flex flex-wrap gap-2 mb-8">
                      {featuredPost.tags.slice(0, 3).map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 bg-cyan-50 text-cyan-600 text-xs font-medium rounded-full border border-cyan-100"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}

                  <span className="inline-flex items-center gap-2 text-cyan-500 font-semibold group-hover:gap-3 transition-all duration-200">
                    Read Article
                    <ChevronRight className="w-5 h-5" aria-hidden="true" />
                  </span>
                </div>
              </Link>
            </article>
          )}

          {/* Blog Grid */}
          {(hasActiveFilters ? filteredBlogs : remainingPosts).length > 0 && (
            <>
              {!hasActiveFilters && remainingPosts.length > 0 && (
                <h2 className="text-xl font-bold text-gray-800 mb-8 flex items-center gap-2">
                  <span className="w-1 h-6 bg-cyan-500 rounded-full inline-block" aria-hidden="true" />
                  Latest Articles
                </h2>
              )}
              {hasActiveFilters && (
                <h2 className="text-xl font-bold text-gray-800 mb-8 flex items-center gap-2">
                  <span className="w-1 h-6 bg-cyan-500 rounded-full inline-block" aria-hidden="true" />
                  Search Results
                </h2>
              )}

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {(hasActiveFilters ? filteredBlogs : remainingPosts).map((blog) => (
                  <article
                    key={blog._id}
                    className="group bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col"
                    aria-label={`Article: ${blog.title}`}
                  >
                    <Link
                      href={`${blogBasePath}/${blog.slug}`}
                      className="flex flex-col flex-1"
                      aria-label={`Read article: ${blog.title}`}
                    >
                      {/* Card Image */}
                      <div className="relative aspect-[16/9] overflow-hidden bg-gray-100">
                        <Image
                          src={blog.featuredImage || '/placeholder.svg'}
                          alt={`Cover image for article: ${blog.title}`}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
                        {blog.category && (
                          <span className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm text-cyan-600 text-xs font-bold px-2.5 py-1 rounded-full">
                            {blog.category.name}
                          </span>
                        )}
                      </div>

                      {/* Card Content */}
                      <div className="p-6 flex flex-col flex-1">
                        {/* Meta */}
                        <div className="flex items-center gap-3 text-xs text-gray-400 mb-3 flex-wrap">
                          <span className="flex items-center gap-1">
                            <Calendar className="w-3.5 h-3.5 text-cyan-400" aria-hidden="true" />
                            <time dateTime={blog.publishedAt}>{formatDate(blog.publishedAt)}</time>
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock className="w-3.5 h-3.5 text-cyan-400" aria-hidden="true" />
                            {blog.readingTime} min read
                          </span>
                        </div>

                        {/* Title */}
                        <h3 className="text-lg font-bold text-gray-900 mb-2 leading-snug group-hover:text-cyan-600 transition-colors duration-200 line-clamp-2">
                          {blog.title}
                        </h3>

                        {/* Excerpt */}
                        <p className="text-gray-500 text-sm leading-relaxed line-clamp-3 mb-4 flex-1">
                          {blog.excerpt}
                        </p>

                        {/* Tags */}
                        {blog.tags.length > 0 && (
                          <div className="flex flex-wrap gap-1.5 mb-4">
                            {blog.tags.slice(0, 2).map((tag) => (
                              <span
                                key={tag}
                                className="px-2.5 py-1 bg-gray-50 text-gray-500 text-xs font-medium rounded-full border border-gray-100"
                              >
                                #{tag}
                              </span>
                            ))}
                            {blog.tags.length > 2 && (
                              <span className="px-2.5 py-1 bg-gray-50 text-gray-400 text-xs font-medium rounded-full border border-gray-100">
                                +{blog.tags.length - 2}
                              </span>
                            )}
                          </div>
                        )}

                        {/* Author & CTA */}
                        <div className="flex items-center justify-between pt-4 border-t border-gray-50 mt-auto">
                          <div className="flex items-center gap-2">
                            <div className="w-7 h-7 rounded-full bg-gradient-to-br from-cyan-400 to-cyan-600 flex items-center justify-center flex-shrink-0" aria-hidden="true">
                              <User className="w-3.5 h-3.5 text-white" />
                            </div>
                            <span className="text-xs text-gray-500 font-medium truncate max-w-[100px]">
                              {blog.authorName}
                            </span>
                          </div>
                          <span className="flex items-center gap-1 text-xs text-cyan-500 font-semibold group-hover:gap-2 transition-all duration-200">
                            Read more
                            <ChevronRight className="w-3.5 h-3.5" aria-hidden="true" />
                          </span>
                        </div>
                      </div>
                    </Link>
                  </article>
                ))}
              </div>
            </>
          )}
        </div>
      </section>

      {/* Newsletter CTA */}
      {blogs.length > 0 && (
        <section className="py-16 md:py-24 bg-gradient-to-br from-cyan-500 to-cyan-600" aria-label="Newsletter signup">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-6" aria-hidden="true">
              <BookOpen className="w-7 h-7 text-white" />
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
              Never Miss a Post
            </h2>
            <p className="text-white/80 text-lg mb-8 max-w-xl mx-auto">
              Subscribe to get the latest articles delivered straight to your inbox. No spam, unsubscribe anytime.
            </p>
            <form
              className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
              onSubmit={(e) => e.preventDefault()}
              aria-label="Newsletter subscription form"
            >
              <label htmlFor="newsletter-email" className="sr-only">Email address</label>
              <input
                id="newsletter-email"
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-5 py-3.5 rounded-xl bg-white text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white/50 text-sm font-medium"
                aria-required="true"
              />
              <button
                type="submit"
                className="px-6 py-3.5 bg-gray-900 text-white rounded-xl font-semibold text-sm hover:bg-gray-800 transition-colors duration-200 whitespace-nowrap shadow-lg"
                aria-label="Subscribe to newsletter"
              >
                Subscribe
              </button>
            </form>
          </div>
        </section>
      )}
    </main>
  );
}