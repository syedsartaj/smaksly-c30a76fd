'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  Search,
  BookOpen,
  TrendingUp,
  Lightbulb,
  Globe,
  Code,
  Heart,
  Camera,
  Music,
  Utensils,
  ArrowRight,
  Tag,
  Grid3X3,
  Star,
} from 'lucide-react';

const allCategories = [
  {
    slug: 'technology',
    name: 'Technology',
    description:
      'Explore the latest in tech innovations, software development, AI breakthroughs, and digital transformation shaping our world.',
    postCount: 48,
    icon: Code,
    color: 'from-blue-500 to-cyan-500',
    bgLight: 'bg-blue-50',
    textAccent: 'text-blue-600',
    borderAccent: 'border-blue-200',
    featured: true,
    image: '/placeholder.svg',
  },
  {
    slug: 'lifestyle',
    name: 'Lifestyle',
    description:
      'Tips, guides, and inspiration for living your best life — from productivity hacks to wellness routines and personal growth.',
    postCount: 35,
    icon: Heart,
    color: 'from-pink-500 to-rose-500',
    bgLight: 'bg-pink-50',
    textAccent: 'text-pink-600',
    borderAccent: 'border-pink-200',
    featured: true,
    image: '/placeholder.svg',
  },
  {
    slug: 'travel',
    name: 'Travel',
    description:
      'Journey across continents with destination guides, travel tips, hidden gems, and cultural discoveries from around the globe.',
    postCount: 29,
    icon: Globe,
    color: 'from-emerald-500 to-teal-500',
    bgLight: 'bg-emerald-50',
    textAccent: 'text-emerald-600',
    borderAccent: 'border-emerald-200',
    featured: true,
    image: '/placeholder.svg',
  },
  {
    slug: 'food',
    name: 'Food & Recipes',
    description:
      'Delicious recipes, restaurant reviews, cooking techniques, and culinary adventures for every taste and skill level.',
    postCount: 42,
    icon: Utensils,
    color: 'from-orange-500 to-amber-500',
    bgLight: 'bg-orange-50',
    textAccent: 'text-orange-600',
    borderAccent: 'border-orange-200',
    featured: true,
    image: '/placeholder.svg',
  },
  {
    slug: 'photography',
    name: 'Photography',
    description:
      'Master the art of photography with tutorials, gear reviews, composition tips, and creative inspiration for all levels.',
    postCount: 22,
    icon: Camera,
    color: 'from-violet-500 to-purple-500',
    bgLight: 'bg-violet-50',
    textAccent: 'text-violet-600',
    borderAccent: 'border-violet-200',
    featured: false,
    image: '/placeholder.svg',
  },
  {
    slug: 'music',
    name: 'Music',
    description:
      'Dive into music reviews, artist spotlights, industry news, and the cultural impact of sound across genres and generations.',
    postCount: 18,
    icon: Music,
    color: 'from-indigo-500 to-blue-500',
    bgLight: 'bg-indigo-50',
    textAccent: 'text-indigo-600',
    borderAccent: 'border-indigo-200',
    featured: false,
    image: '/placeholder.svg',
  },
  {
    slug: 'business',
    name: 'Business',
    description:
      'Actionable insights on entrepreneurship, startups, marketing strategies, leadership, and building a successful career.',
    postCount: 31,
    icon: TrendingUp,
    color: 'from-cyan-500 to-sky-500',
    bgLight: 'bg-cyan-50',
    textAccent: 'text-cyan-600',
    borderAccent: 'border-cyan-200',
    featured: false,
    image: '/placeholder.svg',
  },
  {
    slug: 'ideas',
    name: 'Ideas & Opinion',
    description:
      'Thought-provoking essays, perspectives, and commentary on culture, society, and the ideas shaping our collective future.',
    postCount: 15,
    icon: Lightbulb,
    color: 'from-yellow-500 to-orange-500',
    bgLight: 'bg-yellow-50',
    textAccent: 'text-yellow-600',
    borderAccent: 'border-yellow-200',
    featured: false,
    image: '/placeholder.svg',
  },
  {
    slug: 'reading',
    name: 'Books & Reading',
    description:
      'Book reviews, reading lists, author interviews, and literary analysis for passionate readers and lifelong learners.',
    postCount: 20,
    icon: BookOpen,
    color: 'from-teal-500 to-green-500',
    bgLight: 'bg-teal-50',
    textAccent: 'text-teal-600',
    borderAccent: 'border-teal-200',
    featured: false,
    image: '/placeholder.svg',
  },
];

const featuredCategories = allCategories.filter((c) => c.featured);

