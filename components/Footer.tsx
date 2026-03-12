import Link from 'next/link';
import { Twitter, Facebook, Instagram, Linkedin, Github, Pen, Mail, Phone, MapPin, ArrowRight } from 'lucide-react';

export default function Footer() {
  const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'Blog', href: '/blogs' },
    { label: 'Categories', href: '/categories' },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' },
  ];

  const legalLinks = [
    { label: 'Privacy Policy', href: '/privacy' },
    { label: 'Terms of Service', href: '/terms' },
    { label: 'Cookie Policy', href: '/cookies' },
    { label: 'Sitemap', href: '/sitemap' },
  ];

  const socialLinks = [
    { icon: Twitter, label: 'Twitter', href: 'https://twitter.com' },
    { icon: Facebook, label: 'Facebook', href: 'https://facebook.com' },
    { icon: Instagram, label: 'Instagram', href: 'https://instagram.com' },
    { icon: Linkedin, label: 'LinkedIn', href: 'https://linkedin.com' },
    { icon: Github, label: 'GitHub', href: 'https://github.com' },
  ];

  return (
    <footer
      className="bg-gray-950 text-gray-300"
      style={{ fontFamily: 'Inter, sans-serif' }}
      aria-label="Site footer"
    >
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">

          {/* Column 1 — Brand Info */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/" className="inline-flex items-center gap-2 group mb-4">
              <div
                className="w-9 h-9 rounded-lg flex items-center justify-center transition-transform group-hover:scale-105"
                style={{ backgroundColor: '#06b6d4' }}
              >
                <Pen className="w-4 h-4 text-white" />
              </div>
              <span className="text-2xl font-bold text-white tracking-tight">
                Blog<span style={{ color: '#06b6d4' }}>ger</span>
              </span>
            </Link>
            <p className="text-sm text-gray-400 leading-relaxed mb-6">
              Blogger is your go-to platform for insightful articles, expert opinions, and the latest trends across technology, culture, and beyond. Discover stories that matter.
            </p>
            {/* Social Icons */}
            <div className="flex items-center gap-3" aria-label="Social media links">
              {socialLinks.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 rounded-lg bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-cyan-500 hover:text-white transition-all duration-200 hover:-translate-y-0.5"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Column 2 — Quick Links */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-5">
              Quick Links
            </h3>
            <ul className="space-y-3" role="list">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="inline-flex items-center gap-1.5 text-sm text-gray-400 hover:text-cyan-400 transition-colors duration-200 group"
                  >
                    <ArrowRight className="w-3.5 h-3.5 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200" style={{ color: '#06b6d4' }} />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-5 mt-8">
              Legal
            </h3>
            <ul className="space-y-3" role="list">
              {legalLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="inline-flex items-center gap-1.5 text-sm text-gray-400 hover:text-cyan-400 transition-colors duration-200 group"
                  >
                    <ArrowRight className="w-3.5 h-3.5 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200" style={{ color: '#06b6d4' }} />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 — Contact Info */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-5">
              Contact Us
            </h3>
            <ul className="space-y-4" role="list">
              <li>
                <a
                  href="mailto:hello@blogger.com"
                  className="flex items-start gap-3 text-sm text-gray-400 hover:text-cyan-400 transition-colors duration-200 group"
                  aria-label="Email us"
                >
                  <span className="mt-0.5 flex-shrink-0 w-8 h-8 rounded-lg bg-gray-800 flex items-center justify-center group-hover:bg-cyan-500/20 transition-colors duration-200">
                    <Mail className="w-4 h-4" style={{ color: '#06b6d4' }} />
                  </span>
                  <span>hello@blogger.com</span>
                </a>
              </li>
              <li>
                <a
                  href="tel:+11234567890"
                  className="flex items-start gap-3 text-sm text-gray-400 hover:text-cyan-400 transition-colors duration-200 group"
                  aria-label="Call us"
                >
                  <span className="mt-0.5 flex-shrink-0 w-8 h-8 rounded-lg bg-gray-800 flex items-center justify-center group-hover:bg-cyan-500/20 transition-colors duration-200">
                    <Phone className="w-4 h-4" style={{ color: '#06b6d4' }} />
                  </span>
                  <span>+1 (123) 456-7890</span>
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3 text-sm text-gray-400">
                  <span className="mt-0.5 flex-shrink-0 w-8 h-8 rounded-lg bg-gray-800 flex items-center justify-center">
                    <MapPin className="w-4 h-4" style={{ color: '#06b6d4' }} />
                  </span>
                  <span>123 Content Street,<br />San Francisco, CA 94105<br />United States</span>
                </div>
              </li>
            </ul>
          </div>

          {/* Column 4 — Newsletter */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-5">
              Newsletter
            </h3>
            <p className="text-sm text-gray-400 leading-relaxed mb-5">
              Subscribe to our newsletter and get the latest articles delivered straight to your inbox. No spam, ever.
            </p>
            <form
              onSubmit={(e) => e.preventDefault()}
              aria-label="Newsletter subscription"
              className="flex flex-col gap-3"
            >
              <label htmlFor="footer-email" className="sr-only">
                Email address
              </label>
              <input
                id="footer-email"
                type="email"
                placeholder="Enter your email"
                required
                className="w-full px-4 py-2.5 bg-gray-800 border border-gray-700 rounded-lg text-sm text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:border-transparent transition-all"
                aria-label="Email address for newsletter"
              />
              <button
                type="submit"
                className="w-full px-4 py-2.5 rounded-lg text-sm font-semibold text-white transition-all duration-200 hover:opacity-90 hover:shadow-lg hover:shadow-cyan-500/20"
                style={{ backgroundColor: '#06b6d4' }}
              >
                Subscribe
              </button>
            </form>
            <p className="mt-3 text-xs text-gray-500">
              By subscribing, you agree to our{' '}
              <Link href="/privacy" className="underline hover:text-cyan-400 transition-colors">
                Privacy Policy
              </Link>
              .
            </p>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-gray-500 text-center sm:text-left">
              &copy; {new Date().getFullYear()}{' '}
              <span className="text-gray-400 font-medium">Blogger</span>. All rights reserved.
            </p>
            <p className="text-sm text-gray-600 text-center sm:text-right">
              Crafted with{' '}
              <span style={{ color: '#06b6d4' }} aria-label="love">♥</span>{' '}
              for curious minds
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}