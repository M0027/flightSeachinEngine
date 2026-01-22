'use client'
import { useFlightStore } from "../../store/useFlightStore";
import {airlines} from '../../statics/airlines'


export function AirlineFilter() {
  const { filters, setFilters } = useFlightStore();

  return (
    <div>
      <label className="block text-lg font-medium text-gray-700 mb-1">airlines</label>
      <select className="outline-0"
        value={filters.airline}
        onChange={(e) =>
          setFilters({ ...filters, airline: e.target.value })
        }
      >
        <option className="text-lg" value="all">All</option>
        {airlines.map((airline) => (
          <option key={airline} value={airline}>
            {airline}
          </option>
        ))}
      </select>
    </div>
  );
}
