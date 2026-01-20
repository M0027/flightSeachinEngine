/**
 * Função para normalizar os dados brutos da Amadeus
 * Function to normalize raw Amadeus data
 */
export function normalizeFlights(flightOffers: any[]) {
  return flightOffers.map((offer) => {
    const itinerary = offer.itineraries[0]; 
    const segment = itinerary.segments[0]; 

    return {
      id: offer.id,
      departure: segment.departure.iataCode,
      arrival: segment.arrival.iataCode,
      departureTime: segment.departure.at,
      arrivalTime: segment.arrival.at,
      duration: itinerary.duration,
      airline: segment.carrierCode,
      flightNumber: segment.number,
      price: offer.price.total,
      currency: offer.price.currency,
    };
  });
}
