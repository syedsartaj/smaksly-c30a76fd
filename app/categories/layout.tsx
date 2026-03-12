import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog Categories | Find Your Interests - Blogger',
  description: 'Browse all blog categories on Blogger. Find articles on technology, lifestyle, business, and more. Discover stories that interest you.',
};

export default function PageLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
