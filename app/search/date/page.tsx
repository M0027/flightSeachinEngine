"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { colors } from "../../../src/statics/color";
import { useFlightStore } from "../../../src/store/useFlightStore";



export default function DatePage() {

    const searchParams = useFlightStore((s) => s.searchParams);
    const setSearchParams = useFlightStore((s) => s.setSearchParams);
    const router = useRouter();
    const [date, setDate] = useState("");

     const handleConfirm = () => {
                        setSearchParams({
                            ...searchParams,
                            departureDate: date,
                        });
                        router.back();
                    }
    return (
        <div className="min-h-screen bg-gray-50 px-4 pt-6 pb-28">
            <div className="mx-auto w-full max-w-xl">
                <h1 className="text-lg font-semibold">Date of flight</h1>
                <p className="text-sm text-gray-500 mb-6">choice of departure date</p>

                <input
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="w-full rounded-xl border px-4 py-3 text-sm shadow-sm focus:outline-none focus:ring-2"
                    style={{ background: colors.grayLight }}
                />
            </div>

            <footer className="fixed bottom-0 left-0 right-0 bg-white p-4 shadow">
                <div className="mx-auto w-full max-w-xl px-4">
                    <button
                        disabled={!date}
                        onClick={() => handleConfirm()}
                        className="w-full rounded-xl py-3 font-semibold text-white disabled:opacity-50"
                        style={{ background: colors.primary }}
                    >
                        Select
                    </button>
                </div>
            </footer>
        </div>
    );
}
