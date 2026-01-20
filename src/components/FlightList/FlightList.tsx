import { useFlightStore } from "../../store/useFlightStore";
import { applyFilters } from "../../filters/applyFilters";
import { sortFlights } from "../../components/filters/sortFlights";
import { FlightCard } from "./FlightCard";
import { FlightSkeleton } from "./FlightSkeleton";

export function FlightList() {
  const flights = useFlightStore((s) => s.flights);
  const filters = useFlightStore((s) => s.filters);
  const loading = useFlightStore((s) => s.loading);

const gridStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
  gap: 16,
};


  
  // memoize com useMemo se necessário
  const visibleFlights = sortFlights(
    applyFilters(flights, filters)
  );

  if (loading) {
    return (
      <div style={gridStyle}>
        {[1, 2, 3].map((i) => (
          <FlightSkeleton key={i} />
        ))}
      </div>
    );
  }

  if (!visibleFlights.length) {
    return <p>Nenhum voo encontrado.</p>;
  }

  return (
    <div style={gridStyle}>
      {visibleFlights.map((flight) => (
        <FlightCard key={String(flight.id)} flight={flight} />
      ))}
    </div>
  );
}
