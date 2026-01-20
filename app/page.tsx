import Header from "../src/components/ui/Header";
import Footer from "../src/components/ui/Footer";
import { SearchForm } from "../src/components/search/searchForm";
import {SuggestionDestinationList} from '../src/components/suggestions/SuggestionDestinationList'

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 px-4 py-8 max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Find you best flight</h1>
        <SearchForm />
      </main>
      <SuggestionDestinationList/>
      <Footer />
    </div>
  );
}
