'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Search, TrendingUp, BookOpen, Clock, ArrowRight, Tag, ChevronRight, Star } from 'lucide-react'

interface BlogPost {
  id: number
  title: string
  excerpt: string
  category: string
  author: string
  authorAvatar: string
  date: string
  readTime: number
  image: string
  tags: string[]
  featured?: boolean
}

interface Category {
  name: string
  count: number
  icon: string
}

const featuredPosts: BlogPost[] = [
  {
    id: 1,
    title: 'The Future of Web Development: What to Expect in 2025',
    excerpt: 'Explore the cutting-edge technologies and frameworks that will shape the way we build web applications in the coming years.',
    category: 'Technology',
    author: 'Alex Johnson',
    authorAvatar: 'https://i.pravatar.cc/150?img=1',
    date: 'Jan 15, 2025',
    readTime: 8,
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=500&fit=crop',
    tags: ['React', 'Next.js', 'AI'],
    featured: true,
  },
  {
    id: 2,
    title: 'Mastering TypeScript: Advanced Patterns for Modern Apps',
    excerpt: 'Dive deep into TypeScript generics, utility types, and advanced patterns that will level up your development workflow.',
    category: 'Programming',
    author: 'Sarah Chen',
    authorAvatar: 'https://i.pravatar.cc/150?img=5',
    date: 'Jan 12, 2025',
    readTime: 12,
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=500&fit=crop',
    tags: ['TypeScript', 'JavaScript'],
    featured: true,
  },
  {
    id: 3,
    title: 'Design Systems at Scale: Building for the Long Run',
    excerpt: 'Learn how leading companies build and maintain design systems that grow with their products and teams.',
    category: 'Design',
    author: 'Marcus Rivera',
    authorAvatar: 'https://i.pravatar.cc/150?img=3',
    date: 'Jan 10, 2025',
    readTime: 6,
    image: 'https://images.unsplash.com/photo-1558655146-d09347e92766?w=800&h=500&fit=crop',
    tags: ['Design', 'UI/UX'],
    featured: true,
  },
]

const recentPosts: BlogPost[] = [
  {
    id: 4,
    title: 'Getting Started with AI-Powered Code Editors',
    excerpt: 'A comprehensive guide to integrating AI tools into your development environment for maximum productivity.',
    category: 'Tools',
    author: 'Emma Wilson',
    authorAvatar: 'https://i.pravatar.cc/150?img=9',
    date: 'Jan 9, 2025',
    readTime: 5,
    image: 'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=800&h=500&fit=crop',
    tags: ['AI', 'Productivity'],
  },
  {
    id: 5,
    title: 'CSS Architecture: Building Maintainable Stylesheets',
    excerpt: 'Best practices and methodologies for writing CSS that scales with your team and project requirements.',
    category: 'CSS',
    author: 'David Park',
    authorAvatar: 'https://i.pravatar.cc/150?img=7',
    date: 'Jan 8, 2025',
    readTime: 7,
    image: 'https://images.unsplash.com/photo-1507721999472-8ed4421c4af2?w=800&h=500&fit=crop',
    tags: ['CSS', 'Architecture'],
  },
  {
    id: 6,
    title: 'Node.js Performance Optimization Techniques',
    excerpt: 'Practical tips and strategies to optimize your Node.js applications for high traffic and low latency.',
    category: 'Backend',
    author: 'Lisa Martinez',
    authorAvatar: 'https://i.pravatar.cc/150?img=11',
    date: 'Jan 6, 2025',
    readTime: 10,
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=500&fit=crop',
    tags: ['Node.js', 'Performance'],
  },
  {
    id: 7,
    title: 'Building Real-Time Apps with WebSockets',
    excerpt: 'Step-by-step tutorial on implementing real-time features using WebSockets and Socket.io.',
    category: 'Programming',
    author: 'Alex Johnson',
    authorAvatar: 'https://i.pravatar.cc/150?img=1',
    date: 'Jan 4, 2025',
    readTime: 9,
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop',
    tags: ['WebSockets', 'Real-time'],
  },
]

const categories: Category[] = [
  { name: 'Technology', count: 42, icon: '💻' },
  { name: 'Programming', count: 38, icon: '⚡' },
  { name: 'Design', count: 27, icon: '🎨' },
  { name: 'Backend', count: 31, icon: '🔧' },
  { name: 'CSS', count: 19, icon: '✨' },
  { name: 'Tools', count: 23, icon: '🛠️' },
]

const trendingTags = ['React', 'Next.js', 'TypeScript', 'AI', 'Node.js', 'UI/UX', 'Performance', 'WebSockets', 'CSS', 'JavaScript']

