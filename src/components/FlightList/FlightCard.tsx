import { colors } from "../../statics/color";
import { airlineLogos } from "../../statics/airlines";
import { formatDuration } from "../../utils/formatDuration";
import { useRouter } from 'next/navigation';
import { useFlightStore } from "../../store/useFlightStore";
import { Flight } from "../../types/interfaces";

export function FlightCard({ flight }: { flight: Flight }) {
  const router = useRouter();
  const logo = airlineLogos[flight.airline];
  const formattedDuration = formatDuration(flight.duration);
  const setSelectedFlight = useFlightStore((state) => state.setSelectedFlight);

  const handleDitaisl = () => {
    setSelectedFlight(flight);
    router.push(`/fligtDetals`);
  };

  return (
    <div
      style={{
        background: colors.secondary,
        borderRadius: 14,
        padding: 16,
        marginBottom: 16,
        marginLeft: 0,
        marginRight: 0,
        boxShadow: "0 6px 16px rgba(0,0,0,0.12)",
      }}
    >
      {/* HEADER */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {/* Airline */}
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          {logo && (
            <img
              src={logo}
              alt={flight.airline}
              style={{
                width: 36,
                height: 36,
                objectFit: "contain",
              }}
            />
          )}
          <strong>{flight.airline}</strong>
        </div>

        {/* Price */}
        <strong
          style={{
            color: colors.quaternary,
            fontSize: 18,
          }}
        >
          {flight.price}€
        </strong>
      </div>

      {/* ROUTE */}
      <div style={{ marginTop: 12, fontSize: 15 }}>
        <span>{flight.departure}</span> →
        <span> {flight.arrival}</span>
      </div>

      {/* DETAILS */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: 10,
          color: colors.grayDark,
          fontSize: 14,
        }}
      >
        <span>
          {flight?.stops === 0 ? "Diret" : `${flight.stops} paradas`}
        </span>
        <span>{formattedDuration}</span>
      </div>

      {/* ACTION */}
      <button

      onClick={handleDitaisl}
        style={{
          marginTop: 14,
          width: "100%",
          background: colors.primary,
          color: colors.secondary,
          padding: 12,
          borderRadius: 10,
          border: "none",
          fontWeight: 600,
          cursor: "pointer",
        }}
      >
        Ditails
      </button>
    </div>
  );
}
