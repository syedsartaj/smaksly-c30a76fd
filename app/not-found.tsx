import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center p-8">
      <div className="text-center max-w-md">
        <h1 className="text-6xl font-bold text-gray-300 mb-4">404</h1>
        <h2 className="text-2xl font-bold mb-4">Page Not Found</h2>
        <p className="text-gray-600 mb-6">The page you are looking for does not exist.</p>
        <Link href="/" className="px-6 py-2 bg-primary text-white rounded-lg hover:opacity-90 transition-opacity inline-block">
          Go Home
        </Link>
      </div>
    </main>
  );
}
