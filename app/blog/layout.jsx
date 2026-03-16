export default function BlogLayout({ children }) {
    return (
        <div className="bg-white dark:bg-black min-h-screen">
            <div className="max-w-7xl mx-auto">
                {children}
            </div>
        </div>
    )
}