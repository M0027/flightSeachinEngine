'use client';
import Header from "../../src/components/ui/Header";
import Footer from "../../src/components/ui/Footer";
import { FlightList } from "../../src/components/FlightList/FlightList";
import { AirlineFilter } from '../../src/components/filters/AirlineFilter'
import { IdaEVola } from '../../src/components/filters/IdaEVola'
import { PriceFilter } from '../../src/components/filters/PriceFilter'
import { StopsFilter } from '../../src/components/filters/StopsFilter'
import FlightBarChart from '../../src/components/FlightBarChart/flightBarChart'


export default function ListarPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 px-0 py-8 ">
        {/* filter componetes */}
        <h1 className="text-2xl font-bold mb-6">Results</h1>
        <div
          className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2 gap-6 items-start"
        >
          {/* first— Filters */}
          <div
            className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300 lg:col-span-1 "
          >
            <h3
              className="text-lg font-semibold  text-gray-700 tracking-wide mb-6 "
            >
              Filters
            </h3>

            <div
              className="
        grid grid-cols-1
        sm:grid-cols-2
        lg:grid-cols-3
        gap-4
      "
            >
              <IdaEVola />
              <PriceFilter />
              <StopsFilter />
              <AirlineFilter />
            </div>
          </div>

          {/* chart — Chart */}
          <div
            className=" bg-white rounded-2xl  p-6 shadow-sm hover:shadow-md transition-shadow duration-300 lg:col-span-1"
          >
            <FlightBarChart />
          </div>
        </div>


        <div className="mt-8 ">
          <FlightList />
        </div>
      </main>
      <Footer />
    </div>
  );
}
