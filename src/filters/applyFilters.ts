import { Flight , Filters} from "../types/interfaces";

export function applyFilters(flights: Flight[], filters: Filters): Flight[] {


    console.log("Voooos:", flights); 
    console.log("filters:", filters);
    // console.log("Applying filters:", filters);
  return flights.filter((flight) => {
    // prices
    if (
      flight.price < filters.priceRange[0] ||
      flight.price > filters.priceRange[1]
    ) {
      return false;
    }

    // stops
    if (filters.stops !== "all" && flight.stops !== filters.stops) {
      return false;
    }

    // airline
    if (filters.airline !== "all" && flight.airline !== filters.airline) {
      return false;
    }

    // trip type
    if (filters.tripType === "roundtrip" && !flight.returnDate) {
      return false;
    }

    return true;
  });
}
