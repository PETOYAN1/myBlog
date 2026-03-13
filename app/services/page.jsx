export const metadata = {
    title: "Services",
    description: "Explore the wide range of digital services we provide."
};

function Page() {
    const services = [
        {
            title: "Web Development",
            description: "Building modern, responsive, and high-performance web applications using the latest technologies.",
            icon: "💻"
        },
        {
            title: "UI/UX Design",
            description: "Creating intuitive and beautiful user interfaces that provide exceptional user experiences.",
            icon: "🎨"
        },
        {
            title: "SEO Optimization",
            description: "Improving your website visibility in search engines to reach more potential customers.",
            icon: "🚀"
        },
        {
            title: "Cloud Solutions",
            description: "Scalable and secure cloud infrastructure to power your digital transformation.",
            icon: "☁️"
        }
    ];

    return (
        <div className="min-h-screen bg-white dark:bg-black py-16 px-4 sm:px-6 lg:px-8 transition-colors duration-500">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white sm:text-5xl transition-colors duration-500">
                        Our Services
                    </h1>
                    <p className="mt-4 text-xl text-gray-500 dark:text-gray-400 max-w-2xl mx-auto transition-colors duration-500">
                        We provide a wide range of digital services to help your business grow and succeed.
                    </p>
                </div>

                <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
                    {services.map((service, index) => (
                        <div 
                            key={index} 
                            style={{ animationDelay: `${index * 150}ms` }}
                            className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 transition-all duration-500 hover:shadow-xl hover:-translate-y-2 text-center animate-in fade-in slide-in-from-bottom-8 fill-mode-both"
                        >
                            <div className="text-4xl mb-6 transform transition-transform duration-300 group-hover:scale-125">{service.icon}</div>
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 transition-colors duration-500">{service.title}</h3>
                            <p className="text-gray-500 dark:text-gray-400 leading-relaxed transition-colors duration-500">
                                {service.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Page;
