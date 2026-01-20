'use client';
import Header from "../../src/components/ui/Header";
import Footer from "../../src/components/ui/Footer";
import { FlightList } from "../../src/components/FlightList/FlightList";
import { AirlineFilter} from '../../src/components/filters/AirlineFilter'
import { IdaEVola} from '../../src/components/filters/IdaEVola'
import { PriceFilter} from '../../src/components/filters/PriceFilter'
import { StopsFilter} from '../../src/components/filters/StopsFilter'

export default function ListarPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 px-0 py-8 max-w-6xl mx-auto">
        <h1 className="text-2xl font-bold mb-6">Results</h1>
       
     {/* filter componetes */}
        <div className="bg-white p-6 rounded-lg shadow-md mb-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <h3 className="text-lg font-semibold mb-4 text-gray-700 tracking-wide">Filters</h3>
        <IdaEVola/>
        <PriceFilter/>
        <StopsFilter/>
        <AirlineFilter/>
        </div>
        <div className="mt-8">
          <FlightList />
        </div>
      </main>
      <Footer />
    </div>
  );
}
