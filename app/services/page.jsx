import Link from "next/link";
export const metadata = {
    title: "Services",
    description: "Explore the wide range of digital services we provide to help your business grow."
};

function Page() {
    const services = [
        {
            title: "Web Development",
            description: "Building modern, responsive, and high-performance web applications using the latest technologies like Next.js and React.",
            icon: "💻",
            features: ["Custom Web Apps", "E-commerce Solutions", "API Integration"]
        },
        {
            title: "UI/UX Design",
            description: "Creating intuitive and beautiful user interfaces that provide exceptional user experiences and user-centric design.",
            icon: "🎨",
            features: ["User Research", "Prototyping", "Visual Design"]
        },
        {
            title: "SEO Optimization",
            description: "Improving your website visibility in search engines to reach more potential customers and organic growth.",
            icon: "🚀",
            features: ["Keyword Research", "On-page SEO", "Performance Optimization"]
        },
        {
            title: "Cloud Solutions",
            description: "Scalable and secure cloud infrastructure to power your digital transformation and data management.",
            icon: "☁️",
            features: ["AWS/GCP Setup", "Cloud Security", "DevOps Support"]
        }
    ];

    const process = [
        { title: "Discovery", desc: "We dive deep into your goals and target audience.", step: "01" },
        { title: "Design", desc: "Creating visual concepts and wireframes.", step: "02" },
        { title: "Development", desc: "Building your solution with clean, efficient code.", step: "03" },
        { title: "Launch", desc: "Testing and deploying your product to the world.", step: "04" },
    ];

    return (
        <div className="min-h-screen bg-white dark:bg-black transition-colors duration-500 overflow-hidden">
            {/* Hero Section */}
            <div className="relative isolate overflow-hidden bg-indigo-600 py-24 sm:py-32">
                <div className="absolute inset-0 -z-10 opacity-20">
                    <svg className="h-full w-full" fill="none" viewBox="0 0 400 400">
                        <defs>
                            <pattern id="grid-services" width="40" height="40" patternUnits="userSpaceOnUse">
                                <circle cx="2" cy="2" r="1" fill="white" />
                            </pattern>
                        </defs>
                        <rect width="100%" height="100%" fill="url(#grid-services)" />
                    </svg>
                </div>
                <div className="mx-auto max-w-7xl px-6 lg:px-8 relative text-center">
                    <div className="mx-auto max-w-2xl animate-in fade-in slide-in-from-top-8 duration-1000">
                        <h2 className="text-base font-bold leading-7 text-indigo-200 uppercase tracking-widest mb-4">What We Do</h2>
                        <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-6xl mb-6">
                            Expert Services for Your Digital Growth
                        </h1>
                        <p className="text-lg leading-8 text-indigo-100 font-medium max-w-xl mx-auto">
                            From concept to launch, we provide the technical expertise and design excellence your project deserves.
                        </p>
                    </div>
                </div>
            </div>

            {/* Services Grid */}
            <div className="py-24 sm:py-32 relative">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-2">
                        {services.map((service, index) => (
                            <div 
                                key={index} 
                                style={{ animationDelay: `${index * 150}ms` }}
                                className="group relative bg-gray-50 dark:bg-gray-900/50 p-10 rounded-3xl border border-gray-100 dark:border-gray-800 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 animate-in fade-in slide-in-from-bottom-8 fill-mode-both"
                            >
                                <div className="flex items-center gap-x-6 mb-8">
                                    <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-indigo-600 text-white text-3xl shadow-lg shadow-indigo-200 dark:shadow-none transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6">
                                        {service.icon}
                                    </div>
                                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white transition-colors duration-500">{service.title}</h3>
                                </div>
                                <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed mb-8 transition-colors duration-500">
                                    {service.description}
                                </p>
                                <ul className="space-y-3 border-t border-gray-100 dark:border-gray-800 pt-8">
                                    {service.features.map((feature, fIdx) => (
                                        <li key={fIdx} className="flex items-center text-gray-700 dark:text-gray-300 transition-colors duration-500">
                                            <svg className="h-5 w-5 text-indigo-500 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                            </svg>
                                            <span className="font-medium">{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Process Section */}
            <div className="py-24 sm:py-32 bg-gray-50 dark:bg-gray-900/30 border-y border-gray-100 dark:border-gray-800">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="text-center mb-20">
                        <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl">Our Working Process</h2>
                        <p className="mt-4 text-lg text-gray-500 dark:text-gray-400">Simple, transparent, and result-oriented.</p>
                    </div>
                    <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4 relative">
                        {/* Connecting Line (hidden on mobile) */}
                        <div className="hidden lg:block absolute top-12 left-1/2 -translate-x-1/2 w-[80%] h-0.5 bg-indigo-100 dark:bg-indigo-900/30 -z-10"></div>
                        
                        {process.map((item, index) => (
                            <div key={index} className="flex flex-col items-center text-center animate-in fade-in slide-in-from-right-8 duration-1000">
                                <div className="w-16 h-16 rounded-full bg-white dark:bg-gray-800 border-4 border-indigo-600 flex items-center justify-center text-xl font-bold text-indigo-600 mb-6 shadow-xl transition-all duration-500 hover:scale-110">
                                    {item.step}
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{item.title}</h3>
                                <p className="text-gray-600 dark:text-gray-400">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Bottom CTA */}
            <div className="py-24 px-6 text-center">
                <div className="max-w-4xl mx-auto rounded-3xl p-12 bg-gradient-to-br from-indigo-600 to-blue-700 shadow-2xl animate-in zoom-in duration-1000">
                    <h2 className="text-3xl font-bold text-white mb-6 sm:text-4xl">Ready to start your project?</h2>
                    <p className="text-indigo-100 mb-10 text-lg max-w-2xl mx-auto">
                        Whether you're a startup or an established business, we're here to turn your ideas into digital reality.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link 
                            href="/contacts" 
                            className="bg-white text-indigo-600 font-bold px-10 py-4 rounded-2xl hover:bg-indigo-50 transition-all hover:scale-105 active:scale-95 shadow-lg"
                        >
                            Get a Free Quote
                        </Link>
                        <Link 
                            href="/about" 
                            className="bg-indigo-500/30 text-white font-bold px-10 py-4 rounded-2xl hover:bg-indigo-500/50 transition-all border border-indigo-400/30"
                        >
                            Learn More
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Page;
