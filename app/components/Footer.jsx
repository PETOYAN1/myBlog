"use client";

import Link from "next/link";
import { useState } from "react";

function Footer() {
    const [email, setEmail] = useState("");
    const [subscribed, setSubscribed] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (email) {
            setSubscribed(true);
            setEmail("");
            setTimeout(() => setSubscribed(false), 5000);
        }
    };
    const navigation = {
        main: [
            { name: 'Home', href: '/' },
            { name: 'Blog', href: '/blog' },
            { name: 'Services', href: '/services' },
            { name: 'About', href: '/about' },
            { name: 'Contact', href: '/contacts' },
        ],
        social: [
            {
                name: 'GitHub',
                href: 'https://github.com/PETOYAN1',
                icon: (props) => (
                    <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
                        <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.308.462-2.376 1.222-3.213-.117-.303-.529-1.523.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                    </svg>
                ),
            },
            {
                name: 'LinkedIn',
                href: 'https://linkedin.com/in/samvel-petoyan',
                icon: (props) => (
                    <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                ),
            },
            {
                name: 'Instagram',
                href: 'https://instagram.com/samvel3544',
                icon: (props) => (
                    <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                ),
            },
        ],
    }

    return (
        <footer className="bg-white dark:bg-black border-t border-gray-100 dark:border-gray-800 transition-colors duration-500 overflow-hidden relative">
            {/* Decorative background element */}
            <div className="absolute bottom-0 right-0 -mb-20 -mr-20 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl pointer-events-none"></div>
            
            <div className="mx-auto max-w-7xl px-6 py-16 md:py-24 lg:px-8 relative">
                <div className="xl:grid xl:grid-cols-3 xl:gap-12">
                    {/* Brand Section */}
                    <div className="space-y-10">
                        <Link href="/" className="group flex items-center space-x-2">
                            <div className="h-10 w-10 rounded-xl bg-blue-600 flex items-center justify-center text-white font-black text-xl shadow-lg shadow-blue-500/20 group-hover:rotate-6 transition-transform">M</div>
                            <span className="text-2xl font-black tracking-tighter text-gray-900 dark:text-white">
                                MyBlog<span className="text-blue-600">.</span>
                            </span>
                        </Link>
                        <p className="text-lg leading-7 text-gray-600 dark:text-gray-400 max-w-xs font-medium">
                            A premium space for modern developers. Crafting the future of the web, one pixel at a time.
                        </p>
                        <div className="flex space-x-5">
                            {navigation.social.map((item) => (
                                <a 
                                    key={item.name} 
                                    href={item.href} 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    className="h-12 w-12 rounded-2xl bg-gray-50 dark:bg-gray-900 flex items-center justify-center text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 border border-gray-100 dark:border-gray-800 transition-all hover:-translate-y-1 hover:shadow-lg"
                                >
                                    <span className="sr-only">{item.name}</span>
                                    <item.icon className="h-6 w-6" aria-hidden="true" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Navigation & Newsletter Section */}
                    <div className="mt-16 grid grid-cols-1 gap-12 sm:grid-cols-2 xl:col-span-2 xl:mt-0">
                        <div className="grid grid-cols-2 gap-8">
                            <div>
                                <h3 className="text-sm font-black text-gray-900 dark:text-white uppercase tracking-[0.2em] mb-8">Navigation</h3>
                                <ul role="list" className="space-y-5">
                                    {navigation.main.map((item) => (
                                        <li key={item.name}>
                                            <Link href={item.href} className="text-base font-bold text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors flex items-center group">
                                                <span className="w-0 group-hover:w-4 h-0.5 bg-blue-600 mr-0 group-hover:mr-2 transition-all"></span>
                                                {item.name}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div>
                                <h3 className="text-sm font-black text-gray-900 dark:text-white uppercase tracking-[0.2em] mb-8">Legal</h3>
                                <ul role="list" className="space-y-5">
                                    <li><Link href="#" className="text-base font-bold text-gray-500 dark:text-gray-400 hover:text-blue-600 transition-colors">Privacy Policy</Link></li>
                                    <li><Link href="#" className="text-base font-bold text-gray-500 dark:text-gray-400 hover:text-blue-600 transition-colors">Terms of Service</Link></li>
                                    <li><Link href="#" className="text-base font-bold text-gray-500 dark:text-gray-400 hover:text-blue-600 transition-colors">Cookie Policy</Link></li>
                                </ul>
                            </div>
                        </div>

                        {/* Newsletter Card */}
                        <div className="bg-gray-50 dark:bg-gray-900/50 rounded-[2rem] p-10 border border-gray-100 dark:border-gray-800 shadow-sm relative overflow-hidden">
                            {subscribed ? (
                                <div className="h-full flex flex-col items-center justify-center text-center py-4 animate-in fade-in zoom-in duration-500">
                                    <div className="h-16 w-16 bg-green-500/10 rounded-full flex items-center justify-center mb-4">
                                        <svg className="h-8 w-8 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                    <h3 className="text-xl font-black text-gray-900 dark:text-white mb-2">Thank you!</h3>
                                     <p className="text-sm font-medium text-gray-600 dark:text-gray-400">
                                         You have successfully subscribed to our newsletter.
                                     </p>
                                </div>
                            ) : (
                                <>
                                    <h3 className="text-xl font-black text-gray-900 dark:text-white mb-4">Weekly Tech Insights</h3>
                                    <p className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-8 leading-6">
                                        Join 5,000+ developers and stay updated with the latest tutorials and trends.
                                    </p>
                                    <form onSubmit={handleSubmit} className="space-y-4">
                                        <div className="relative">
                                            <input
                                                type="email"
                                                required
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}
                                                className="w-full rounded-2xl border-0 bg-white dark:bg-gray-800 px-5 py-4 text-base text-gray-900 dark:text-white shadow-sm ring-1 ring-inset ring-gray-200 dark:ring-gray-700 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 outline-none transition-all"
                                                placeholder="Enter your email"
                                            />
                                        </div>
                                        <button
                                            type="submit"
                                            className="w-full rounded-2xl bg-blue-600 px-5 py-4 text-base font-black text-white shadow-xl shadow-blue-500/20 hover:bg-blue-500 transition-all active:scale-[0.98] uppercase tracking-widest"
                                        >
                                            Subscribe Now
                                        </button>
                                    </form>
                                </>
                            )}
                        </div>
                    </div>
                </div>

                <div className="mt-20 border-t border-gray-100 dark:border-gray-800 pt-10 flex flex-col md:flex-row items-center justify-between gap-6">
                    <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4 text-sm font-bold text-gray-400 dark:text-gray-500">
                        <span>© 2026 MyBlog. All rights reserved.</span>
                        <span className="hidden md:inline">•</span>
                        <span>Designed by <Link href="https://www.instagram.com/samvel3544" className="text-gray-900 dark:text-white hover:text-blue-600 transition-colors">Samvel Petoyan</Link></span>
                    </div>
                    <div className="flex items-center space-x-6">
                        <div className="flex items-center space-x-2 text-xs font-black uppercase tracking-widest text-green-500 bg-green-500/5 px-3 py-1 rounded-full border border-green-500/10">
                            <span className="w-2 h-2 rounded-full bg-green-500 animate-ping"></span>
                            <span>Live Status</span>
                        </div>
                        <div className="h-8 w-[1px] bg-gray-100 dark:bg-gray-800"></div>
                        <p className="text-xs font-black text-gray-400 uppercase tracking-widest">v1.2.0</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;
