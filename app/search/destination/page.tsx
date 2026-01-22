"use client";

import { useRouter } from "next/navigation";
import { useMemo, useState } from "react";
import { airports } from "../../../src/statics/airports";
import { colors } from "../../../src/statics/color";
import { useFlightStore } from "../../../src/store/useFlightStore"

export default function DestinationPage() {
    const router = useRouter();
    const setSearchParams = useFlightStore((s) => s.setSearchParams);
    const searchParams = useFlightStore((s) => s.searchParams);
    const [query, setQuery] = useState("");
    const [selected, setSelected] = useState<{ code: string; name: string } | null>(null);

    const filtered = useMemo(() => {
        if (!query) return airports.slice(0, 10);
        return airports
            .filter(
                (a) =>
                    a.name.toLowerCase().includes(query.toLowerCase()) ||
                    a.code.toLowerCase().includes(query.toLowerCase())
            )
            .slice(0, 10);
    }, [query]);

    const handleConfirm = () => {
        if (selected) {
            setSearchParams({
                ...searchParams,
                destination: selected.code,
            });
            router.back();
        }};

        return (
            <div className="min-h-screen bg-gray-50 px-4 pt-6 pb-28">
                <div className="mx-auto w-full max-w-xl">
                    <h1 className="text-lg font-semibold">Destination</h1>
                    <p className="text-sm text-gray-500 mb-4">choose the destination airport</p>

                    <input
                        value={query}
                        onChange={(e) => {
                            setQuery(e.target.value);
                            setSelected(null);
                        }}
                        placeholder="Digite cidade ou código"
                        className="w-full mb-4 rounded-xl border px-4 py-3 text-sm shadow-sm focus:outline-none focus:ring-2"
                        style={{ background: colors.grayLight }}
                    />

                    <div className="space-y-2">
                        {filtered.map((airport) => (
                            <button
                                key={airport.code}
                                onClick={() => setSelected(airport)}
                                className={`w-full rounded-xl px-4 py-3 text-left transition
              ${selected?.code === airport.code
                                        ? "bg-blue-50 border border-blue-500"
                                        : "bg-white border hover:shadow-sm"
                                    }`}
                            >
                                <p className="text-sm font-medium">{airport.name}</p>
                                <p className="text-xs text-gray-500">{airport.code}</p>
                            </button>
                        ))}
                    </div>
                </div>

                <footer className="fixed bottom-0 left-0 right-0 bg-white p-4 shadow">
                    <div className="mx-auto w-full max-w-xl px-4">
                        <button
                            onClick={() => {
                                handleConfirm();
                            }}
                            disabled={!selected}
                            className="w-full rounded-xl py-3 font-semibold text-white disabled:opacity-50"
                            style={{ backgroundColor: colors.primary }}
                        >
                            Select
                        </button>
                    </div>
                </footer>
            </div>
        );
    }
