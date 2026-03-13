import { posts } from "@/app/data/posts";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";

// Generate Static Params

export async function generateStaticParams() {
    return posts.map(post => ({
        slug: post.slug
    }));
}

export default async function Post({ params }) {
    const { slug } = await params;
    const post = posts.find(p => p.slug === slug);
    if (!post) {
        notFound();
    }
    return (
        <div className="min-h-screen bg-white dark:bg-black py-16 px-4 sm:px-6 lg:px-8 transition-colors duration-500">
            <article className="max-w-3xl mx-auto animate-in fade-in slide-in-from-bottom-8 duration-1000 ease-out fill-mode-both">
                <header className="mb-12">
                    <Link 
                        href="/blog" 
                        className="text-sm font-bold text-blue-600 dark:text-blue-400 hover:text-blue-500 dark:hover:text-blue-300 mb-6 inline-flex items-center group transition-colors duration-500"
                    >
                        <span className="mr-2 transition-transform group-hover:-translate-x-1">&larr;</span> Back to Blog
                    </Link>
                    <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white tracking-tight sm:text-6xl mb-6 transition-colors duration-500">
                        {post.title}
                    </h1>
                    <div className="flex items-center p-6 bg-gray-50 dark:bg-gray-900/50 rounded-2xl transition-colors duration-500">
                        <div className="flex-shrink-0">
                            <div className="h-14 w-14 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white font-bold text-xl shadow-lg">
                                {post.title.charAt(0)}
                            </div>
                        </div>
                        <div className="ml-4">
                            <p className="text-lg font-bold text-gray-900 dark:text-white transition-colors duration-500">Admin Editor</p>
                            <div className="flex space-x-2 text-sm text-gray-500 dark:text-gray-400 font-medium transition-colors duration-500">
                                <time dateTime="2026-03-13">March 13, 2026</time>
                                <span>•</span>
                                <span>8 min read</span>
                            </div>
                        </div>
                    </div>
                </header>

                <div className="prose prose-lg max-w-none text-gray-700 dark:text-gray-300 leading-relaxed space-y-8 text-xl transition-colors duration-500">
                    {post.content.split('\n').map((paragraph, index) => (paragraph && (
                        <p key={index} className="first-letter:text-3xl first-letter:font-bold first-letter:text-blue-600 dark:first-letter:text-blue-400">{paragraph}</p>
                    )))}
                </div>

                <footer className="mt-16 pt-10 border-t border-gray-100 dark:border-gray-800 transition-colors duration-500">
                    <h3 className="text-sm font-bold text-gray-400 dark:text-gray-500 uppercase tracking-widest mb-4 transition-colors duration-500">Tags</h3>
                    <div className="flex flex-wrap gap-3">
                        {['Technology', 'Next.js', 'React', 'Design'].map(tag => (
                            <span key={tag} className="px-4 py-2 rounded-xl text-sm font-bold bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 border border-blue-100 dark:border-blue-800 transition-colors duration-500">
                                #{tag}
                            </span>
                        ))}
                    </div>
                </footer>
            </article>
        </div>
    )
}

// Generate Metadata

export async function generateMetadata({ params }) {
    const { slug } = await params;
    const post = posts.find(p => p.slug === slug);

    if(!post) {
        return {
            title: "Post not Found!"
        }
    }
    return {
        title: post.title,
        description: post.content.substring(0,100) + "..."
    }
}