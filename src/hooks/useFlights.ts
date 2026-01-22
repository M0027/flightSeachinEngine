import { useFlightStore } from "../store/useFlightStore";
import { searchFlights } from "../services/amadeusClient";
import { normalizeFlights } from "../utils/normalizeFlights";

export function useFlights() {
  //  acess actions do store
  const setFlights = useFlightStore((state) => state.setFlights);
  const setLoading = useFlightStore((state) => state.setLoading);
  const setError = useFlightStore((state) => state.setError);

  //Function to be called by the component
  async function performFlightSearch(searchParams: any) {
    try {
      // start loading
      setLoading(true);
      setError(null);

      // call the service
      const response = await searchFlights(searchParams);

      const normalizedFlights = normalizeFlights(
        response?.data || []
      );

      setFlights(normalizedFlights);
    } catch (error: any) {
      // Extract the specific Amadeus error code
      const errorCode = error?.response?.data?.errors?.[0]?.code;

      if (errorCode === 141) {
        setError("This route is not available in the Amadeus test environment. Please try major hubs like NYC to LON.");
      } else if (error?.response?.status === 401) {
        setError("Authentication failed. Please check your API keys.");
      } else {
        setError("Unable to fetch flight offers. Please try again.");
      }
    }
    finally {

      setLoading(false);
    }
  }

  return {
    searchFlights: performFlightSearch,
  };
}
