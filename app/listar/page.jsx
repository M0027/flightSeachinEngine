import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { SearchForm } from "@/components/Search/SearchForm";
import { FlightList } from "@/components/FlightList/FlightList";

export default function ListarPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 px-4 py-8 max-w-6xl mx-auto">
        <h1 className="text-2xl font-bold mb-6">Resultados da busca</h1>
        <SearchForm />
        <div className="mt-8">
          <FlightList />
        </div>
      </main>
      <Footer />
    </div>
  );
}
