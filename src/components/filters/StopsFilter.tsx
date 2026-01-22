
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
      <label className="font-bold text-gray-500">Stops:</label>
      <select className="outline-none " value={filters.stops} onChange={handleChange}>
        <option className="font-bold text-gray-400" value="all">all</option>
        <option className="font-bold text-gray-400" value="0">Diretc</option>
        <option className="font-bold text-gray-400" value="1">1 stop</option>
        <option className="font-bold text-gray-400" value="2">2+ stops</option>
      </select>
    </div>
  );
}
