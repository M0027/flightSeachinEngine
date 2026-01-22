export interface SearchParams {
  origin: string;
  destination: string;
  departureDate: string;
  adults?: number;

  
}

export interface Flight {
  id: number;
  price: number;
  stops: number;
  flightNumber: string;
  arrivalTime: string;
  airline: string;
  departure: string;
  arrival: string;
  duration: string;
  departureTime: string;
  returnDate?: string | null;
}

export interface Filters {
  priceRange: [number, number];
  stops: number | "all";
  airline: string | "all";
  tripType: "oneway" | "roundtrip" | string;
}


export interface SearchValues  {
  origin: string;
  destination: string;
  date: string;
  passengers: number;
};

export interface SearchFormProps {
  values: SearchValues;
};

export interface SuggestionDestinationCardProps {
  city: string;
  touristSpot: string;
  imageUrl: string;
  priority?: boolean;
}

