'use client'
import { useFlightStore } from "../../store/useFlightStore";
import { colors } from "../../statics/color";

export function IdaEVola() {
  const { filters, setFilters } = useFlightStore();

  return (
    <div style={{ display: "flex", gap: 12 }}>
      <button className="px-2 py-1 rounded-l text-lg font-bold"
        onClick={() =>
          setFilters({ ...filters, tripType: "oneway" })
        }
        style={{
          background:
            filters.tripType === "oneway"
              ? colors.primary
              : colors.grayLight,
          color: 
          filters.tripType === "oneway"
          ? colors.grayLight
          : colors.primary,
          
        }}
      >
       One way
      </button>

      <button
      className="px-2 py-1 rounded-l  text-lg font-bold"
        onClick={() =>
          setFilters({ ...filters, tripType: "roundtrip" })
        }
        style={{
          background:
            filters.tripType === "roundtrip"
              ? colors.primary
              : colors.grayLight,

          color:  filters.tripType === "roundtrip"
          ? colors.grayLight
          : colors.primary
        }}
      >
        Roundtrip
      </button>
    </div>
  );
}
