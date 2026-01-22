'use client'

import { Plane } from "lucide-react";
import { colors } from "../src/statics/color";

export default function Loading() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white">

      <div className="flex flex-col items-center gap-4 animate-fade-in">

        {/* Ícone */}
        <div className="relative">
          <Plane
            className="w-10 h-10 animate-bounce"
            style={{ color: colors.primary }}
          />

          {/* Pulse ring */}
          <span
            className="absolute inset-0 rounded-full animate-ping opacity-20"
            style={{ backgroundColor: colors.primary }}
          />
        </div>

        {/* Texto */}
        <p className="text-sm tracking-wide text-gray-600">
          Loading...
        </p>

      </div>
    </div>
  );
}
