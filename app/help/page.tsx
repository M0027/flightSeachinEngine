'use client';

import Header from "../../src/components/ui/Header";
import Footer from "../../src/components/ui/Footer";
import { colors } from "../../src/statics/color";

export default function HelpPage() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Header />

      <main className="flex-1 px-4 py-10">
        <div className="max-w-5xl mx-auto">

          {/* Title */}
          <header className="text-center mb-12">
            <h1
              className="text-3xl md:text-4xl font-bold mb-4"
              style={{ color: colors.primary }}
            >
              Help Center
            </h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Everything you need to know to search, compare and choose the best flights.
            </p>
          </header>

          {/* Content Card */}
          <div className="bg-white rounded-2xl shadow-md p-6 md:p-10 space-y-10">

            {/* Section */}
            <section>
              <h2
                className="text-xl md:text-2xl font-semibold mb-3"
                style={{ color: colors.secondary }}
              >
                Welcome to the Flight Search Engine
              </h2>
              <p className="text-gray-700 leading-relaxed mb-3">
                Our Flight Search Engine helps you find the best flight options for your journey.
                You can search for one-way or round-trip flights by selecting your origin,
                destination, travel dates, and number of passengers.
              </p>
              <p className="text-gray-700 leading-relaxed">
                The interface is designed to be fast, simple, and intuitive — allowing you to
                focus on what matters most: finding the right flight.
              </p>
            </section>

            {/* Section */}
            <section>
              <h2
                className="text-xl md:text-2xl font-semibold mb-4"
                style={{ color: colors.secondary }}
              >
                How to Use
              </h2>

              <ul className="space-y-3 text-gray-700">
                <li className="flex gap-2">
                  <span className="font-semibold">•</span>
                  <span>
                    <strong>Search for Flights:</strong> Choose your departure and arrival cities,
                    select travel dates, and define the number of adults.
                  </span>
                </li>

                <li className="flex gap-2">
                  <span className="font-semibold">•</span>
                  <span>
                    <strong>Filter Results:</strong> Refine your search using price range, number
                    of stops, trip type, or preferred airline.
                  </span>
                </li>

                <li className="flex gap-2">
                  <span className="font-semibold">•</span>
                  <span>
                    <strong>View Flight Details:</strong> Click on a flight card to see full details,
                    including airline, duration, stops, and price.
                  </span>
                </li>

                <li className="flex gap-2">
                  <span className="font-semibold">•</span>
                  <span>
                    <strong>Analyze Prices:</strong> Use the chart to quickly compare average
                    prices between airlines.
                  </span>
                </li>
              </ul>
            </section>

            {/* Section */}
            <section>
              <h2
                className="text-xl md:text-2xl font-semibold mb-3"
                style={{ color: colors.secondary }}
              >
                Troubleshooting & Support
              </h2>

              <p className="text-gray-700 leading-relaxed mb-3">
                If you experience any issues, please ensure your internet connection is stable
                and try refreshing the page. Double-check your search parameters if no flights
                appear.
              </p>

              <p className="text-gray-700 leading-relaxed">
                This project is a demonstration application. For bug reports or improvements,
                please contact the developer or refer to the source code repository.
              </p>
            </section>

            {/* Footer note */}
            <div className="pt-6 border-t text-center">
              <p className="text-sm text-gray-500">
                Thank you for using our Flight Search Engine ✈️
              </p>
            </div>

          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
