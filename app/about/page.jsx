import Link from "next/link";

export const metadata = {
  title: "About",
  description: "Learn more about our team and our story at MyBlog."
}

function Page() {
    const values = [
        { title: "Quality Content", desc: "We strive to provide the most accurate and up-to-date information.", icon: "📚" },
        { title: "Community First", desc: "Our readers are at the heart of everything we do.", icon: "🤝" },
        { title: "Innovation", desc: "Exploring new technologies and sharing our findings.", icon: "💡" },
        { title: "Open Source", desc: "We believe in sharing and contributing back to the community.", icon: "🌐" }
    ];

    const stats = [
        { label: 'Articles Published', value: '150+' },
        { label: 'Monthly Readers', value: '50k+' },
        { label: 'Team Members', value: '12' },
        { label: 'Years Experience', value: '1+' },
    ];

    const team = [
        { name: 'Samvel Petoyan', role: 'Founder & Lead Developer', image: 'https://github.com/PETOYAN1.png' },
        { name: 'Alex Johnson', role: 'UI/UX Designer', image: 'https://i.pravatar.cc/150?u=alex' },
        { name: 'Maria Petrovich', role: 'Content Strategist', image: 'https://i.pravatar.cc/150?u=juliaa' },
    ];

    return (
        <div className="bg-white dark:bg-black transition-colors duration-500 overflow-hidden">
            {/* Hero Section with Background Pattern */}
            <div className="relative isolate overflow-hidden bg-blue-600 py-24 sm:py-32">
                <div className="absolute inset-0 -z-10 opacity-20">
                    <svg className="h-full w-full" fill="none" viewBox="0 0 400 400">
                        <defs>
                            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                                <path d="M 40 0 L 0 0 0 40" stroke="white" strokeWidth="1" />
                            </pattern>
                        </defs>
                        <rect width="100%" height="100%" fill="url(#grid)" />
                    </svg>
                </div>
                <div className="mx-auto max-w-7xl px-6 lg:px-8 relative">
                    <div className="mx-auto max-w-2xl lg:mx-0 animate-in fade-in slide-in-from-left-8 duration-1000">
                        <h2 className="text-4xl font-extrabold tracking-tight text-white sm:text-6xl">About Us</h2>
                        <p className="mt-6 text-xl leading-8 text-blue-100 font-medium">
                            We are a collective of developers, designers, and tech enthusiasts dedicated to building the future of the web.
                        </p>
                    </div>
                </div>
            </div>

            {/* Stats Section */}
            <div className="py-12 bg-gray-50 dark:bg-gray-900/30 border-y border-gray-100 dark:border-gray-800">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <dl className="grid grid-cols-2 gap-x-8 gap-y-12 text-center lg:grid-cols-4">
                        {stats.map((stat) => (
                            <div key={stat.label} className="mx-auto flex max-w-xs flex-col gap-y-2 animate-in fade-in zoom-in duration-1000">
                                <dt className="text-base leading-7 text-gray-600 dark:text-gray-400">{stat.label}</dt>
                                <dd className="order-first text-3xl font-extrabold tracking-tight text-blue-600 dark:text-blue-400 sm:text-5xl">
                                    {stat.value}
                                </dd>
                            </div>
                        ))}
                    </dl>
                </div>
            </div>

            {/* Main Content Section */}
            <div className="py-24 sm:py-32">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:gap-x-16 items-center">
                        <div className="animate-in fade-in slide-in-from-left-8 duration-1000">
                            <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl mb-6 transition-colors duration-500">Our Story & Mission</h2>
                            <div className="space-y-6 text-lg text-gray-600 dark:text-gray-400 leading-relaxed transition-colors duration-500">
                                <p>
                                    Founded in 2026, MyBlog started as a small project to document our learning journey in the ever-changing landscape of web development. We realized that many developers were facing the same challenges we were.
                                </p>
                                <p>
                                    Today, it has grown into a platform where we share deep dives into Next.js, React, Tailwind CSS, and more. Our mission is to simplify complex topics and make them accessible to everyone, from beginners to advanced professionals.
                                </p>
                                <p className="italic border-l-4 border-blue-600 pl-4 py-2 bg-blue-50 dark:bg-blue-900/20 rounded-r-lg">
                                    "We don't just write code; we build experiences that matter."
                                </p>
                            </div>
                        </div>
                        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 animate-in fade-in slide-in-from-right-8 duration-1000">
                            {values.map((value) => (
                                <div key={value.title} className="flex flex-col gap-y-4 p-8 bg-white dark:bg-gray-800 rounded-3xl border border-gray-100 dark:border-gray-700 transition-all duration-500 hover:shadow-xl hover:-translate-y-1">
                                    <span className="text-4xl">{value.icon}</span>
                                    <div>
                                        <h3 className="font-bold text-xl text-gray-900 dark:text-white transition-colors duration-500">{value.title}</h3>
                                        <p className="mt-2 text-gray-600 dark:text-gray-400 transition-colors duration-500">{value.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Team Section */}
            <div className="py-24 sm:py-32 bg-gray-50 dark:bg-gray-900/50">
                <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
                    <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl mb-16">Meet Our Team</h2>
                    <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3">
                        {team.map((member) => (
                            <div key={member.name} className="flex flex-col items-center group animate-in fade-in slide-in-from-bottom-8 duration-1000">
                                <div className="relative w-48 h-48 mb-6">
                                    <div className="absolute inset-0 bg-blue-600 rounded-full scale-105 opacity-0 group-hover:opacity-10 transition-all duration-500"></div>
                                    <img 
                                        src={member.image} 
                                        alt={member.name} 
                                        className="w-full h-full rounded-full object-cover shadow-xl border-4 border-white dark:border-gray-800 group-hover:scale-105 transition-transform duration-500"
                                    />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 dark:text-white">{member.name}</h3>
                                <p className="text-blue-600 dark:text-blue-400 font-medium">{member.role}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Call to Action */}
            <div className="py-24 px-6 sm:px-12 text-center">
                <div className="max-w-3xl mx-auto bg-blue-600 rounded-3xl p-12 shadow-2xl shadow-blue-200 dark:shadow-none animate-in zoom-in duration-1000">
                    <h2 className="text-3xl font-bold text-white mb-6">Want to join our journey?</h2>
                    <p className="text-blue-100 mb-10 text-lg">
                        We're always looking for talented individuals to contribute to our blog and projects.
                    </p>
                    <Link 
                        href="/contacts" 
                        className="inline-block bg-white text-blue-600 font-bold px-8 py-4 rounded-2xl hover:bg-blue-50 transition-all hover:scale-105 active:scale-95 shadow-lg"
                    >
                        Get in Touch
                    </Link>
                </div>
            </div>
        </div>
    )
}
export default Page;
