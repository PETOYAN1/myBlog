export default function Loading() {
  return (
    <div className="min-h-screen bg-white py-16 px-4 sm:px-6 lg:px-8">
      <article className="max-w-3xl mx-auto animate-pulse">
        <header className="mb-12 space-y-6">
          {/* Back link skeleton */}
          <div className="h-4 bg-gray-100 rounded-full w-24"></div>
          {/* Title skeleton */}
          <div className="space-y-3">
            <div className="h-12 bg-gray-100 rounded-2xl w-full"></div>
            <div className="h-12 bg-gray-100 rounded-2xl w-3/4"></div>
          </div>
          {/* Author info skeleton */}
          <div className="flex items-center p-6 bg-gray-50 rounded-2xl space-x-4">
            <div className="h-14 w-14 rounded-full bg-gray-200 shadow-md"></div>
            <div className="space-y-2">
              <div className="h-4 bg-gray-200 rounded-full w-32"></div>
              <div className="h-3 bg-gray-100 rounded-full w-24"></div>
            </div>
          </div>
        </header>

        {/* Content skeleton */}
        <div className="space-y-8">
          <div className="h-4 bg-gray-50 rounded-full w-full"></div>
          <div className="h-4 bg-gray-50 rounded-full w-full"></div>
          <div className="h-4 bg-gray-50 rounded-full w-5/6"></div>
          <div className="h-4 bg-gray-50 rounded-full w-full"></div>
          <div className="h-4 bg-gray-50 rounded-full w-4/6"></div>
          
          <div className="pt-8 h-4 bg-gray-50 rounded-full w-full"></div>
          <div className="h-4 bg-gray-50 rounded-full w-5/6"></div>
          <div className="h-4 bg-gray-50 rounded-full w-full"></div>
        </div>

        {/* Footer tags skeleton */}
        <footer className="mt-16 pt-10 border-t border-gray-100 space-y-4">
          <div className="h-3 bg-gray-100 rounded-full w-16 uppercase tracking-widest"></div>
          <div className="flex flex-wrap gap-3">
            {[1, 2, 3, 4].map(i => (
              <div key={i} className="h-10 bg-gray-50 rounded-xl w-24 border border-gray-100"></div>
            ))}
          </div>
        </footer>
      </article>
    </div>
  );
}
