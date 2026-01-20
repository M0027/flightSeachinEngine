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
    } catch (error) {
      console.error(error);
      setError("Erro ao buscar voos");
    } finally {
      
      setLoading(false);
    }
  }

  return {
    searchFlights: performFlightSearch,
  };
}
