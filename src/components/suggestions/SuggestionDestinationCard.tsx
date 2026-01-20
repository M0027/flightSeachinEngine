import Image from 'next/image';

interface SuggestionDestinationCardProps {
  city: string;
  touristSpot: string;
  imageUrl: string;
}

export function SuggestionDestinationCard({
  city,
  touristSpot,
  imageUrl,
}: SuggestionDestinationCardProps) {
  return (
    <div className="relative overflow-hidden rounded-lg shadow-lg group">
      <Image
        src={imageUrl}
        alt={city}
        width={400}
        height={300}
        className="w-full h-48 object-cover transform transition-transform duration-500 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-70 group-hover:opacity-80 transition-opacity duration-300"></div>
      <div className="absolute bottom-0 left-0 p-4 text-white">
        <h3 className="text-xl font-bold group-hover:text-orange-300 transition-colors duration-300">{city}</h3>
        <p className="text-sm opacity-90 group-hover:opacity-100 transition-opacity duration-300">{touristSpot}</p>
      </div>
    </div>
  );
}
