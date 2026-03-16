"use client";

import Link from "next/link";
import { posts } from "@/app/data/posts";
import { useState } from "react";

const features = [
// ... existing features ...
  { title: "Fast Performance", desc: "Built with Next.js 16 for blazing fast speed.", icon: "⚡" },
  { title: "Modern Design", desc: "Beautifully crafted with Tailwind CSS v4.", icon: "💎" },
  { title: "SEO Ready", desc: "Optimized for search engines out of the box.", icon: "🔍" },
  { title: "Dark Mode", desc: "Native support for light and dark themes.", icon: "🌙" },
  { title: "Responsive", desc: "Looks great on any device, from mobile to desktop.", icon: "📱" },
  { title: "Customizable", desc: "Easily adapt the template to your own brand.", icon: "🎨" }
];

export default function Home() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
      setTimeout(() => setSubscribed(false), 5000);
    }
  };

  const latestPosts = posts.slice(0, 3);

  return (
    <div className="bg-white dark:bg-black transition-colors duration-500 overflow-hidden">
      {/* Hero Section with Decorative Elements */}
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80" aria-hidden="true">
          <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"></div>
        </div>
        
        <div className="mx-auto max-w-3xl py-32 sm:py-48 lg:py-56 text-center relative">
          <h1 className="text-5xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-7xl transition-colors duration-500 animate-in fade-in zoom-in duration-1000">
            Design your <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">digital future</span> with us
          </h1>
          <p className="mt-8 text-lg font-medium text-gray-500 dark:text-gray-400 sm:text-xl/8 transition-colors duration-500 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-200">
            A high-performance blog and portfolio template built for developers who care about speed, design, and accessibility.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-500">
            <Link
              href="/blog"
              className="rounded-2xl bg-blue-600 px-8 py-4 text-lg font-bold text-white shadow-xl shadow-blue-200 dark:shadow-blue-900/20 hover:bg-blue-500 transition-all hover:scale-105 active:scale-95"
            >
              Explore Blog
            </Link>
            <Link href="/services" className="text-lg font-bold leading-6 text-gray-900 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-500">
              Our Services <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>

        <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]" aria-hidden="true">
          <div className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"></div>
        </div>
      </div>

      {/* Latest Posts Section */}
      <div className="py-24 sm:py-32 border-t border-gray-100 dark:border-gray-800">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl">Latest from the Blog</h2>
            <p className="mt-4 text-lg text-gray-500 dark:text-gray-400">Stay updated with our latest insights and tutorials.</p>
          </div>
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-12 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {latestPosts.map((post) => (
              <article key={post.slug} className="flex flex-col items-start justify-between p-8 bg-gray-50 dark:bg-gray-900/50 rounded-3xl border border-gray-100 dark:border-gray-800 transition-all duration-500 hover:shadow-xl hover:-translate-y-1 group">
                <div className="flex items-center gap-x-4 text-xs">
                  <time dateTime="2026-03-16" className="text-gray-500 dark:text-gray-400">Mar 16, 2026</time>
                  <Link href={`/blog/tags/${post.tags[0]}`} className="relative z-10 rounded-full bg-blue-50 dark:bg-blue-900/30 px-3 py-1.5 font-medium text-blue-600 dark:text-blue-400 hover:bg-blue-100 transition-colors">
                    {post.tags[0]}
                  </Link>
                </div>
                <div className="group relative">
                  <h3 className="mt-3 text-xl font-bold leading-6 text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    <Link href={`/blog/${post.slug}`}>
                      <span className="absolute inset-0"></span>
                      {post.title}
                    </Link>
                  </h3>
                  <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600 dark:text-gray-400">{post.description}</p>
                </div>
                <div className="mt-8 flex items-center gap-x-4">
                  <div className="h-10 w-10 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white font-bold">
                    {post.title.charAt(0)}
                  </div>
                  <div className="text-sm leading-6">
                    <p className="font-bold text-gray-900 dark:text-white">Admin</p>
                    <p className="text-gray-500 dark:text-gray-400">Developer</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
          <div className="mt-16 text-center">
            <Link href="/blog" className="text-sm font-bold text-blue-600 dark:text-blue-400 hover:text-blue-500 transition-colors">
              View all posts <span aria-hidden="true">&rarr;</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Enhanced Features Section */}
      <div className="py-24 sm:py-32 bg-gray-50 dark:bg-gray-900/30 transition-colors duration-500 border-y border-gray-100 dark:border-gray-800">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-bold leading-7 text-blue-600 dark:text-blue-400 uppercase tracking-widest transition-colors duration-500">Why Choose Us</h2>
            <p className="mt-2 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl transition-colors duration-500">
              Everything you need to build a modern blog
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-3">
              {features.map((feature) => (
                <div key={feature.title} className="relative pl-16 animate-in fade-in slide-in-from-bottom-4 duration-1000">
                  <dt className="text-base font-bold leading-7 text-gray-900 dark:text-white">
                    <div className="absolute left-0 top-0 flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-600 text-2xl shadow-lg shadow-blue-200 dark:shadow-none transition-transform duration-500 hover:scale-110 hover:rotate-6">
                      {feature.icon}
                    </div>
                    {feature.title}
                  </dt>
                  <dd className="mt-2 text-base leading-7 text-gray-600 dark:text-gray-400 transition-colors duration-500">{feature.desc}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="relative isolate overflow-hidden bg-gray-900 dark:bg-gray-800 px-6 py-24 shadow-2xl rounded-3xl sm:px-24 xl:py-32">
            {subscribed ? (
              <div className="text-center py-8 animate-in fade-in zoom-in duration-500">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-blue-500/20 mb-6">
                  <svg className="h-10 w-10 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Thank you!</h2>
                <p className="mx-auto mt-4 max-w-xl text-lg leading-8 text-gray-300">
                  You have successfully subscribed to our newsletter.
                </p>
              </div>
            ) : (
              <>
                <h2 className="mx-auto max-w-2xl text-center text-3xl font-bold tracking-tight text-white sm:text-4xl animate-in fade-in duration-1000">
                  Get notified when we publish something new.
                </h2>
                <p className="mx-auto mt-2 max-w-xl text-center text-lg leading-8 text-gray-300">
                  No spam, just high-quality technical content delivered straight to your inbox.
                </p>
                <form onSubmit={handleSubscribe} className="mx-auto mt-10 flex max-w-md gap-x-4">
                  <label htmlFor="email-address" className="sr-only">Email address</label>
                  <input 
                    id="email-address" 
                    name="email" 
                    type="email" 
                    autoComplete="email" 
                    required 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="min-w-0 flex-auto rounded-xl border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-blue-500 sm:text-sm sm:leading-6" 
                    placeholder="Enter your email" 
                  />
                  <button 
                    type="submit" 
                    className="flex-none rounded-xl bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white transition-all active:scale-95"
                  >
                    Subscribe
                  </button>
                </form>
              </>
            )}
            <svg viewBox="0 0 1024 1024" className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-x-1/2 [mask-image:radial-gradient(closest-side,white,transparent)]" aria-hidden="true">
              <circle cx="512" cy="512" r="512" fill="url(#newsletter-gradient)" fillOpacity="0.7" />
              <defs>
                <radialGradient id="newsletter-gradient">
                  <stop stopColor="#3b82f6" />
                  <stop offset="1" stopColor="#8b5cf6" />
                </radialGradient>
              </defs>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
