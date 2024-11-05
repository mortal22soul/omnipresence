// app/not-found.tsx

import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-100 text-gray-800">
      <h1 className="text-6xl font-bold text-gray-800">404</h1>
      <p className="mt-4 text-xl text-gray-600">Page Not Found</p>
      <p className="mt-2 text-gray-500">
        Sorry, the page you are looking for does not exist.
      </p>
      <Link
        href="/"
        className="mt-6 inline-block rounded-md bg-blue-500 px-6 py-3 text-white hover:bg-blue-600 transition"
      >
        Go Back Home
      </Link>
    </div>
  );
}
