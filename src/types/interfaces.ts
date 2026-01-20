export interface SearchParams {
  origin: string;
  destination: string;
  departureDate: string;
  adults?: number;
}

// export interface Filters {
//   maxPrice?: number;
//   airlines?: string[];
// }

export interface Flight {
  price: number;
  stops: number;
  airline: string;
  returnDate?: string | null;
  // allow additional properties if present
  [key: string]: unknown;
}

export interface Filters {
  priceRange: [number, number];
  stops: number | "all";
  airline: string | "all";
  tripType: "roundtrip" | "oneway" | string;
}