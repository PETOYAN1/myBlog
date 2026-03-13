export const metadata = {
  title: "About",
  description: "Learn more about our team and our story at MyBlog."
}

function Page() {
    const values = [
        { title: "Quality Content", desc: "We strive to provide the most accurate and up-to-date information.", icon: "📚" },
        { title: "Community First", desc: "Our readers are at the heart of everything we do.", icon: "🤝" },
        { title: "Innovation", desc: "Exploring new technologies and sharing our findings.", icon: "💡" }
    ];

    return (
        <div className="bg-white dark:bg-black transition-colors duration-500">
            <div className="relative isolate overflow-hidden bg-blue-600 py-24 sm:py-32">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto max-w-2xl lg:mx-0">
                        <h2 className="text-4xl font-extrabold tracking-tight text-white sm:text-6xl">About Us</h2>
                        <p className="mt-6 text-lg leading-8 text-blue-100 font-medium">
                            We are a collective of developers, designers, and tech enthusiasts sharing our knowledge with the world.
                        </p>
                    </div>
                </div>
            </div>

            <div className="py-24 sm:py-32">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:gap-x-16">
                        <div>
                            <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl mb-6 transition-colors duration-500">Our Story</h2>
                            <div className="space-y-6 text-lg text-gray-600 dark:text-gray-400 leading-relaxed transition-colors duration-500">
                                <p>
                                    Founded in 2026, MyBlog started as a small project to document our learning journey in the ever-changing landscape of web development.
                                </p>
                                <p>
                                    Today, it has grown into a platform where we share deep dives into Next.js, React, Tailwind CSS, and more. Our mission is to simplify complex topics and make them accessible to everyone.
                                </p>
                            </div>
                        </div>
                        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-1">
                            {values.map((value) => (
                                <div key={value.title} className="flex gap-x-4 p-6 bg-gray-50 dark:bg-gray-900/50 rounded-2xl border border-gray-100 dark:border-gray-800 transition-colors duration-500">
                                    <span className="text-2xl">{value.icon}</span>
                                    <div>
                                        <h3 className="font-bold text-gray-900 dark:text-white transition-colors duration-500">{value.title}</h3>
                                        <p className="mt-1 text-gray-600 dark:text-gray-400 transition-colors duration-500">{value.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Page;
