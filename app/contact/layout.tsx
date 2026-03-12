import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us | Blogger Support & Inquiries',
  description: 'Get in touch with Blogger. Send us your questions, feedback, or partnership inquiries. We respond within 24 hours.',
};

export default function PageLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
