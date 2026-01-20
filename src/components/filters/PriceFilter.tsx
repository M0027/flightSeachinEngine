'use client'
import { colors } from "../../statics/color";
import { useFlightStore } from "../../store/useFlightStore";

export function PriceFilter() {
  const { filters, setFilters } = useFlightStore();

  return (
    <div style={{ marginBottom: 16 }}>
      <label>max price: {filters.priceRange?.[1] ?? 0}€</label>
      <input
        type="range"
        min={0}
        max={2000}
        value={filters.priceRange?.[1] ?? 0}
        onChange={(e) =>
          setFilters({
            ...filters,
            priceRange: [0, Number(e.target.value)],
          })
        }
        style={{ width: "100%", accentColor: colors.quaternary }}
      />
    </div>
  );
}
