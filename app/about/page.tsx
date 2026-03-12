'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Users, BookOpen, Globe, Award, ArrowRight, Heart, Lightbulb, Shield, MessageCircle, TrendingUp, Star } from 'lucide-react';

const teamMembers = [
  {
    name: 'Sarah Mitchell',
    role: 'Founder & CEO',
    bio: 'Passionate about connecting writers with readers worldwide. 10+ years in digital publishing.',
    avatar: '/placeholder.svg',
  },
  {
    name: 'James Okafor',
    role: 'Head of Product',
    bio: 'Crafting seamless experiences for bloggers and their audiences since 2015.',
    avatar: '/placeholder.svg',
  },
  {
    name: 'Priya Sharma',
    role: 'Community Lead',
    bio: 'Building vibrant communities around meaningful content and authentic storytelling.',
    avatar: '/placeholder.svg',
  },
  {
    name: 'David Chen',
    role: 'Lead Engineer',
    bio: 'Architecting scalable systems that empower creators to publish without limits.',
    avatar: '/placeholder.svg',
  },
];

const values = [
  {
    icon: Heart,
    title: 'Authenticity',
    description: 'We champion genuine voices and real stories that resonate with readers on a human level.',
  },
  {
    icon: Lightbulb,
    title: 'Innovation',
    description: 'Continuously evolving our platform to give creators the best tools to express their ideas.',
  },
  {
    icon: Shield,
    title: 'Trust & Safety',
    description: 'A safe, respectful environment where diverse perspectives can be shared freely.',
  },
  {
    icon: Globe,
    title: 'Inclusivity',
    description: 'Welcoming bloggers and readers from every background, culture, and corner of the world.',
  },
];

const features = [
  {
    icon: BookOpen,
    title: 'Rich Editor',
    description: 'A powerful, intuitive writing editor with everything you need to craft beautiful posts.',
  },
  {
    icon: TrendingUp,
    title: 'Analytics Dashboard',
    description: 'Understand your audience with in-depth insights into views, engagement, and growth.',
  },
  {
    icon: MessageCircle,
    title: 'Community Comments',
    description: 'Foster meaningful conversations with readers through threaded, moderated comments.',
  },
  {
    icon: Star,
    title: 'Content Discovery',
    description: 'Smart recommendations that connect your writing with the right readers at the right time.',
  },
];

const stats = [
  { value: '2.4M+', label: 'Active Readers' },
  { value: '180K+', label: 'Published Posts' },
  { value: '45K+', label: 'Bloggers & Writers' },
  { value: '120+', label: 'Countries Reached' },
];

