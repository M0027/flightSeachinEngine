'use client'

import Image from "next/image";
import Header from "../../src/components/ui/Header";
import Footer from "../../src/components/ui/Footer";
import {airlines } from "../../src/statics/airlines";
import { colors } from "../../src/statics/color";
import AirlineLogo from '../../src/components/ui/AirlineLogo';

export default function AirlinesPage() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Header />

      <main className="flex-1 px-4 py-10 max-w-7xl mx-auto">

        {/* Title */}
        <div className="mb-10 text-center">
          <h1
            className="text-3xl md:text-4xl font-bold mb-3"
            style={{ color: colors.primary }}
          >
            Airlines Partners
          </h1>
          <p className="text-gray-600 max-w-xl mx-auto">
            Discover the airlines available for your next journey.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {airlines.map((code) => (
            <div
              key={code}
              className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 p-6 flex flex-col items-center justify-center group cursor-pointer"
            >
              {/* Logo */}
              <div className="w-24 h-24 mb-4 flex items-center justify-center">
                {/* <Image
                  src={airlineLogos[code]}
                  alt={`Airline ${code}`}
                  width={96}
                  height={96}
                  className="object-contain transition-transform duration-300 group-hover:scale-105"
                /> */}
                <AirlineLogo code={code} size={64} />
              </div>

              {/* Code */}
              <h2 className="text-lg font-semibold text-gray-800 tracking-wide">
                {code}
              </h2>

              {/* Sub text */}
              <span className="text-sm text-gray-500 mt-1">
                Airline Partner
              </span>
            </div>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}
