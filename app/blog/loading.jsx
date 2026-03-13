export default function Loading() {
  return (
    <div className="min-h-screen bg-white dark:bg-black transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header Skeleton */}
        <div className="text-center mb-16 space-y-4 animate-pulse">
          <div className="h-12 bg-gray-100 dark:bg-gray-800 rounded-2xl w-48 mx-auto"></div>
          <div className="h-4 bg-gray-50 dark:bg-gray-900 rounded-full w-64 mx-auto"></div>
        </div>

        {/* Grid Skeleton */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div 
              key={i} 
              className="flex flex-col overflow-hidden rounded-2xl border border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-900/50 p-6 space-y-6 animate-pulse transition-colors duration-500"
            >
              <div className="space-y-3">
                {/* Category tag */}
                <div className="h-6 bg-blue-50 dark:bg-blue-900/30 rounded-full w-20"></div>
                {/* Title */}
                <div className="h-8 bg-gray-100 dark:bg-gray-800 rounded-xl w-full"></div>
                {/* Excerpt */}
                <div className="space-y-2">
                  <div className="h-4 bg-gray-50 dark:bg-gray-900 rounded-full w-full"></div>
                  <div className="h-4 bg-gray-50 dark:bg-gray-900 rounded-full w-5/6"></div>
                  <div className="h-4 bg-gray-50 dark:bg-gray-900 rounded-full w-4/6"></div>
                </div>
              </div>

              {/* Footer info */}
              <div className="pt-6 border-t border-gray-50 dark:border-gray-800 flex items-center justify-between transition-colors duration-500">
                <div className="flex items-center space-x-3">
                  <div className="h-10 w-10 rounded-full bg-gray-100 dark:bg-gray-800"></div>
                  <div className="space-y-2">
                    <div className="h-3 bg-gray-100 dark:bg-gray-800 rounded-full w-16"></div>
                    <div className="h-2 bg-gray-50 dark:bg-gray-900 rounded-full w-12"></div>
                  </div>
                </div>
                <div className="h-4 bg-blue-50 dark:bg-blue-900/30 rounded-full w-12"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
