'use client'
import { useState, FormEvent } from "react";
import { useFlights } from "../../hooks/useFlights";
import { useFlightStore } from "../../store/useFlightStore";
import { colors } from "../../statics/color";

export function SearchForm() {


    const gridStyle = {
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
        gap: 12,
    };

   
    const [origin, setOrigin] = useState("");
    const [destination, setDestination] = useState("");
    const [departureDate, setDepartureDate] = useState("");

    const { searchFlights } = useFlights();
    const setSearchParams = useFlightStore(
        (s) => s.setSearchParams
    );

    function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();

        const params = {
            origin: origin.toUpperCase(),
            destination: destination.toUpperCase(),
            departureDate,
        };


        setSearchParams(params);

       
        searchFlights(params);
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
                <div>
                    <label>Origem</label>
                    <input
                        type="text"
                        placeholder="LIS"
                        value={origin}
                        onChange={(e) => setOrigin(e.target.value)}
                        required
                    />
                </div>

                {/* DESTIN */}
                <div>
                    <label>Destino</label>
                    <input
                        type="text"
                        placeholder="MAD"
                        value={destination}
                        onChange={(e) => setDestination(e.target.value)}
                        required
                    />
                </div>

                {/* DATA */}
                <div>
                    <label>Data</label>
                    <input
                        type="date"
                        value={departureDate}
                        onChange={(e) => setDepartureDate(e.target.value)}
                        required
                    />
                </div>
            </div>

            <button
                type="submit"
                style={{
                    marginTop: 16,
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
                Buscar voos
            </button>
        </form>
    );
}