const categoryColors: Record<string, string> = {
  Technology: 'bg-blue-100 text-blue-700',
  Programming: 'bg-purple-100 text-purple-700',
  Design: 'bg-pink-100 text-pink-700',
  Backend: 'bg-green-100 text-green-700',
  CSS: 'bg-orange-100 text-orange-700',
  Tools: 'bg-yellow-100 text-yellow-700',
}

export default function HomePage() {
  const [searchQuery, setSearchQuery] = useState('')
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setSubscribed(true)
      setEmail('')
    }
  }

  return (
    <main className="min-h-screen bg-gray-50 font-sans">

      {/* Hero Section */}
      <section
        className="relative overflow-hidden py-20 md:py-28"
        style={{ background: 'linear-gradient(135deg, #0e7490 0%, #06b6d4 50%, #22d3ee 100%)' }}
      >
        {/* Background decoration */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/5 rounded-full" />
        </div>

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white text-sm font-medium px-4 py-2 rounded-full mb-6 border border-white/30">
            <Star className="w-4 h-4 fill-white" />
            <span>Welcome to Blogger — Your Knowledge Hub</span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white leading-tight mb-6">
            Discover Ideas That{' '}
            <span className="relative inline-block">
              <span className="relative z-10">Inspire You</span>
              <span className="absolute bottom-1 left-0 w-full h-3 bg-white/30 rounded-full -z-0" />
            </span>
          </h1>
          <p className="text-lg md:text-xl text-white/85 max-w-2xl mx-auto mb-10 leading-relaxed">
            Explore in-depth articles on web development, design, technology, and more. Written by developers, for developers.
          </p>

          {/* Search Bar */}
          <div className="relative max-w-xl mx-auto">
            <div className="flex items-center bg-white rounded-2xl shadow-2xl overflow-hidden">
              <Search className="w-5 h-5 text-gray-400 ms-4 flex-shrink-0" />
              <input
                type="text"
                placeholder="Search articles, topics, authors..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="flex-1 px-4 py-4 text-gray-700 placeholder-gray-400 outline-none text-base bg-transparent"
                aria-label="Search articles"
              />
              <button
                className="m-2 px-6 py-3 text-white font-semibold rounded-xl transition-all hover:opacity-90 active:scale-95 text-sm"
                style={{ backgroundColor: '#06b6d4' }}
                aria-label="Search"
              >
                Search
              </button>
            </div>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-8 mt-12">
            {[
              { label: 'Articles Published', value: '500+' },
              { label: 'Monthly Readers', value: '50K+' },
              { label: 'Topics Covered', value: '30+' },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-3xl font-bold text-white">{stat.value}</p>
                <p className="text-white/75 text-sm mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex flex-col lg:flex-row gap-12">

          {/* Left Column - Main Posts */}
          <div className="flex-1 min-w-0">

            {/* Featured Posts */}
            <section aria-labelledby="featured-heading" className="mb-16">
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-3">
                  <div className="w-1 h-7 rounded-full" style={{ backgroundColor: '#06b6d4' }} />
                  <h2 id="featured-heading" className="text-2xl font-bold text-gray-900">Featured Posts</h2>
                </div>
                <Link
                  href="/blog"
                  className="flex items-center gap-1 text-sm font-medium transition-colors hover:opacity-80"
                  style={{ color: '#06b6d4' }}
                >
                  View all <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              {/* Hero Featured Card */}
              <article className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 mb-6 border border-gray-100">
                <Link href={`/blog/${featuredPosts[0].id}`} className="block">
                  <div className="relative h-64 md:h-80 overflow-hidden">
                    <Image
                      src={featuredPosts[0].image}
                      alt={featuredPosts[0].title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      unoptimized
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                    <div className="absolute top-4 start-4">
                      <span className={`text-xs font-semibold px-3 py-1 rounded-full ${categoryColors[featuredPosts[0].category] || 'bg-gray-100 text-gray-700'}`}>
                        {featuredPosts[0].category}
                      </span>
                    </div>
                    <div className="absolute bottom-4 start-4 end-4">
                      <h3 className="text-xl md:text-2xl font-bold text-white leading-tight mb-2">
                        {featuredPosts[0].title}
                      </h3>
                      <div className="flex items-center gap-3 text-white/80 text-sm">
                        <Image
                          src={featuredPosts[0].authorAvatar}
                          alt={featuredPosts[0].author}
                          width={24}
                          height={24}
                          className="rounded-full border border-white/50"
                          unoptimized
                        />
                        <span>{featuredPosts[0].author}</span>
                        <span>·</span>
                        <Clock className="w-3 h-3" />
                        <span>{featuredPosts[0].readTime} min read</span>
                      </div>
                    </div>
                  </div>
                </Link>
              </article>

              {/* Two Column Featured Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {featuredPosts.slice(1).map((post) => (
                  <article key={post.id} className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100">
                    <Link href={`/blog/${post.id}`} className="block">
                      <div className="relative h-44 overflow-hidden">
                        <Image
                          src={post.image}
                          alt={post.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                          unoptimized
                        />
                        <div className="absolute top-3 start-3">
                          <span className={`text-xs font-semibold px-2 py-1 rounded-full ${categoryColors[post.category] || 'bg-gray-100 text-gray-700'}`}>
                            {post.category}
                          </span>
                        </div>
                      </div>
                      <div className="p-5">
                        <h3 className="font-bold text-gray-900 text-base leading-snug mb-2 group-hover:text-cyan-600 transition-colors line-clamp-2">
                          {post.title}
                        </h3>
                        <p className="text-gray-500 text-sm line-clamp-2 mb-4">{post.excerpt}</p>
                        <div className="flex items-center gap-2 text-gray-400 text-xs">
                          <Image
                            src={post.authorAvatar}
                            alt={post.author}
                            width={20}
                            height={20}
                            className="rounded-full"
                            unoptimized
                          />
                          <span className="text-gray-600 font-medium">{post.author}</span>
                          <span>·</span>
                          <Clock className="w-3 h-3" />
                          <span>{post.readTime} min</span>
                        </div>
                      </div>
                    </Link>
                  </article>
                ))}
              </div>
            </section>

            {/* Recent Posts */}
            <section aria-labelledby="recent-heading">
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-3">
                  <div className="w-1 h-7 rounded-full" style={{ backgroundColor: '#06b6d4' }} />
                  <h2 id="recent-heading" className="text-2xl font-bold text-gray-900">Recent Posts</h2>
                </div>
                <Link
                  href="/blog"
                  className="flex items-center gap-1 text-sm font-medium transition-colors hover:opacity-80"
                  style={{ color: '#06b6d4' }}
                >
                  View all <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              <div className="space-y-5">
                {recentPosts.map((post) => (
                  <article
                    key={post.id}
                    className="group flex gap-5 bg-white rounded-2xl p-4 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100"
                  >
                    <Link href={`/blog/${post.id}`} className="flex-shrink-0">
                      <div className="relative w-24 h-24 sm:w-32 sm:h-32 rounded-xl overflow-hidden">
                        <Image
                          src={post.image}
                          alt={post.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                          unoptimized
                        />
                      </div>
                    </Link>
                    <div className="flex-1 min-w-0 py-1">
                      <div className="flex items-center gap-2 mb-2">
                        <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${categoryColors[post.category] || 'bg-gray-100 text-gray-700'}`}>
                          {post.category}
                        </span>
                        <span className="text-gray-400 text-xs">{post.date}</span>
                      </div>
                      <Link href={`/blog/${post.id}`}>
                        <h3 className="font-bold text-gray-900 text-sm sm:text-base leading-snug mb-1 group-hover:text-cyan-600 transition-colors line-clamp-2">
                          {post.title}
                        </h3>
                      </Link>
                      <p className="text-gray-500 text-xs sm:text-sm line-clamp-2 mb-3 hidden sm:block">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center gap-2 text-gray-400 text-xs">
                        <Image
                          src={post.authorAvatar}
                          alt={post.author}
                          width={18}
                          height={18}
                          className="rounded-full"
                          unoptimized
                        />
                        <span className="text-gray-600 font-medium">{post.author}</span>
                        <span>·</span>
                        <Clock className="w-3 h-3" />
                        <span>{post.readTime} min read</span>
                      </div>
                    </div>
                  </article>
                ))}
              </div>

              {/* Load More Button */}
              <div className="mt-10 text-center">
                <button
                  className="inline-flex items-center gap-2 px-8 py-3 rounded-xl font-semibold text-white transition-all hover:opacity-90 active:scale-95 shadow-md"
                  style={{ backgroundColor: '#06b6d4' }}
                >
                  Load More Articles
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </section>
          </div>

          {/* Right Sidebar */}
          <aside className="w-full lg:w-80 xl:w-96 space-y-8" aria-label="Sidebar">

            {/* Newsletter */}
            <div
              className="rounded-2xl p-6 text-white"
              style={{ background: 'linear-gradient(135deg, #0e7490 0%, #06b6d4 100%)' }}
            >
              <div className="text-3xl mb-3">📬</div>
              <h3 className="text-xl font-bold mb-2">Stay Updated</h3>
              <p className="text-white/80 text-sm mb-5 leading-relaxed">
                Get the latest articles, tutorials, and insights delivered straight to your inbox.
              </p>
              {subscribed ? (
                <div className="bg-white/20 rounded-xl p-4 text-center">
                  <p className="font-semibold text-white">🎉 You're subscribed!</p>
                  <p className="text-white/80 text-sm mt-1">Thanks for joining us.</p>
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="space-y-3">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full px-4 py-3 rounded-xl bg-white/20 placeholder-white/60 text-white border border-white/30 focus:outline-none focus:border-white text-sm backdrop-blur-sm"
                    aria-label="Email address for newsletter"
                  />
                  <button
                    type="submit"
                    className="w-full py-3 rounded-xl bg-white font-semibold text-cyan-700 hover:bg-white/90 transition-colors text-sm active:scale-95"
                  >
                    Subscribe Now
                  </button>
                </form>
              )}
            </div>

            {/* Trending */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <div className="flex items-center gap-2 mb-5">
                <TrendingUp className="w-5 h-5" style={{ color: '#06b6d4' }} />
                <h3 className="text-lg font-bold text-gray-900">Trending Now</h3>
              </div>
              <ol className="space-y-4">
                {featuredPosts.concat(recentPosts).slice(0, 5).map((post, index) => (
                  <li key={post.id}>
                    <Link
                      href={`/blog/${post.id}`}
                      className="flex items-start gap-3 group"
                    >
                      <span
                        className="flex-shrink-0 w-7 h-7 rounded-lg flex items-center justify-center text-xs font-bold text-white"
                        style={{ backgroundColor: index === 0 ? '#06b6d4' : '#e5e7eb', color: index === 0 ? 'white' : '#6b7280' }}
                      >
                        {index + 1}
                      </span>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-semibold text-gray-800 line-clamp-2 group-hover:text-cyan-600 transition-colors leading-snug">
                          {post.title}
                        </p>
                        <div className="flex items-center gap-1 mt-1 text-gray-400 text-xs">
                          <Clock className="w-3 h-3" />
                          <span>{post.readTime} min read</span>
                        </div>
                      </div>
                    </Link>
                  </li>
                ))}
              </ol>
            </div>

            {/* Categories */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <div className="flex items-center gap-2 mb-5">
                <BookOpen className="w-5 h-5" style={{ color: '#06b6d4' }} />
                <h3 className="text-lg font-bold text-gray-900">Categories</h3>
              </div>
              <ul className="space-y-2">
                {categories.map((cat) => (
                  <li key={cat.name}>
                    <Link
                      href={`/category/${cat.name.toLowerCase()}`}
                      className="flex items-center justify-between px-3 py-2.5 rounded-xl hover:bg-cyan-50 transition-colors group"
                    >
                      <div className="flex items-center gap-2">
                        <span className="text-base">{cat.icon}</span>
                        <span className="text-sm font-medium text-gray-700 group-hover:text-cyan-700 transition-colors">
                          {cat.name}
                        </span>
                      </div>
                      <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-gray-100 text-gray-500 group-hover:bg-cyan-100 group-hover:text-cyan-700 transition-colors">
                        {cat.count}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Tags */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <div className="flex items-center gap-2 mb-5">
                <Tag className="w-5 h-5" style={{ color: '#06b6d4' }} />
                <h3 className="text-lg font-bold text-gray-900">Popular Tags</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {trendingTags.map((tag) => (
                  <Link
                    key={tag}
                    href={`/tag/${tag.toLowerCase()}`}
                    className="px-3 py-1.5 text-xs font-semibold rounded-lg bg-gray-100 text-gray-600 hover:bg-cyan-100 hover:text-cyan-700 transition-colors"
                  >
                    #{tag}
                  </Link>
                ))}
              </div>
            </div>

          </aside>
        </div>
      </div>

      {/* CTA Banner */}
      <section className="py-16 bg-gray-900" aria-labelledby="cta-heading">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 id="cta-heading" className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Share Your Story?
          </h2>
          <p className="text-gray-400 text-lg mb-8 max-w-xl mx-auto">
            Join our community of writers and developers. Start writing and reach thousands of readers today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/register"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-semibold text-white transition-all hover:opacity-90 active:scale-95 shadow-lg"
              style={{ backgroundColor: '#06b6d4' }}
            >
              Start Writing Today
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="/about"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-semibold text-gray-300 border border-gray-600 hover:border-gray-400 hover:text-white transition-all"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

    </main>
  )
}