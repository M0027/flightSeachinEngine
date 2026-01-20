import Header from "../../src/components/ui/Header";
import Footer from "../../src/components/ui/Footer";

export default function DetalhesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 px-4 py-8 max-w-6xl mx-auto">
        <h1 className="text-2xl font-bold mb-6">Detalhes do voo</h1>
        <div className="bg-white p-6 rounded-xl shadow-md">
          <p className="mb-4">Origem: LIS</p>
          <p className="mb-4">Destino: MAD</p>
          <p className="mb-4">Horário de partida: 10:00</p>
          <p className="mb-4">Horário de chegada: 12:15</p>
          <p className="mb-4 font-bold text-lg">Preço: €150</p>
          <button className="mt-4 w-full bg-green-900 text-white p-3 rounded-md font-semibold hover:opacity-90 transition">
            Reservar voo
          </button>
        </div>
      </main>
      <Footer />
    </div>
  );
}
