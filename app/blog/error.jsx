"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function Error({ error, reset }) {
    useEffect(() => {
        // Log the error to an error reporting service
        console.error("Blog Error:", error);
    }, [error]);

    return (
        <div className="min-h-[70vh] flex flex-col items-center justify-center bg-white dark:bg-black px-4 transition-colors duration-500">
            <div className="max-w-md w-full text-center space-y-8 animate-in fade-in zoom-in duration-500">
                <div className="flex justify-center">
                    <div className="p-6 bg-red-50 dark:bg-red-900/30 rounded-full text-red-600 dark:text-red-400 shadow-xl shadow-red-100 dark:shadow-red-900/20 animate-bounce transition-colors duration-500">
                        <svg className="h-16 w-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                        </svg>
                    </div>
                </div>

                <div className="space-y-4">
                    <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white tracking-tight sm:text-4xl transition-colors duration-500">
                        Something went wrong!
                    </h2>
                    <div className="p-4 bg-gray-50 dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 transition-colors duration-500">
                        <p className="text-sm font-mono text-red-500 dark:text-red-400 break-all leading-relaxed transition-colors duration-500">
                            {error?.message || "An unexpected error occurred in the blog section."}
                        </p>
                    </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                    <button
                        onClick={() => reset()}
                        className="rounded-2xl bg-blue-600 px-8 py-4 text-lg font-bold text-white shadow-lg shadow-blue-200 dark:shadow-blue-900/20 hover:bg-blue-500 transition-all hover:scale-105 active:scale-95 flex items-center justify-center space-x-2"
                    >
                        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                        </svg>
                        <span>Try Again</span>
                    </button>
                    <Link
                        href="/"
                        className="rounded-2xl bg-gray-100 dark:bg-gray-800 px-8 py-4 text-lg font-bold text-gray-900 dark:text-gray-100 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all flex items-center justify-center"
                    >
                        Go to Home
                    </Link>
                </div>
                
                <p className="text-sm text-gray-400 dark:text-gray-500 font-medium transition-colors duration-500">
                    Error ID: {Math.random().toString(36).substr(2, 9).toUpperCase()}
                </p>
            </div>
        </div>
    );
}
