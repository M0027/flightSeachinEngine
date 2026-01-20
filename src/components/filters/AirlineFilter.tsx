'use client'
import { useFlightStore } from "../../store/useFlightStore";

const airlines = ["TP", "IB", "AF", "LH"];

export function AirlineFilter() {
  const { filters, setFilters } = useFlightStore();

  return (
    <div>
      <label>Companhia</label>
      <select
        value={filters.airline}
        onChange={(e) =>
          setFilters({ ...filters, airline: e.target.value })
        }
      >
        <option value="all">Todas</option>
        {airlines.map((airline) => (
          <option key={airline} value={airline}>
            {airline}
          </option>
        ))}
      </select>
    </div>
  );
}
