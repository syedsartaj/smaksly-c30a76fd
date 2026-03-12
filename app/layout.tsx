import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blogger | Create & Share Your Stories Today',
  description: 'Discover inspiring blog posts and stories. Start your blogging journey with our platform. Read articles on various topics from writers worldwide.',
};

export default function PageLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
