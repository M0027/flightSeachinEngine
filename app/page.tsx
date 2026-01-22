import Header from "../src/components/ui/Header";
import Footer from "../src/components/ui/Footer";
import SearchForm from "../src/components/search/search_Form";
import {SuggestionDestinationList} from '../src/components/suggestions/SuggestionDestinationList'
import { colors } from "../src/statics/color";

export default function HomePage() {

   const serchparams = {
    origin: "MPM",
    destination: "LIS",
    date: "2023-05-15",
    passengers: 2,
   }

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 px-4 py-8 ">
        <h1 style={{color: colors.tertiary}} className="text-2xl font-bold font-roboto mb-6">Find you best flight whith some clicks</h1>
        <SearchForm />
      </main>
      <SuggestionDestinationList/>
      <Footer />
    </div>
  );
}
