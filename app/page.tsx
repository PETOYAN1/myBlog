import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const features = [
    { title: "Fast Performance", desc: "Built with Next.js 15 for blazing fast speed.", icon: "⚡" },
    { title: "Modern Design", desc: "Beautifully crafted with Tailwind CSS.", icon: "💎" },
    { title: "SEO Ready", desc: "Optimized for search engines out of the box.", icon: "🔍" }
  ];

  return (
    <div className="bg-white dark:bg-black transition-colors duration-500">
      {/* Hero Section */}
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56 text-center">
          <h1 className="text-5xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-7xl transition-colors duration-500">
            Create something <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">extraordinary</span>
          </h1>
          <p className="mt-8 text-lg font-medium text-gray-500 dark:text-gray-400 sm:text-xl/8 transition-colors duration-500">
            A premium blog template for modern developers. Share your journey, insights, and expertise with the world in style.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link
              href="/blog"
              className="rounded-2xl bg-blue-600 px-8 py-4 text-lg font-bold text-white shadow-xl shadow-blue-200 dark:shadow-blue-900/20 hover:bg-blue-500 transition-all hover:scale-105 active:scale-95"
            >
              Get Started
            </Link>
            <Link href="/about" className="text-lg font-bold leading-6 text-gray-900 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-500">
              Learn more <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-24 sm:py-32 bg-gray-50 dark:bg-gray-900/50 transition-colors duration-500">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-bold leading-7 text-blue-600 dark:text-blue-400 uppercase tracking-widest transition-colors duration-500">Why Choose Us</h2>
            <p className="mt-2 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl transition-colors duration-500">
              Everything you need to build a modern blog
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
              {features.map((feature) => (
                <div key={feature.title} className="flex flex-col items-center text-center p-8 bg-white dark:bg-gray-800 rounded-3xl shadow-sm border border-gray-100 dark:border-gray-700 transition-all duration-500 hover:shadow-md">
                  <dt className="text-4xl mb-4">{feature.icon}</dt>
                  <dd className="text-xl font-bold leading-7 text-gray-900 dark:text-white mb-2 transition-colors duration-500">{feature.title}</dd>
                  <dd className="text-base leading-7 text-gray-500 dark:text-gray-400 transition-colors duration-500">{feature.desc}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
}
