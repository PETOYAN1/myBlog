"use client";

import Link from "next/link";
import { posts } from "@/app/data/posts";
import { useState } from "react";

function Blog() {
    const [searchQuery, setSearchQuery] = useState("");
    const [email, setEmail] = useState("");
    const [subscribed, setSubscribed] = useState(false);

    const handleSubscribe = (e) => {
        e.preventDefault();
        if (email) {
            setSubscribed(true);
            setEmail("");
            setTimeout(() => setSubscribed(false), 5000);
        }
    };

    const featuredPost = posts[0];
    
    // Filter posts based on search
    const filteredPosts = posts.filter(post => 
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
    );

    const remainingPosts = filteredPosts.filter(p => p.slug !== featuredPost.slug);
    
    // Get unique tags
    const allTags = posts.flatMap(post => post.tags);
    const uniqueTags = [...new Set(allTags)].slice(0, 10);

    return (
        <div className="min-h-screen bg-white dark:bg-black transition-colors duration-500">
            {/* Blog Hero Section with Animated Background */}
            <div className="relative isolate overflow-hidden bg-white dark:bg-black border-b border-gray-100 dark:border-gray-800">
                <div className="absolute inset-0 -z-10">
                    <div className="absolute top-0 left-1/4 w-72 h-72 bg-blue-400/10 rounded-full blur-3xl animate-pulse"></div>
                    <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl animate-pulse delay-700"></div>
                </div>
                
                <div className="mx-auto max-w-7xl py-24 sm:py-32 px-6 lg:px-8">
                    <div className="text-center">
                        <h1 className="text-5xl font-black tracking-tight text-gray-900 dark:text-white sm:text-7xl animate-in fade-in slide-in-from-top-4 duration-1000">
                            The <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Knowledge</span> Hub
                        </h1>
                        <p className="mt-6 text-xl leading-8 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-200">
                            Explore the latest in tech, design, and development. Fresh insights delivered weekly to keep you ahead of the curve.
                        </p>
                        
                        {/* Search Bar */}
                        <div className="mt-10 max-w-md mx-auto relative animate-in fade-in zoom-in duration-1000 delay-500">
                            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                </svg>
                            </div>
                            <input 
                                type="text"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                placeholder="Search articles, tags, or topics..."
                                className="block w-full pl-11 pr-4 py-4 rounded-2xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all shadow-lg shadow-blue-500/5 outline-none"
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
                {/* Featured Post (Only if no search query) */}
                {!searchQuery && featuredPost && (
                    <div className="mb-24 animate-in fade-in zoom-in duration-1000">
                        <div className="relative isolate flex flex-col gap-12 lg:flex-row items-center">
                            <div className="relative aspect-[16/9] sm:aspect-[2/1] lg:aspect-square lg:w-1/2 lg:shrink-0 overflow-hidden rounded-[2.5rem] bg-white dark:bg-black shadow-2xl group cursor-pointer border border-gray-100 dark:border-gray-800">
                                <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-indigo-900 to-black flex items-center justify-center text-[12rem] text-white font-black opacity-90 transition-transform duration-700 group-hover:scale-110">
                                    {featuredPost.title.charAt(0)}
                                </div>
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500"></div>
                                <Link href={`/blog/${featuredPost.slug}`} className="absolute inset-0 z-10"></Link>
                            </div>
                            <div className="flex-1">
                                <div className="flex items-center gap-x-4 text-xs">
                                    <span className="inline-flex items-center px-3 py-1 rounded-full bg-blue-600 text-white font-bold uppercase tracking-widest animate-pulse">Featured</span>
                                    <div className="flex gap-2">
                                        {featuredPost.tags.map(tag => (
                                            <Link key={tag} href={`/blog/tags/${tag}`} className="rounded-full bg-blue-50 dark:bg-blue-900/30 px-3 py-1.5 font-bold text-blue-600 dark:text-blue-400 hover:bg-blue-100 transition-colors">
                                                #{tag}
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                                <div className="group relative">
                                    <h3 className="mt-6 text-4xl font-black leading-tight text-gray-900 dark:text-white group-hover:text-blue-600 transition-colors sm:text-5xl">
                                        <Link href={`/blog/${featuredPost.slug}`}>
                                            {featuredPost.title}
                                        </Link>
                                    </h3>
                                    <p className="mt-6 text-xl leading-8 text-gray-600 dark:text-gray-400">
                                        {featuredPost.description}
                                    </p>
                                </div>
                                <div className="mt-10 flex items-center gap-x-6">
                                    <div className="flex items-center gap-x-4">
                                        <div className="h-14 w-14 rounded-2xl bg-blue-600 flex items-center justify-center text-white font-bold text-xl shadow-xl shadow-blue-500/20 rotate-3">SP</div>
                                        <div>
                                            <p className="text-lg font-black text-gray-900 dark:text-white">Samvel Petoyan</p>
                                            <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Mar 16, 2026 • 8 min read</p>
                                        </div>
                                    </div>
                                    <Link href={`/blog/${featuredPost.slug}`} className="hidden sm:block text-sm font-black text-blue-600 dark:text-blue-400 hover:underline uppercase tracking-widest">
                                        Read Article →
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                <div className="flex flex-col lg:flex-row gap-20">
                    {/* Posts Grid */}
                    <div className="lg:w-3/4">
                        <div className="flex items-center justify-between mb-12">
                            <h2 className="text-3xl font-black text-gray-900 dark:text-white">
                                {searchQuery ? `Search results for "${searchQuery}"` : "Recent Articles"}
                            </h2>
                            <span className="text-sm font-bold text-gray-400 dark:text-gray-500 uppercase tracking-widest">
                                {filteredPosts.length} Articles Found
                            </span>
                        </div>
                        
                        {filteredPosts.length > 0 ? (
                            <div className="grid gap-16 sm:grid-cols-2">
                                {filteredPosts.map((post, index) => (
                                    <article 
                                        key={post.slug} 
                                        style={{ animationDelay: `${index * 100}ms` }}
                                        className="flex flex-col items-start animate-in fade-in slide-in-from-bottom-4 duration-700 fill-mode-both group"
                                    >
                                        <div className="relative w-full aspect-[16/10] overflow-hidden rounded-[2rem] bg-white dark:bg-black mb-8 shadow-sm group-hover:shadow-2xl group-hover:-translate-y-2 transition-all duration-500 cursor-pointer border border-gray-100 dark:border-gray-800">
                                            <div className="absolute inset-0 bg-gradient-to-tr from-white to-gray-50 dark:from-black dark:to-gray-900 flex items-center justify-center text-6xl text-gray-300 dark:text-gray-700 font-black group-hover:scale-110 transition-transform duration-700">
                                                {post.title.charAt(0)}
                                            </div>
                                            <div className="absolute top-4 right-4 z-20">
                                                <span className="px-3 py-1 rounded-lg bg-white/90 dark:bg-gray-900/90 text-xs font-black text-blue-600 backdrop-blur-sm shadow-sm">
                                                    {post.tags[0]}
                                                </span>
                                            </div>
                                            <Link href={`/blog/${post.slug}`} className="absolute inset-0 z-10"></Link>
                                        </div>
                                        <div className="flex items-center gap-x-4 text-xs mb-4 font-bold uppercase tracking-widest text-gray-400">
                                            <time dateTime="2026-03-16">Mar 16, 2026</time>
                                            <span>•</span>
                                            <span>5 min read</span>
                                        </div>
                                        <div className="group relative">
                                            <h3 className="text-2xl font-black leading-tight text-gray-900 dark:text-white group-hover:text-blue-600 transition-colors">
                                                <Link href={`/blog/${post.slug}`}>
                                                    {post.title}
                                                </Link>
                                            </h3>
                                            <p className="mt-4 text-lg leading-7 text-gray-600 dark:text-gray-400 line-clamp-3">
                                                {post.description}
                                            </p>
                                        </div>
                                        <div className="mt-8 flex items-center gap-x-3">
                                            <div className="h-10 w-10 rounded-xl bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-sm font-bold text-gray-600 dark:text-gray-400 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-500">SP</div>
                                            <span className="text-sm font-black text-gray-900 dark:text-white">Samvel Petoyan</span>
                                        </div>
                                    </article>
                                ))}
                            </div>
                        ) : (
                            <div className="text-center py-20 bg-white dark:bg-black rounded-[3rem] border-2 border-dashed border-gray-100 dark:border-gray-800">
                                <div className="text-6xl mb-6">🔍</div>
                                <h3 className="text-2xl font-black text-gray-900 dark:text-white mb-2">No articles found</h3>
                                <p className="text-gray-500 dark:text-gray-400">Try adjusting your search or category filters.</p>
                                <button 
                                    onClick={() => setSearchQuery("")}
                                    className="mt-8 px-6 py-3 rounded-xl bg-blue-600 text-white font-bold hover:bg-blue-500 transition-all"
                                >
                                    Clear Search
                                </button>
                            </div>
                        )}
                    </div>

                    {/* Enhanced Sidebar */}
                    <div className="lg:w-1/4 space-y-12">
                        {/* Tags Cloud */}
                        <div className="bg-white dark:bg-black rounded-[2.5rem] p-10 border border-gray-100 dark:border-gray-800 shadow-sm sticky top-24">
                            <h3 className="text-sm font-black text-gray-900 dark:text-white uppercase tracking-[0.2em] mb-8 border-b border-gray-200 dark:border-gray-800 pb-4">Popular Topics</h3>
                            <div className="flex flex-wrap gap-3">
                                {uniqueTags.map(tag => (
                                    <Link 
                                        key={tag} 
                                        href={`/blog/tags/${tag}`}
                                        className="px-4 py-2 rounded-xl text-xs font-black bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-gray-700 hover:border-blue-500 hover:text-blue-600 dark:hover:text-blue-400 transition-all shadow-sm hover:shadow-md"
                                    >
                                        #{tag}
                                    </Link>
                                ))}
                            </div>
                            
                            {/* Promo Card in Sidebar */}
                            <div className="mt-12 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-3xl p-8 text-white shadow-xl shadow-blue-500/20 relative overflow-hidden">
                                <div className="absolute top-0 right-0 -mr-4 -mt-4 w-24 h-24 bg-white/10 rounded-full blur-2xl"></div>
                                {subscribed ? (
                                    <div className="relative z-10 text-center py-4 animate-in fade-in zoom-in duration-500">
                                        <div className="h-12 w-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                                            <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                            </svg>
                                        </div>
                                        <h4 className="text-lg font-black mb-1">Thank you!</h4>
                                        <p className="text-blue-100 text-xs">You have successfully subscribed!</p>
                                    </div>
                                ) : (
                                    <>
                                        <h4 className="text-lg font-black mb-2 relative z-10">Newsletter</h4>
                                        <p className="text-blue-100 text-xs leading-5 mb-6 relative z-10">Get the best of web development straight to your inbox.</p>
                                        <form onSubmit={handleSubscribe} className="space-y-3 relative z-10">
                                            <input 
                                                type="email" 
                                                required
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}
                                                placeholder="Your email" 
                                                className="w-full px-4 py-2.5 rounded-xl bg-white/10 border border-white/20 text-white placeholder:text-blue-200 focus:outline-none focus:ring-2 focus:ring-white/50 text-xs font-bold"
                                            />
                                            <button type="submit" className="w-full bg-white text-blue-600 font-black py-2.5 rounded-xl hover:bg-blue-50 transition-all text-xs uppercase tracking-widest active:scale-95 shadow-lg">
                                                Join Now
                                            </button>
                                        </form>
                                    </>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Blog;
