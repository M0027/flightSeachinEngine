"use client";

import { useFlightStore } from "../../../src/store/useFlightStore";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { colors } from "../../../src/statics/color";
import { handler } from "next/dist/build/templates/app-page";

export default function PassengersPage() {
    const router = useRouter();
    const [count, setCount] = useState(1);
    const setSearchParams = useFlightStore((s) => s.setSearchParams);
    const searchParams = useFlightStore((s) => s.searchParams);

    function change(value: number) {
        setCount((prev) => Math.max(1, prev + value));
    }

    const handlerConfirm = () => {
        setSearchParams({
            ...searchParams,
            adults: count,

        });
        console.log("sear chParams no PassengersPage:", searchParams.adults);    
        router.back();
    };

    return (
        <div className="min-h-screen bg-gray-50 px-4 pt-6">
            <h1 className="text-lg font-semibold">Passengers</h1>
            <p className="text-sm text-gray-500 mb-6">
                How many people will travel?
            </p>

            <div className="bg-white rounded-xl shadow-sm p-4 flex items-center justify-between">
                <span className="text-sm font-medium">Adults</span>

                <div className="flex items-center gap-4">
                    <button
                        onClick={() => change(-1)}
                        className="h-8 w-8 rounded-full border flex items-center justify-center"
                    >
                        −
                    </button>

                    <span className="font-semibold">{count}</span>

                    <button
                        onClick={() => change(1)}
                        className="h-8 w-8 rounded-full border flex items-center justify-center"
                    >
                        +
                    </button>
                </div>
            </div>

            <footer className="fixed bottom-0 left-0 right-0 bg-white p-4 shadow">
                <button
                    onClick={() => handlerConfirm()}
                    className="w-full rounded-xl py-3 font-semibold text-white"
                    style={{ backgroundColor: colors.primary }}
                >
                    select
                </button>
            </footer>
        </div>
    );
}
