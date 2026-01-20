'use client'
import { useFlightStore } from "../../store/useFlightStore";
import {airlines} from '../../statics/airlines'


export function AirlineFilter() {
  const { filters, setFilters } = useFlightStore();

  return (
    <div>
      <label>airlines</label>
      <select
        value={filters.airline}
        onChange={(e) =>
          setFilters({ ...filters, airline: e.target.value })
        }
      >
        <option value="all">All</option>
        {airlines.map((airline) => (
          <option key={airline} value={airline}>
            {airline}
          </option>
        ))}
      </select>
    </div>
  );
}
