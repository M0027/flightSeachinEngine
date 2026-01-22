'use client'

import Header from "../../src/components/ui/Header";
import Footer from "../../src/components/ui/Footer";
import { useFlightStore } from "../../src/store/useFlightStore";
import { formatDuration } from "../../src/utils/formatDuration";
import { colors } from "../../src/statics/color";
import { PlaneTakeoff, PlaneLanding, Clock, Building2, Hash, ArrowRight } from "lucide-react";

export default function DetalhesPage() {
  const selectedFlight = useFlightStore((state) => state.selectedFlight);

  
  if (!selectedFlight) {
    return (
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-1 flex flex-col items-center justify-center px-4 text-center">
          <PlaneTakeoff className="w-14 h-14 mb-4" style={{ color: colors.primary }} />
          <h1 className="text-xl font-semibold mb-2">No flight selected</h1>
          <p className="text-sm text-gray-600 max-w-md">
            Choose a flight from the results list to see full details.
          </p>
        </main>
        <Footer />
      </div>
    );
  }

  const formattedDuration = formatDuration(selectedFlight.duration);

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Header />

      <main className="flex-1 px-4 py-8 max-w-6xl mx-auto w-full space-y-6">

        {/* 🔹 HEADER / SUMMARY */}
        <div className="bg-white rounded-2xl p-6 shadow-sm">
          <h1 className="text-xl font-semibold mb-4">Flight Details</h1>

          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div className="flex items-center gap-3">
              <PlaneTakeoff className="w-5 h-5" style={{ color: colors.primary }} />
              <span className="font-medium">{selectedFlight.departure}</span>
              <ArrowRight className="w-4 h-4 text-gray-400" />
              <PlaneLanding className="w-5 h-5" style={{ color: colors.primary }} />
              <span className="font-medium">{selectedFlight.arrival}</span>
            </div>

            <div className="text-lg font-semibold" style={{ color: colors.quaternary }}>
              {selectedFlight.price} €
            </div>
          </div>
        </div>

        {/*  DETAILS GRID */}
        <div className="bg-white rounded-2xl p-6 shadow-sm">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">

            <Info label="Companhia" value={selectedFlight.airline} icon={<Building2 />} />
            <Info label="Nº do voo" value={selectedFlight.flightNumber} icon={<Hash />} />
            <Info label="Duração" value={formattedDuration} icon={<Clock />} />

            <Info
              label="Partida"
              value={new Date(selectedFlight.departureTime).toLocaleString()}
            />

            <Info
              label="Chegada"
              value={new Date(selectedFlight.arrivalTime).toLocaleString()}
            />

            <Info
              label="Paradas"
              value={selectedFlight.stops === 0 ? "Direto" : `${selectedFlight.stops} paradas`}
            />

            {selectedFlight.returnDate && (
              <Info
                label="Retorno"
                value={new Date(selectedFlight.returnDate).toLocaleString()}
              />
            )}
          </div>
        </div>

        {/* CTA (opcional ) */}
        {/* 
        <button
          className="w-full rounded-xl py-3 text-white font-semibold transition hover:opacity-90"
          style={{ backgroundColor: colors.primary }}
        >
          Book this flight
        </button> 
        */}
      </main>

      <Footer />
    </div>
  );
}

/* 🔹 Componente reutilizável de informação */
function Info({
  label,
  value,
  icon,
}: {
  label: string;
  value: string;
  icon?: React.ReactNode;
}) {
  return (
    <div className="border border-gray-100 rounded-xl p-4">
      <div className="flex items-center gap-2 text-sm text-gray-500 mb-1">
        {icon && <span className="text-gray-400">{icon}</span>}
        {label}
      </div>
      <div className="font-medium text-gray-900 text-sm">
        {value}
      </div>
    </div>
  );
}
