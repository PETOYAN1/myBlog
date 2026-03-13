export default function BlogLayout({ children }) {
    return (
        <div className="bg-gray-50/30 min-h-screen">
            <div className="max-w-7xl mx-auto py-8">
                {children}
            </div>
        </div>
    )
}