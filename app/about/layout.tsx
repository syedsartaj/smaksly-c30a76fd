import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Blogger | Our Story & Mission',
  description: 'Learn about Blogger\'s mission to empower writers and creators. Discover our platform, team, and the community behind our blogging platform.',
};

export default function PageLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