export default function AboutPage() {
  return (
    <main className="font-[Inter,sans-serif] bg-white text-gray-900">

      {/* About Header */}
      <section
        aria-label="About page hero"
        className="relative bg-gradient-to-br from-gray-950 via-gray-900 to-cyan-950 text-white overflow-hidden"
      >
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[900px] rounded-full bg-cyan-400 blur-3xl" />
        </div>
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-36 text-center">
          <span className="inline-block mb-4 px-4 py-1.5 rounded-full bg-cyan-500/20 text-cyan-300 text-sm font-semibold tracking-wide uppercase border border-cyan-500/30">
            Our Story
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight tracking-tight mb-6">
            Empowering Every Voice,{' '}
            <span className="text-cyan-400">One Blog at a Time</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed mb-10">
            Blogger is a modern publishing platform built for curious minds, creative thinkers, and passionate storytellers who want to share ideas that matter.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/blogs"
              className="inline-flex items-center justify-center gap-2 bg-cyan-500 hover:bg-cyan-400 text-white font-semibold px-7 py-3.5 rounded-full transition-colors duration-200"
              aria-label="Explore all blog posts"
            >
              Explore the Blog <ArrowRight size={18} />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold px-7 py-3.5 rounded-full transition-colors duration-200"
              aria-label="Get in touch with the Blogger team"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>

      {/* Our Mission */}
      <section
        aria-label="Our mission"
        className="py-16 md:py-24 bg-white"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <span className="text-cyan-500 font-semibold text-sm uppercase tracking-widest mb-3 block">Why We Exist</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-6 leading-tight">
                Our Mission Is to Democratize Storytelling
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-5">
                We believe every person has a story worth telling. Blogger was founded on the principle that quality writing should have a home on the internet — whether you're a seasoned journalist, an amateur enthusiast, or someone sharing your first post.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                Our platform removes the technical barriers so you can focus entirely on what matters most: your ideas and your readers. From intuitive tools to a thriving community, we've built everything you need to grow your voice.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {values.map((value) => (
                  <div key={value.title} className="flex items-start gap-3 p-4 rounded-xl bg-gray-50 border border-gray-100">
                    <div className="flex-shrink-0 w-9 h-9 rounded-lg bg-cyan-100 flex items-center justify-center">
                      <value.icon size={18} className="text-cyan-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 text-sm mb-0.5">{value.title}</h3>
                      <p className="text-gray-500 text-xs leading-relaxed">{value.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/placeholder.svg"
                  width={600}
                  height={500}
                  alt="Team members collaborating at Blogger headquarters, discussing content strategy on a whiteboard"
                  className="w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-cyan-900/40 to-transparent" />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-5 border border-gray-100 max-w-[200px]">
                <p className="text-3xl font-extrabold text-cyan-500 mb-1">2019</p>
                <p className="text-gray-600 text-sm leading-snug">Founded with a mission to amplify authentic voices</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section
        aria-label="Our team members"
        className="py-16 md:py-24 bg-gray-50"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-cyan-500 font-semibold text-sm uppercase tracking-widest mb-3 block">The People Behind Blogger</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
              Meet Our Team
            </h2>
            <p className="text-gray-500 text-lg max-w-xl mx-auto">
              A diverse group of creators, engineers, and community builders united by a love for great writing and meaningful connection.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member) => (
              <article
                key={member.name}
                className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300 group"
              >
                <div className="relative overflow-hidden">
                  <Image
                    src={member.avatar}
                    width={400}
                    height={300}
                    alt={`${member.name}, ${member.role} at Blogger`}
                    className="w-full object-cover h-52 group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="p-5">
                  <h3 className="font-bold text-gray-900 text-lg mb-0.5">{member.name}</h3>
                  <p className="text-cyan-500 text-sm font-semibold mb-3">{member.role}</p>
                  <p className="text-gray-500 text-sm leading-relaxed">{member.bio}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Platform Features */}
      <section
        aria-label="Platform features and capabilities"
        className="py-16 md:py-24 bg-white"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-cyan-500 font-semibold text-sm uppercase tracking-widest mb-3 block">What We Offer</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
              Everything You Need to Publish & Grow
            </h2>
            <p className="text-gray-500 text-lg max-w-xl mx-auto">
              From drafting your first post to building a loyal readership, our platform features are designed to support every stage of your blogging journey.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="group p-7 rounded-2xl border border-gray-100 bg-gray-50 hover:bg-cyan-500 hover:border-cyan-500 transition-all duration-300 cursor-default"
              >
                <div className="w-12 h-12 rounded-xl bg-cyan-100 group-hover:bg-white/20 flex items-center justify-center mb-5 transition-colors duration-300">
                  <feature.icon size={22} className="text-cyan-600 group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="font-bold text-gray-900 group-hover:text-white text-lg mb-2 transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-gray-500 group-hover:text-cyan-100 text-sm leading-relaxed transition-colors duration-300">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link
              href="/categories"
              className="inline-flex items-center gap-2 text-cyan-600 hover:text-cyan-500 font-semibold text-base transition-colors duration-200"
              aria-label="Browse all content categories on Blogger"
            >
              Browse All Categories <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Community Stats */}
      <section
        aria-label="Blogger community statistics and impact"
        className="py-16 md:py-24 bg-gradient-to-br from-gray-900 to-cyan-900 text-white"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-cyan-300 font-semibold text-sm uppercase tracking-widest mb-3 block">Our Impact</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
              A Growing Global Community
            </h2>
            <p className="text-gray-300 text-lg max-w-xl mx-auto">
              Numbers that reflect real people discovering ideas, sharing stories, and building connections every single day.
            </p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="text-center bg-white/10 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/15 transition-colors duration-200"
              >
                <p className="text-4xl sm:text-5xl font-extrabold text-cyan-400 mb-2">{stat.value}</p>
                <p className="text-gray-300 text-sm font-medium uppercase tracking-wide">{stat.label}</p>
              </div>
            ))}
          </div>
          <div className="bg-white/10 border border-white/10 rounded-3xl p-8 md:p-12 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-4">
                Trusted by Writers Around the World
              </h3>
              <p className="text-gray-300 text-base leading-relaxed mb-6">
                From hobbyists sharing weekend recipes to thought leaders publishing industry analysis, Blogger has become the home for voices that deserve to be heard — across every continent and culture.
              </p>
              <div className="flex items-center gap-3">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <div
                      key={i}
                      className="w-9 h-9 rounded-full border-2 border-cyan-900 bg-cyan-700 overflow-hidden"
                      aria-hidden="true"
                    >
                      <Image
                        src="/placeholder.svg"
                        width={36}
                        height={36}
                        alt={`Community member ${i} profile picture`}
                        className="object-cover w-full h-full"
                      />
                    </div>
                  ))}
                </div>
                <p className="text-cyan-300 text-sm font-medium">
                  Join thousands of active contributors
                </p>
              </div>
            </div>
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/placeholder.svg"
                width={500}
                height={320}
                alt="Diverse community of bloggers collaborating and sharing content on the Blogger platform"
                className="w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section
        aria-label="Call to action — start blogging today"
        className="py-16 md:py-24 bg-white"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-cyan-100 mb-6">
            <Users size={30} className="text-cyan-600" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-5">
            Ready to Share Your Story with the World?
          </h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto mb-10 leading-relaxed">
            Join thousands of bloggers who've already found their audience on Blogger. Start reading, start writing, or simply explore what inspires you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/blogs"
              className="inline-flex items-center justify-center gap-2 bg-cyan-500 hover:bg-cyan-400 text-white font-semibold px-8 py-4 rounded-full text-base transition-colors duration-200 shadow-lg shadow-cyan-200"
              aria-label="Start reading blog posts on Blogger"
            >
              Start Reading <ArrowRight size={18} />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-gray-100 hover:bg-gray-200 text-gray-800 font-semibold px-8 py-4 rounded-full text-base transition-colors duration-200"
              aria-label="Contact the Blogger team"
            >
              Contact Us
            </Link>
          </div>
          <p className="mt-8 text-gray-400 text-sm">
            Have questions?{' '}
            <Link
              href="/contact"
              className="text-cyan-500 hover:text-cyan-400 font-medium underline underline-offset-2 transition-colors duration-200"
            >
              We'd love to hear from you.
            </Link>
          </p>
        </div>
      </section>

    </main>
  );
}