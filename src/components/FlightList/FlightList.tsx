'use client';
import { useRouter } from "next/navigation";
import { useFlightStore } from "../../store/useFlightStore";
import { applyFilters } from "../../filters/applyFilters";
import { sortFlights } from "../../components/filters/sortFlights";
import { FlightCard } from "./FlightCard";
import { FlightSkeleton } from "./FlightSkeleton";
import { EmptyFlightsState } from "./EmptyFlightsState";

export function FlightList() {
  const router = useRouter();
  const flights = useFlightStore((s) => s.flights);
  const filters = useFlightStore((s) => s.filters);
  const loading = useFlightStore((s) => s.loading);

const gridStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fill, minmax(290px, 1fr))",
  gap: 10,
};


  
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
  return (
    <EmptyFlightsState
      onChangeDate={() => router.push("/search/date")}
    />
  );
}


  return (
    <>
    <h1 className="text-xl font-bold block ml-5 text-orange-400 mt-2 mb-5">Flight List</h1>
    <div style={gridStyle}>
      {visibleFlights.map((flight) => (
        <FlightCard key={String(flight.id)} flight={flight} />
      ))}
    </div>
      </>
  );
}
