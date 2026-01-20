'use client'
import Header from "../../src/components/ui/Header";
import Footer from "../../src/components/ui/Footer";
import { useFlightStore } from "../../src/store/useFlightStore";
import { formatDuration } from "../../src/utils/formatDuration";

export default function DetalhesPage() {
  const selectedFlight = useFlightStore((state) => state.selectedFlight);

  if (!selectedFlight) {
    return (
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-1 px-4 py-8 max-w-6xl mx-auto">
          <h1 className="text-2xl font-bold mb-6">Detalhes do voo</h1>
          <p>Nenhum voo selecionado.</p>
        </main>
        <Footer />
      </div>
    );
  }

  const formattedDuration = formatDuration(selectedFlight.duration);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 px-4 py-8 max-w-6xl mx-auto">
        <h1 className="text-2xl font-bold mb-6">Detalhes do voo</h1>
        <div className="bg-white p-6 rounded-xl shadow-md">
          <p className="mb-4">Origem: {selectedFlight.departure}</p>
          <p className="mb-4">Destino: {selectedFlight.arrival}</p>
          <p className="mb-4">Companhia Aérea: {selectedFlight.airline}</p>
          <p className="mb-4">Número do voo: {selectedFlight.flightNumber}</p>
          <p className="mb-4">Horário de partida: {new Date(selectedFlight.departureTime).toLocaleString()}</p>
          <p className="mb-4">Horário de chegada: {new Date(selectedFlight.arrivalTime).toLocaleString()}</p>
          <p className="mb-4">Duração: {formattedDuration}</p>
          <p className="mb-4">Paradas: {selectedFlight.stops === 0 ? "Direto" : selectedFlight.stops}</p>
          {selectedFlight.returnDate && <p className="mb-4">Data de retorno: {new Date(selectedFlight.returnDate).toLocaleString()}</p>}
          <p className="mb-4 font-bold text-lg">Preço: {selectedFlight.price}€</p>
          <button className="mt-4 w-full bg-green-900 text-white p-3 rounded-md font-semibold hover:opacity-90 transition">
            Reservar voo
          </button>
        </div>
      </main>
      <Footer />
    </div>
  );
}
