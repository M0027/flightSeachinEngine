"use client";
import { useState, FormEvent } from "react";
import { useRouter } from "next/navigation";
import { useFlights } from "../../hooks/useFlights";
import { useFlightStore } from "../../store/useFlightStore";
import { colors } from "../../statics/color";
import { airports } from "../../statics/airports";
import { Search } from "lucide-react";

export function SearchForm() {

    const routes = useRouter();
  const gridStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
    gap: 12,
  };

  const [origin, setOrigin] = useState("");
  const [destination, setDestination] = useState("");
  const [departureDate, setDepartureDate] = useState("");

  const [originSuggestions, setOriginSuggestions] = useState<
    { code: string; name: string }[]
  >([]);
  const [showOriginSuggestions, setShowOriginSuggestions] = useState(false);
  const [destinationSuggestions, setDestinationSuggestions] = useState<
    { code: string; name: string }[]
  >([]);
  const [showDestinationSuggestions, setShowDestinationSuggestions] =
    useState(false);

  const handleOriginChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setOrigin(value);
    if (value.length > 1) {
      const filteredSuggestions = airports.filter(
        (airport) =>
          airport.name.toLowerCase().includes(value.toLowerCase()) ||
          airport.code.toLowerCase().includes(value.toLowerCase())
      );
      setOriginSuggestions(filteredSuggestions);
      setShowOriginSuggestions(true);
    } else {
      setShowOriginSuggestions(false);
    }
  };

  const handleDestinationChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setDestination(value);
    if (value.length > 1) {
      const filteredSuggestions = airports.filter(
        (airport) =>
          airport.name.toLowerCase().includes(value.toLowerCase()) ||
          airport.code.toLowerCase().includes(value.toLowerCase())
      );
      setDestinationSuggestions(filteredSuggestions);
      setShowDestinationSuggestions(true);
    } else {
      setShowDestinationSuggestions(false);
    }
  };

  const handleOriginSelect = (code: string) => {
    setOrigin(code);
    setShowOriginSuggestions(false);
  };

  const handleDestinationSelect = (code: string) => {
    setDestination(code);
    setShowDestinationSuggestions(false);
  };

  const handleInputFocus = (
    setInputSuggestions: React.Dispatch<
      React.SetStateAction<{ code: string; name: string }[]>
    >,
    setShowSuggestions: React.Dispatch<React.SetStateAction<boolean>>
  ) => {
    setInputSuggestions(airports);
    setShowSuggestions(true);
  };

  const handleInputBlur = (
    setShowSuggestions: React.Dispatch<React.SetStateAction<boolean>>
  ) => {
    // Delay hiding to allow click event on suggestions to register
    setTimeout(() => setShowSuggestions(false), 100);
  };

  const { searchFlights } = useFlights();
  const setSearchParams = useFlightStore((s) => s.setSearchParams);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const params = {
      origin: origin.toUpperCase(),
      destination: destination.toUpperCase(),
      departureDate,
    };

    setSearchParams(params);

    searchFlights(params);

    routes.push("/listFlight");
  }

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        background: colors.secondary,
        padding: 16,
        borderRadius: 14,
        boxShadow: "0 6px 16px rgba(0,0,0,0.1)",
        marginBottom: 20,
      }}
    >
      <div style={gridStyle}>
        {/* ORIGEM */}
        <div className="relative flex gap-2">
          <label>Origin: </label>
          <input
            type="text"
            placeholder="LIS"
            value={origin}
            onChange={handleOriginChange}
            onFocus={() =>
              handleInputFocus(setOriginSuggestions, setShowOriginSuggestions)
            }
            onBlur={() => handleInputBlur(setShowOriginSuggestions)}
            required
            className="focus:border-orange-300 focus:border-2 outline-0 focus:rounded-l px-4"
          />
          {showOriginSuggestions && originSuggestions.length > 0 && (
            <ul className="absolute z-10 bg-white border border-gray-300 w-full mt-10 rounded-md shadow-lg max-h-60 overflow-y-auto">
              {originSuggestions.map((airport) => (
                <li
                  key={airport.code}
                  onMouseDown={() => handleOriginSelect(airport.code)}
                  className="px-4 py-2 cursor-pointer hover:bg-gray-100"
                >
                  {airport.code} - {airport.name}
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className="relative flex gap-2">
          <label>distinction: </label>
          <input
            type="text"
            placeholder="MAD"
            value={destination}
            onChange={handleDestinationChange}
            onFocus={() =>
              handleInputFocus(
                setDestinationSuggestions,
                setShowDestinationSuggestions
              )
            }
            onBlur={() => handleInputBlur(setShowDestinationSuggestions)}
            required
            className="focus:border-orange-300 focus:border-2 outline-0 focus:rounded-l px-4"
          />
          {showDestinationSuggestions && destinationSuggestions.length > 0 && (
            <ul className="absolute z-10 bg-white border border-gray-300 w-full mt-10 rounded-md shadow-lg max-h-60 overflow-y-auto">
              {destinationSuggestions.map((airport) => (
                <li
                  key={airport.code}
                  onMouseDown={() => handleDestinationSelect(airport.code)}
                  className="px-4 py-2 cursor-pointer hover:bg-gray-100"
                >
                  {airport.code} - {airport.name}
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* DATE */}
        <div className="flex gap-2">
          <label>Date: </label>
          <input
            type="date"
            value={departureDate}
            onChange={(e) => setDepartureDate(e.target.value)}
            required
            className="focus:border-orange-300 focus:border-2 outline-0 focus:rounded-l px-4"
          />
        </div>
      </div>

      <button
        type="submit"
        className="flex items-center justify-center gap-2 mt-4 px-6 py-3 rounded-lg shadow-md transition-all duration-300
                           hover:bg-orange-600 active:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-opacity-75"
        style={{
          background: colors.primary,
          color: colors.secondary,
          border: "none",
          fontWeight: 600,
          cursor: "pointer",
        }}
      >
        <Search size={20} />
        Search Flight
      </button>
    </form>
  );
}
