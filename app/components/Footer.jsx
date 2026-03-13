function Footer() {
    return (
        <footer className="bg-gray-50 dark:bg-black/90 border-t border-gray-100 dark:border-gray-800 transition-colors duration-500">
            <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col items-center justify-center space-y-4">
                    <div className="flex space-x-6 text-gray-400 dark:text-gray-500">
                        <span className="text-sm">© 2026 MyBlog. All rights reserved.</span>
                    </div>
                    <div className="flex space-x-4">
                        <p className="text-gray-500 dark:text-gray-400 text-sm">Built with Next.js and Tailwind CSS</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}
export default Footer;