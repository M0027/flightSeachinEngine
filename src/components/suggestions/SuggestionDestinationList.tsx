'use client'
import { useState, useEffect } from 'react';
import { SuggestionDestinationCard } from './SuggestionDestinationCard';
import { SuggestionDestinationCardSkeleton } from './SuggestionDestinationCardSkeleton';
import {destinations} from'../../../data/destinations'
export function SuggestionDestinationList() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate fetching data
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // 2 seconds loading time

    return () => clearTimeout(timer);
  }, []);


  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-4">

        <h2 className="text-xl font-bold mb-4 col-span-full">Most Popular Destinations</h2>
      {loading
        ? Array.from({ length: 4 }).map((_, index) => (
            <SuggestionDestinationCardSkeleton key={index} />
          ))
        : destinations.map((destination, index) => (
            <SuggestionDestinationCard
              key={index}
              city={destination.city}
              touristSpot={destination.touristSpot}
              imageUrl={destination.imageUrl}
            />
          ))}
    </div>
  );
}
