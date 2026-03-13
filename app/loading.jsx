export default function Loading() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center bg-white dark:bg-black px-4 transition-colors duration-500">
      <div className="relative w-24 h-24">
        {/* Outer Ring */}
        <div className="absolute inset-0 border-4 border-blue-100 dark:border-blue-900/30 rounded-full transition-colors duration-500"></div>
        {/* Animated Ring */}
        <div className="absolute inset-0 border-4 border-blue-600 dark:border-blue-400 rounded-full border-t-transparent animate-spin shadow-lg shadow-blue-200 dark:shadow-blue-900/20"></div>
        {/* Pulsing Center */}
        <div className="absolute inset-6 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full animate-pulse opacity-80 shadow-inner"></div>
      </div>
      
      <div className="mt-8 text-center">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white tracking-tight animate-bounce transition-colors duration-500">
          Loading Content...
        </h3>
        <p className="mt-2 text-gray-500 dark:text-gray-400 font-medium transition-colors duration-500">
          Preparing your experience
        </p>
      </div>
      
      {/* Skeleton placeholders for better feel */}
      <div className="mt-12 w-full max-w-sm space-y-4 opacity-30 animate-pulse">
        <div className="h-4 bg-gray-200 dark:bg-gray-800 rounded-full w-3/4 mx-auto transition-colors duration-500"></div>
        <div className="h-4 bg-gray-200 dark:bg-gray-800 rounded-full w-1/2 mx-auto transition-colors duration-500"></div>
      </div>
    </div>
  );
}
