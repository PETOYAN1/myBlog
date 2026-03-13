import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center bg-white dark:bg-black px-4 transition-colors duration-500">
      <div className="max-w-md w-full text-center space-y-8 animate-in fade-in zoom-in duration-700">
        {/* Animated 404 Visual */}
        <div className="relative flex justify-center">
          <h1 className="text-9xl font-black text-gray-100 dark:text-gray-900 select-none transition-colors duration-500">404</h1>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="p-6 bg-blue-50 dark:bg-blue-900/30 rounded-3xl text-blue-600 dark:text-blue-400 shadow-2xl shadow-blue-100 dark:shadow-blue-900/20 rotate-12 animate-bounce transition-colors duration-500">
              <svg className="h-20 w-20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white tracking-tight sm:text-5xl transition-colors duration-500">
            Page Not Found
          </h2>
          <p className="text-xl text-gray-500 dark:text-gray-400 max-w-xs mx-auto transition-colors duration-500">
            Sorry, we couldn't find the page you're looking for. It might have been moved or deleted.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
          <Link
            href="/"
            className="rounded-2xl bg-blue-600 px-10 py-4 text-lg font-bold text-white shadow-xl shadow-blue-200 dark:shadow-blue-900/20 hover:bg-blue-500 transition-all hover:scale-105 active:scale-95 flex items-center justify-center space-x-2"
          >
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
            <span>Back to Home</span>
          </Link>
          <Link
            href="/blog"
            className="rounded-2xl bg-gray-100 dark:bg-gray-800 px-10 py-4 text-lg font-bold text-gray-900 dark:text-gray-100 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all flex items-center justify-center"
          >
            Browse Blog
          </Link>
        </div>

        <div className="pt-8 border-t border-gray-50 dark:border-gray-800 transition-colors duration-500">
          <p className="text-sm text-gray-400 dark:text-gray-500 font-medium italic transition-colors duration-500">
            "Not all those who wander are lost... but this page definitely is."
          </p>
        </div>
      </div>
    </div>
  );
}
