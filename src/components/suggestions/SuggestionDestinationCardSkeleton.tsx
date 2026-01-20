export function SuggestionDestinationCardSkeleton() {
  return (
    <div className="relative overflow-hidden rounded-lg shadow-lg group animate-pulse">
      <div className="w-full h-48 bg-gray-300"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-70"></div>
      <div className="absolute bottom-0 left-0 p-4 text-white">
        <div className="h-6 bg-gray-400 rounded w-3/4 mb-2"></div>
        <div className="h-4 bg-gray-400 rounded w-1/2"></div>
      </div>
    </div>
  );
}
