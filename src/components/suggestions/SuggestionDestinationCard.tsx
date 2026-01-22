import Image from "next/image";
import { SuggestionDestinationCardProps } from "../../types/interfaces";


export function SuggestionDestinationCard({
  city,
  touristSpot,
  imageUrl,
  priority = false,
}: SuggestionDestinationCardProps) {
  return (
    <article
      className="
        group relative overflow-hidden rounded-2xl
        bg-neutral-900 shadow-md transition-all duration-300
        hover:shadow-xl hover:-translate-y-1
        focus-within:ring-2 focus-within:ring-primary
      "
    >
      {/* Image Wrapper */}
      <div className="relative h-56 w-full">
        <Image
          src={imageUrl}
          alt={`View of ${city}, ${touristSpot}`}
          fill
          priority={priority}
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          className="
            object-cover transition-transform duration-700
            group-hover:scale-110
          "
        />

        {/* Gradient overlay */}
        <div
          className="
            pointer-events-none absolute inset-0
            bg-gradient-to-t from-black/80 via-black/30 to-transparent
            transition-opacity duration-300
            group-hover:from-black/90
          "
        />
      </div>

      {/* Content */}
      <div className="absolute bottom-0 left-0 right-0 p-4">
        <h3
          className="
            text-lg font-semibold text-white
            tracking-tight transition-colors duration-300
            group-hover:text-primary
          "
        >
          {city}
        </h3>

        <p className="mt-1 text-sm text-neutral-200 line-clamp-2">
          {touristSpot}
        </p>
      </div>
    </article>
  );
}
