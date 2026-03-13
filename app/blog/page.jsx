import Link from "next/link";
import { posts } from "@/app/data/posts";

export const metadata = {
    title: "Blog",
    description: "Read our latest articles on technology, design, and web development."
};

function Blog() {
    return (
        <div className="min-h-screen bg-white dark:bg-black transition-colors duration-500">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="text-center mb-16 animate-in fade-in slide-in-from-top-8 duration-1000">
                    <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white sm:text-5xl sm:tracking-tight lg:text-6xl transition-colors duration-500">
                        Our Blog
                    </h1>
                    <p className="mt-5 max-w-xl mx-auto text-xl text-gray-500 dark:text-gray-400 font-medium transition-colors duration-500">
                        Insights, thoughts, and stories from our team.
                    </p>
                </div>

                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {posts.map((post, index) => (
                        <article 
                            key={post.slug} 
                            style={{ animationDelay: `${index * 150}ms` }}
                            className="flex flex-col overflow-hidden rounded-2xl border border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-900 shadow-sm transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 hover:border-blue-100 dark:hover:border-blue-900 animate-in fade-in slide-in-from-bottom-8 fill-mode-both"
                        >
                            <div className="flex flex-1 flex-col justify-between p-6">
                                <div className="flex-1">
                                    <div className="flex items-center space-x-2">
                                        <span className="px-3 py-1 text-xs font-bold text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/30 rounded-full uppercase tracking-wider transition-colors duration-500">
                                            Article
                                        </span>
                                    </div>
                                    <Link href={`/blog/${post.slug}`} className="mt-4 block group">
                                        <h2 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-500">
                                            {post.title}
                                        </h2>
                                        <p className="mt-3 text-base text-gray-500 dark:text-gray-400 line-clamp-3 leading-relaxed transition-colors duration-500">
                                            {post.content.substring(0, 150)}...
                                        </p>
                                    </Link>
                                </div>
                                <div className="mt-8 pt-6 border-t border-gray-50 dark:border-gray-800 flex items-center justify-between transition-colors duration-500">
                                    <div className="flex items-center">
                                        <div className="h-10 w-10 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white font-bold shadow-md">
                                            {post.title.charAt(0)}
                                        </div>
                                        <div className="ml-3">
                                            <p className="text-sm font-bold text-gray-900 dark:text-white transition-colors duration-500">Admin</p>
                                            <p className="text-xs text-gray-500 dark:text-gray-400 transition-colors duration-500">Mar 13, 2026</p>
                                        </div>
                                    </div>
                                    <Link 
                                        href={`/blog/${post.slug}`}
                                        className="text-blue-600 dark:text-blue-400 font-bold text-sm hover:underline flex items-center group transition-colors duration-500"
                                    >
                                        Read <span className="ml-1 transition-transform group-hover:translate-x-1">→</span>
                                    </Link>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </div>
    );
}
export default Blog;