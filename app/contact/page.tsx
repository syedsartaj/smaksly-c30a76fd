'use client';

import { useState } from 'react';
import { Mail, Phone, MapPin, Send, Clock, MessageSquare, CheckCircle } from 'lucide-react';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

export default function ContactPage() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = (): boolean => {
    const newErrors: FormErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    if (!formData.subject.trim()) newErrors.subject = 'Subject is required';
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email Us',
      detail: 'hello@blogger.com',
      sub: 'We reply within 24 hours',
    },
    {
      icon: Phone,
      title: 'Call Us',
      detail: '+1 (555) 123-4567',
      sub: 'Mon–Fri, 9am–6pm EST',
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      detail: '123 Blog Street, NY 10001',
      sub: 'New York, USA',
    },
    {
      icon: Clock,
      title: 'Working Hours',
      detail: 'Mon – Fri: 9am – 6pm',
      sub: 'Weekend: 10am – 3pm',
    },
  ];

  const faqs = [
    {
      q: 'How can I submit a guest post?',
      a: 'You can submit your guest post pitch via the contact form above, selecting "Guest Post" as the subject. Our editorial team reviews all submissions within 5–7 business days.',
    },
    {
      q: 'Can I advertise on blogger?',
      a: 'Absolutely! We offer various advertising and sponsorship packages. Reach out to us with your requirements and we will send you our media kit.',
    },
    {
      q: 'How do I report a technical issue?',
      a: 'Please use the contact form and select "Technical Support" as your subject. Include as much detail as possible, such as the page URL and a description of the issue.',
    },
    {
      q: 'Do you offer content partnerships?',
      a: 'Yes, we are always open to meaningful content collaborations. Drop us a message explaining your idea and we will get back to you shortly.',
    },
  ];

  return (
    <main className="min-h-screen bg-gray-50 font-[Inter,sans-serif]">
      {/* Hero Section */}
      <section
        className="relative overflow-hidden py-20 md:py-28"
        style={{ background: 'linear-gradient(135deg, #06b6d4 0%, #0891b2 50%, #0e7490 100%)' }}
      >
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-72 h-72 rounded-full bg-white blur-3xl" />
          <div className="absolute bottom-0 right-10 w-96 h-96 rounded-full bg-white blur-3xl" />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
            <MessageSquare className="w-4 h-4" />
            Get In Touch
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white mb-6 leading-tight">
            We'd Love to
            <span className="block text-white/80">Hear From You</span>
          </h1>
          <p className="text-lg sm:text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
            Whether you have a question, a collaboration idea, or just want to say hello — our team is here and ready to respond.
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 -mt-12 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {contactInfo.map(({ icon: Icon, title, detail, sub }) => (
            <div
              key={title}
              className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center text-center hover:shadow-xl transition-shadow duration-300 border border-gray-100"
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                style={{ backgroundColor: '#06b6d420' }}
              >
                <Icon className="w-6 h-6" style={{ color: '#06b6d4' }} />
              </div>
              <h3 className="font-semibold text-gray-800 text-sm mb-1">{title}</h3>
              <p className="text-gray-900 font-medium text-sm mb-1">{detail}</p>
              <p className="text-gray-400 text-xs">{sub}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Main Content: Form + Sidebar */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-3xl shadow-lg p-8 md:p-10 border border-gray-100">
              <div className="mb-8">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">Send Us a Message</h2>
                <p className="text-gray-500 text-sm">Fill out the form below and we'll get back to you as soon as possible.</p>
              </div>

              {isSubmitted ? (
                <div className="flex flex-col items-center justify-center py-16 text-center">
                  <div
                    className="w-20 h-20 rounded-full flex items-center justify-center mb-6"
                    style={{ backgroundColor: '#06b6d420' }}
                  >
                    <CheckCircle className="w-10 h-10" style={{ color: '#06b6d4' }} />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">Message Sent!</h3>
                  <p className="text-gray-500 max-w-sm leading-relaxed mb-6">
                    Thanks for reaching out! We've received your message and will get back to you within 24 hours.
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="px-6 py-2.5 rounded-xl text-white font-semibold text-sm transition-opacity hover:opacity-90"
                    style={{ backgroundColor: '#06b6d4' }}
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Name */}
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        aria-describedby={errors.name ? 'name-error' : undefined}
                        className={`w-full px-4 py-3 rounded-xl border text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 transition-colors ${
                          errors.name
                            ? 'border-red-400 focus:ring-red-200'
                            : 'border-gray-200 focus:ring-cyan-200 focus:border-cyan-400'
                        }`}
                      />
                      {errors.name && (
                        <p id="name-error" className="mt-1.5 text-xs text-red-500">
                          {errors.name}
                        </p>
                      )}
                    </div>

                    {/* Email */}
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        aria-describedby={errors.email ? 'email-error' : undefined}
                        className={`w-full px-4 py-3 rounded-xl border text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 transition-colors ${
                          errors.email
                            ? 'border-red-400 focus:ring-red-200'
                            : 'border-gray-200 focus:ring-cyan-200 focus:border-cyan-400'
                        }`}
                      />
                      {errors.email && (
                        <p id="email-error" className="mt-1.5 text-xs text-red-500">
                          {errors.email}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Subject */}
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                      Subject <span className="text-red-500">*</span>
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      aria-describedby={errors.subject ? 'subject-error' : undefined}
                      className={`w-full px-4 py-3 rounded-xl border text-sm text-gray-900 focus:outline-none focus:ring-2 transition-colors appearance-none bg-white ${
                        errors.subject
                          ? 'border-red-400 focus:ring-red-200'
                          : 'border-gray-200 focus:ring-cyan-200 focus:border-cyan-400'
                      } ${formData.subject === '' ? 'text-gray-400' : 'text-gray-900'}`}
                    >
                      <option value="" disabled>
                        Select a topic...
                      </option>
                      <option value="General Inquiry">General Inquiry</option>
                      <option value="Guest Post">Guest Post Submission</option>
                      <option value="Advertising">Advertising & Sponsorship</option>
                      <option value="Technical Support">Technical Support</option>
                      <option value="Content Partnership">Content Partnership</option>
                      <option value="Other">Other</option>
                    </select>
                    {errors.subject && (
                      <p id="subject-error" className="mt-1.5 text-xs text-red-500">
                        {errors.subject}
                      </p>
                    )}
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Message <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us what's on your mind..."
                      aria-describedby={errors.message ? 'message-error' : undefined}
                      className={`w-full px-4 py-3 rounded-xl border text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 transition-colors resize-none ${
                        errors.message
                          ? 'border-red-400 focus:ring-red-200'
                          : 'border-gray-200 focus:ring-cyan-200 focus:border-cyan-400'
                      }`}
                    />
                    <div className="flex items-center justify-between mt-1.5">
                      {errors.message ? (
                        <p id="message-error" className="text-xs text-red-500">
                          {errors.message}
                        </p>
                      ) : (
                        <span />
                      )}
                      <span className="text-xs text-gray-400 ml-auto">{formData.message.length} chars</span>
                    </div>
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    aria-label="Send message"
                    className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-white font-semibold text-sm transition-all duration-200 hover:opacity-90 active:scale-95 disabled:opacity-70 disabled:cursor-not-allowed"
                    style={{ backgroundColor: '#06b6d4' }}
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
                        </svg>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Sidebar */}
          <aside className="space-y-6">
            {/* Quick Note */}
            <div
              className="rounded-2xl p-6 text-white"
              style={{ background: 'linear-gradient(135deg, #06b6d4, #0891b2)' }}
            >
              <h3 className="font-bold text-lg mb-2">Quick Response</h3>
              <p className="text-white/80 text-sm leading-relaxed">
                Our team is dedicated to providing you with a swift and helpful response. Most inquiries are answered within one business day.
              </p>
            </div>

            {/* Social Links */}
            <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
              <h3 className="font-bold text-gray-900 mb-4">Follow Us</h3>
              <div className="space-y-3">
                {[
                  { label: 'Twitter / X', handle: '@blogger' },
                  { label: 'LinkedIn', handle: 'blogger-official' },
                  { label: 'Instagram', handle: '@blogger.io' },
                ].map(({ label, handle }) => (
                  <div key={label} className="flex items-center justify-between group cursor-pointer">
                    <span className="text-sm text-gray-600">{label}</span>
                    <span
                      className="text-sm font-medium transition-colors group-hover:opacity-80"
                      style={{ color: '#06b6d4' }}
                    >
                      {handle}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Newsletter */}
            <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
              <h3 className="font-bold text-gray-900 mb-2">Stay Updated</h3>
              <p className="text-sm text-gray-500 mb-4">Subscribe to our newsletter for the latest posts and updates.</p>
              <div className="flex flex-col gap-2">
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="w-full px-3 py-2.5 text-sm rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-cyan-200 focus:border-cyan-400 placeholder-gray-400"
                />
                <button
                  className="w-full py-2.5 rounded-lg text-white text-sm font-semibold transition-opacity hover:opacity-90"
                  style={{ backgroundColor: '#06b6d4' }}
                >
                  Subscribe
                </button>
              </div>
            </div>
          </aside>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-10">
        <div className="bg-white rounded-3xl shadow-lg overflow-hidden border border-gray-100">
          <div className="relative w-full h-56 sm:h-72 bg-gradient-to-br from-cyan-50 to-sky-100 flex items-center justify-center">
            <div className="text-center">
              <MapPin className="w-12 h-12 mx-auto mb-3" style={{ color: '#06b6d4' }} />
              <p className="font-semibold text-gray-700">123 Blog Street, New York, NY 10001</p>
              <p className="text-sm text-gray-400 mt-1">Interactive map coming soon</p>
            </div>
            {/* Decorative grid */}
            <div className="absolute inset-0 opacity-10"
              style={{ backgroundImage: 'repeating-linear-gradient(0deg, #06b6d4 0, #06b6d4 1px, transparent 1px, transparent 40px), repeating-linear-gradient(90deg, #06b6d4 0, #06b6d4 1px, transparent 1px, transparent 40px)' }}
            />
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">Frequently Asked Questions</h2>
          <p className="text-gray-500 text-sm max-w-xl mx-auto">
            Find quick answers to common questions below. Can't find what you're looking for? Send us a message!
          </p>
        </div>
        <div className="space-y-4">
          {faqs.map(({ q, a }) => (
            <FaqItem key={q} question={q} answer={a} />
          ))}
        </div>
      </section>
    </main>
  );
}

function FaqItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
      <button
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="w-full flex items-center justify-between px-6 py-4 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
      >
        <span className="font-semibold text-gray-800 text-sm sm:text-base">{question}</span>
        <span
          className={`ml-4 flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-white transition-transform duration-300 ${open ? 'rotate-45' : 'rotate-0'}`}
          style={{ backgroundColor: '#06b6d4' }}
        >
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <path d="M6 1v10M1 6h10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </span>
      </button>
      {open && (
        <div className="px-6 pb-4">
          <p className="text-gray-500 text-sm leading-relaxed">{answer}</p>
        </div>
      )}
    </div>
  );
}