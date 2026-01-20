import Header from "../src/components/ui/Header";
import Footer from "../src/components/ui/Footer";
import { SearchForm } from "../src/components/search/searchForm";

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 px-4 py-8 max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Encontre seu voo ideal</h1>
        <SearchForm />
      </main>
      <Footer />
    </div>
  );
}
