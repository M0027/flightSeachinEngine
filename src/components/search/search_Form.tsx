"use client";
import { useState } from "react";
import { useFlightStore } from "../../store/useFlightStore";
import { useFlights } from "../../hooks/useFlights";
import { useRouter } from "next/navigation";
import { colors } from "../../statics/color";
import { Search } from "lucide-react";
import { airports } from "../../statics/airports";

export default function SearchForm() {
  const router = useRouter();
  const { searchParams } = useFlightStore();
  const [error, setError] = useState<string | null>(null);


  function getAirportName(code?: string) {
    if (!code) return "Selecionar";
    return airports.find(a => a.code === code)?.name ?? code;
  }



  const { searchFlights } = useFlights();
  const setSearchParams = useFlightStore((s) => s.setSearchParams);

  const handleSearch = () => {

    if (
      !searchParams.origin ||
      !searchParams.destination ||
      !searchParams.departureDate ||
      !searchParams.adults
    ) {
      setError("Please complete all required fields to search for flights.");
      return;
    }


    setSearchParams(searchParams);

    searchFlights(searchParams);

    router.push("/listFlight");
  }


  const cards = [
    {
      label: "Departure",
      value: getAirportName(searchParams.origin) ?? "Select departure",
      path: "/search/origin",
    },
    {
      label: "Destination",
      value: getAirportName(searchParams.destination) ?? "Select destination",
      path: "/search/destination",
    },
    {
      label: "Date",
      value: searchParams.departureDate ?? "Select date",
      path: "/search/date",
    },
    {
      label: "Passengers",
      value: searchParams.adults
        ? `${searchParams.adults} passenger(s)`
        : "Select passengers",
      path: "/search/passengers",
    },
  ];

  return (
    <div className="w-full">
      <div
        className="
          grid grid-cols-1 gap-3
          md:grid-cols-5
        "
      >
        {cards.map((card) => (
          <button
            key={card.label}
            onClick={() => router.push(card.path)}
            style={{ background: colors.primary }}
            className="
              flex flex-col justify-center
              h-[72px]
              rounded-xl
              px-4
              text-left
              shadow-sm
              hover:shadow-md
              transition-all
              duration-200
              focus:outline-none
            "
          >
            <span style={{ color: colors.secondary }} className="text-xl font-semibold">
              {card.label}
            </span>

            <span
              className="
                text-m font-medium italic
                truncate
              "  style={{ color: colors.secondary }}
            >
              {card.value}
            </span>
          </button>
        ))}

        {/* Botão Pesquisar */}
        <button
          onClick={() => handleSearch()}
          className="
            h-[72px]
            rounded-xl
            flex items-center justify-center
            font-semibold
            text-2xl
            text-white
            shadow-md
            transition-all
            duration-200
            hover:opacity-90
            active:scale-[0.98]
          "
          style={{ backgroundColor: colors.quaternary }}
        >
          <Search size={26} className="mr-2 " />
          Search
        </button>
        {error && (
          <div className="mb-4 rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
            {error}
          </div>
        )}

      </div>
    </div>
  );
}
