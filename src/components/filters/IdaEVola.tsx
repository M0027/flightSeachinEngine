'use client'
import { useFlightStore } from "../../store/useFlightStore";
import { colors } from "../../statics/color";

export function IdaEVola() {
  const { filters, setFilters } = useFlightStore();

  return (
    <div style={{ display: "flex", gap: 12 }}>
      <button
        onClick={() =>
          setFilters({ ...filters, tripType: "oneway" })
        }
        style={{
          background:
            filters.tripType === "oneway"
              ? colors.primary
              : colors.grayLight,
          color: colors.secondary,
        }}
      >
        Só ida
      </button>

      <button
        onClick={() =>
          setFilters({ ...filters, tripType: "roundtrip" })
        }
        style={{
          background:
            filters.tripType === "roundtrip"
              ? colors.primary
              : colors.grayLight,
          color: colors.secondary,
        }}
      >
        Ida e volta
      </button>
    </div>
  );
}
