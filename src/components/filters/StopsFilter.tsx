
'use client'
import { useFlightStore } from "../../store/useFlightStore";

export function StopsFilter() {
  const { filters, setFilters } = useFlightStore();

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value === "all" ? "all" : Number(e.target.value);
    setFilters({ ...filters, stops: value });
  };

  return (
    <div>
      <label>Stops:</label>
      <select value={filters.stops} onChange={handleChange}>
        <option value="all">all</option>
        <option value="0">Diretc</option>
        <option value="1">1 stop</option>
        <option value="2">2+ stops</option>
      </select>
    </div>
  );
}
