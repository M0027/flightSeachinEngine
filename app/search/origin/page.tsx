"use client";

import { useRouter } from "next/navigation";
import { useMemo, useState } from "react";
import { airports } from "../../../src/statics/airports";
import { colors } from "../../../src/statics/color";
import { useFlightStore } from "../../../src/store/useFlightStore";

export default function OriginPage() {
    const router = useRouter();
    const setSearchParams = useFlightStore((s) => s.setSearchParams);
    const searchParams = useFlightStore((s) => s.searchParams);
    const [query, setQuery] = useState("");
    const [selected, setSelected] = useState<{
        code: string;
        name: string;
    } | null>(null);

    const filteredAirports = useMemo(() => {
        if (!query) return airports.slice(0, 10);

        return airports
            .filter((airport) =>
                airport.name.toLowerCase().includes(query.toLowerCase()) ||
                airport.code.toLowerCase().includes(query.toLowerCase())
            )
            .slice(0, 10);
    }, [query]);

    function handleSelect(airport: { code: string; name: string }) {
        setSelected(airport);
        setQuery(airport.name);
    }

    function handleConfirm() {
        if (!selected) return;

        /**
         *
         * hire we are going back taking the CODE.
         *
         * than you are going to link this to the SearchForm state.
         */
        setSearchParams({
            ...searchParams,
            origin: selected.code,
        });

        router.back();
    }

    return (
        <div className="min-h-screen bg-gray-50 px-4 pt-6 pb-28">
            <div className="mx-auto w-full max-w-xl">
                {/* Header */}
                <header className="mb-6">
                    <h1 className="text-lg font-semibold text-gray-900">departure location</h1>
                    <p className="text-sm text-gray-500">choose the departure airport</p>
                </header>

                {/* Input */}
                <div className="mb-4">
                    <input
                        type="text"
                        placeholder="Digite cidade ou código (ex: LIS)"
                        value={query}
                        onChange={(e) => {
                            setQuery(e.target.value);
                            setSelected(null);
                        }}
                        className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm shadow-sm focus:border-transparent focus:outline-none focus:ring-2"
                        style={{ background: colors.grayLight }}
                    />
                </div>

                {/* Sugestões */}
                <div className="space-y-2">
                    {filteredAirports.map((airport) => {
                        const isSelected = selected?.code === airport.code;

                        return (
                            <button
                                key={airport.code}
                                onClick={() => handleSelect(airport)}
                                className={`w-full rounded-xl px-4 py-3 text-left transition-all duration-150 ${
                                    isSelected
                                        ? "bg-blue-50 border border-blue-500"
                                        : "bg-white border border-gray-200 hover:shadow-sm"
                                }`}
                            >
                                <div className="flex justify-between items-center">
                                    <div>
                                        <p className="text-sm font-medium text-gray-900">{airport.name}</p>
                                        <p className="text-xs text-gray-500">{airport.code}</p>
                                    </div>
                                </div>
                            </button>
                        );
                    })}
                </div>
            </div>

            {/* Botão OK */}
            <div className="fixed bottom-0 left-0 right-0 bg-white p-4 shadow-[0_-4px_12px_rgba(0,0,0,0.06)]">
                <div className="mx-auto w-full max-w-xl px-4">
                    <button
                        disabled={!selected}
                        onClick={() => handleConfirm()}
                        className="w-full rounded-xl py-3 font-semibold text-white transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                        style={{ backgroundColor: colors.primary }}
                    >
                        Select
                    </button>
                </div>
            </div>
        </div>
    );
}
