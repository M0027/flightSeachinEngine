"use client";

import { useFlightStore } from "../../store/useFlightStore";
import { useFlights } from "../../hooks/useFlights";
import { useRouter } from "next/navigation";
import { colors } from "../../statics/color";
import { Search } from "lucide-react";
import { airports } from "../../statics/airports";

export default function SearchForm() {
  const router = useRouter();
  const { searchParams } = useFlightStore();

  function getAirportName(code?: string) {
  if (!code) return "Selecionar";
  return airports.find(a => a.code === code)?.name ?? code;
}

console.log("searchParams no SearchForm:", searchParams);


  const { searchFlights } = useFlights();
  const setSearchParams = useFlightStore((s) => s.setSearchParams);

  const handleSearch = () => {

    setSearchParams(searchParams);

    searchFlights(searchParams);

    router.push("/listFlight");
  }


  const cards = [
    {
      label: "Departure",
      value:  getAirportName(searchParams.origin) ?? "Select departure",
      path: "/search/origin",
    },
    {
      label: "Destination",
      value:getAirportName(searchParams.destination) ?? "Select destination",
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
            style={{background:colors.primary}}
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
            <span style={{color:colors.secondary}} className="text-xl font-semibold">
              {card.label}
            </span>

            <span
              className="
                text-m font-medium italic
                truncate
              "  style={{color:colors.secondary}}
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
      </div>
    </div>
  );
}