export default function CategoriesPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeFilter, setActiveFilter] = useState('all');

  const totalPosts = allCategories.reduce((sum, c) => sum + c.postCount, 0);

  const filteredCategories = allCategories.filter((category) => {
    const matchesSearch =
      category.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      category.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesFilter =
      activeFilter === 'all' ||
      (activeFilter === 'featured' && category.featured);
    return matchesSearch && matchesFilter;
  });

  return (
    <main className="bg-white font-sans" style={{ fontFamily: 'Inter, sans-serif' }}>

      {/* Categories Header */}
      <section
        aria-label="Categories page header"
        className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-20 md:py-32 overflow-hidden"
      >
        {/* Background decoration */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-cyan-500 opacity-10 blur-3xl" />
          <div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-cyan-400 opacity-10 blur-3xl" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-cyan-500 opacity-5 blur-3xl" />
        </div>

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm font-medium px-4 py-2 rounded-full mb-6">
            <Tag className="w-4 h-4" />
            Browse All Categories
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-tight tracking-tight">
            Explore Content{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-sky-400">
              By Category
            </span>
          </h1>

          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-10 leading-relaxed">
            Discover {totalPosts}+ articles organized across {allCategories.length} curated
            categories. Find exactly what interests you and dive deep into the topics you love.
          </p>

          {/* Stats Row */}
          <div className="flex flex-wrap justify-center gap-8 mb-12">
            {[
              { label: 'Total Articles', value: `${totalPosts}+` },
              { label: 'Categories', value: allCategories.length },
              { label: 'New Weekly', value: '12+' },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl font-bold text-white">{stat.value}</div>
                <div className="text-gray-400 text-sm mt-1">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Search Bar */}
          <div className="max-w-lg mx-auto relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search categories..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              aria-label="Search categories"
              className="w-full pl-12 pr-4 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all text-base"
            />
          </div>
        </div>
      </section>

      {/* Featured Categories */}
      <section
        aria-label="Featured categories"
        className="py-16 md:py-24 bg-gray-50"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-12">
            <Star className="w-6 h-6 text-cyan-500 fill-cyan-500" />
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Featured Categories</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredCategories.map((category) => {
              const Icon = category.icon;
              return (
                <Link
                  key={category.slug}
                  href={`/categories`}
                  aria-label={`Browse ${category.name} category with ${category.postCount} posts`}
                  className="group relative overflow-hidden rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  {/* Gradient Header */}
                  <div className={`h-32 bg-gradient-to-br ${category.color} relative overflow-hidden`}>
                    <Image
                      src="/placeholder.svg"
                      width={400}
                      height={128}
                      alt={`Visual representation of the ${category.name} category`}
                      className="w-full h-full object-cover opacity-20 mix-blend-overlay"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Icon className="w-12 h-12 text-white/90" strokeWidth={1.5} />
                    </div>
                    <div className="absolute top-3 right-3 bg-white/20 backdrop-blur-sm text-white text-xs font-semibold px-2 py-1 rounded-full">
                      {category.postCount} posts
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-5">
                    <h3 className="font-bold text-gray-900 text-lg mb-2 group-hover:text-cyan-600 transition-colors">
                      {category.name}
                    </h3>
                    <p className="text-gray-500 text-sm leading-relaxed line-clamp-2">
                      {category.description}
                    </p>
                    <div className="mt-4 flex items-center gap-1 text-cyan-500 text-sm font-medium">
                      Explore
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Category Grid */}
      <section
        aria-label="All blog categories grid"
        className="py-16 md:py-24 bg-white"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header + Filters */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-12">
            <div className="flex items-center gap-3">
              <Grid3X3 className="w-6 h-6 text-cyan-500" />
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">All Categories</h2>
            </div>

            {/* Filter Tabs */}
            <div className="flex items-center bg-gray-100 rounded-xl p-1 gap-1">
              {['all', 'featured'].map((filter) => (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  aria-label={`Filter by ${filter} categories`}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all capitalize ${
                    activeFilter === filter
                      ? 'bg-white text-gray-900 shadow-sm'
                      : 'text-gray-500 hover:text-gray-700'
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>

          {filteredCategories.length === 0 ? (
            <div className="text-center py-20">
              <Tag className="w-12 h-12 text-gray-300 mx-auto mb-4" />
              <p className="text-gray-500 text-lg">No categories found matching "{searchQuery}"</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredCategories.map((category) => {
                const Icon = category.icon;
                return (
                  <Link
                    key={category.slug}
                    href={`/blogs`}
                    aria-label={`View all ${category.name} posts`}
                    className={`group flex items-start gap-4 p-6 rounded-2xl border ${category.borderAccent} ${category.bgLight} hover:shadow-md transition-all duration-300 hover:-translate-y-0.5`}
                  >
                    <div className={`flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center shadow-sm`}>
                      <Icon className="w-6 h-6 text-white" strokeWidth={1.75} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-2 mb-1">
                        <h3 className={`font-bold text-gray-900 text-base group-hover:${category.textAccent} transition-colors`}>
                          {category.name}
                        </h3>
                        <span className={`flex-shrink-0 text-xs font-semibold ${category.textAccent} bg-white px-2 py-0.5 rounded-full border ${category.borderAccent}`}>
                          {category.postCount}
                        </span>
                      </div>
                      <p className="text-gray-500 text-sm leading-relaxed line-clamp-2">
                        {category.description}
                      </p>
                    </div>
                  </Link>
                );
              })}
            </div>
          )}
        </div>
      </section>

      {/* Category Descriptions */}
      <section
        aria-label="Detailed category descriptions"
        className="py-16 md:py-24 bg-gray-50"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What You'll Find in Each Category
            </h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
              Every category is thoughtfully curated with in-depth articles, expert insights, and
              fresh perspectives published regularly.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {allCategories.slice(0, 6).map((category) => {
              const Icon = category.icon;
              return (
                <article
                  key={category.slug}
                  className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center`}>
                      <Icon className="w-5 h-5 text-white" strokeWidth={2} />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">{category.name}</h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed mb-5">{category.description}</p>
                  <div className="flex items-center justify-between">
                    <span className={`text-sm font-medium ${category.textAccent}`}>
                      {category.postCount} published articles
                    </span>
                    <Link
                      href="/blogs"
                      aria-label={`Read ${category.name} articles`}
                      className={`inline-flex items-center gap-1 text-sm font-semibold ${category.textAccent} hover:gap-2 transition-all`}
                    >
                      Read articles
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Post Count */}
      <section
        aria-label="Post counts and statistics"
        className="py-16 md:py-24 bg-white"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Articles at a Glance
            </h2>
            <p className="text-gray-500 text-lg">
              A breakdown of content distribution across all categories.
            </p>
          </div>

          <div className="space-y-4">
            {[...allCategories]
              .sort((a, b) => b.postCount - a.postCount)
              .map((category) => {
                const Icon = category.icon;
                const percentage = Math.round((category.postCount / totalPosts) * 100);
                return (
                  <div key={category.slug} className="flex items-center gap-4 group">
                    <div className={`flex-shrink-0 w-9 h-9 rounded-lg bg-gradient-to-br ${category.color} flex items-center justify-center`}>
                      <Icon className="w-4 h-4 text-white" strokeWidth={2} />
                    </div>
                    <div className="flex-shrink-0 w-28">
                      <span className="text-sm font-semibold text-gray-700">{category.name}</span>
                    </div>
                    <div className="flex-1 bg-gray-100 rounded-full h-3 overflow-hidden">
                      <div
                        className={`h-full rounded-full bg-gradient-to-r ${category.color} transition-all duration-700`}
                        style={{ width: `${percentage}%` }}
                        role="progressbar"
                        aria-valuenow={percentage}
                        aria-valuemin={0}
                        aria-valuemax={100}
                        aria-label={`${category.name} makes up ${percentage}% of all articles`}
                      />
                    </div>
                    <div className="flex-shrink-0 flex items-center gap-2 min-w-[80px] justify-end">
                      <span className="text-sm font-bold text-gray-800">{category.postCount}</span>
                      <span className="text-xs text-gray-400">({percentage}%)</span>
                    </div>
                  </div>
                );
              })}
          </div>

          <div className="mt-10 text-center">
            <p className="text-gray-500 text-sm">
              Total of <span className="font-bold text-gray-800">{totalPosts} articles</span> across all categories and growing every week.
            </p>
          </div>
        </div>
      </section>

      {/* Browse All */}
      <section
        aria-label="Browse all posts call to action"
        className="py-16 md:py-24 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden"
      >
        {/* Background decoration */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-cyan-500 opacity-10 blur-3xl" />
          <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-cyan-400 opacity-10 blur-3xl" />
        </div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm font-medium px-4 py-2 rounded-full mb-6">
            <BookOpen className="w-4 h-4" />
            Start Reading Today
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Ready to Explore?{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-sky-400">
              Browse All Posts
            </span>
          </h2>

          <p className="text-gray-300 text-lg md:text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
            Dive into our full collection of {totalPosts}+ articles. Filter by category, search by
            topic, and discover content that truly speaks to you.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/blogs"
              aria-label="Browse all blog posts"
              className="inline-flex items-center gap-2 bg-cyan-500 hover:bg-cyan-400 text-white font-semibold px-8 py-4 rounded-2xl transition-all duration-200 hover:shadow-lg hover:shadow-cyan-500/25 hover:-translate-y-0.5 text-base"
            >
              Browse All Posts
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="/about"
              aria-label="Learn more about our blog"
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold px-8 py-4 rounded-2xl transition-all duration-200 border border-white/20 text-base"
            >
              About Our Blog
            </Link>
          </div>

          {/* Category quick links */}
          <div className="mt-14 flex flex-wrap justify-center gap-3">
            {allCategories.map((category) => (
              <Link
                key={category.slug}
                href="/blogs"
                aria-label={`Quick link to ${category.name} category`}
                className="inline-flex items-center gap-1.5 bg-white/10 hover:bg-cyan-500/20 border border-white/10 hover:border-cyan-500/30 text-gray-300 hover:text-cyan-300 text-sm font-medium px-4 py-2 rounded-full transition-all duration-200"
              >
                <Tag className="w-3.5 h-3.5" />
                {category.name}
                <span className="text-gray-500 text-xs">({category.postCount})</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

    </main>
  );
}