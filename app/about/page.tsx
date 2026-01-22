'use client'

import Header from "../../src/components/ui/Header";
import Footer from "../../src/components/ui/Footer";
import { colors } from "../../src/statics/color";
import { Plane, Globe, ShieldCheck, Users } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Header />

      <main className="flex-1">

        {/*  HERO SECTION */}
        <section className="bg-white">
          <div className="max-w-6xl mx-auto px-4 py-16 text-center">
            <h1 className="text-3xl sm:text-4xl font-bold mb-4">
              About Us
            </h1>

            <p className="text-gray-600 max-w-2xl mx-auto text-base sm:text-lg">
              We help travelers find the best flights easily, quickly,
              and with confidence — all in one place.
            </p>
          </div>
        </section>

        {/* 🔹 MISSION */}
        <section className="max-w-6xl mx-auto px-4 py-14">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-2xl font-semibold mb-4">
                Our Mission
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Our mission is to simplify the way people search for flights.
                We believe booking a trip should be transparent, fast, and stress-free.
                That’s why we focus on clear information, smart filters,
                and a user-friendly experience.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <Plane
                className="w-12 h-12 mb-4"
                style={{ color: colors.primary }}
              />
              <p className="text-sm text-gray-600">
                We connect travelers with reliable airlines and
                real-time flight data, helping them make better decisions.
              </p>
            </div>
          </div>
        </section>

        {/*  VALUES */}
        <section className="bg-white">
          <div className="max-w-6xl mx-auto px-4 py-14">
            <h2 className="text-2xl font-semibold text-center mb-10">
              Our Values
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <ValueCard
                icon={<Globe />}
                title="Accessibility"
                description="We make flight search simple and accessible to everyone, on any device."
              />

              <ValueCard
                icon={<ShieldCheck />}
                title="Trust"
                description="We prioritize accurate data, transparency, and user confidence."
              />

              <ValueCard
                icon={<Users />}
                title="User-Centered"
                description="Every feature is designed with real users and real needs in mind."
              />

              <ValueCard
                icon={<Plane />}
                title="Innovation"
                description="We continuously improve our platform using modern technologies."
              />
            </div>
          </div>
        </section>

        {/* 🔹 STORY */}
        <section className="max-w-6xl mx-auto px-4 py-14">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-semibold mb-4">
              Our Story
            </h2>

            <p className="text-gray-600 leading-relaxed">
              This platform was built with the goal of solving common problems
              travelers face when searching for flights — confusing interfaces,
              hidden details, and unnecessary steps.
              <br /><br />
              By focusing on clean design, performance, and usability,
              we aim to deliver a flight search experience that feels modern,
              reliable, and enjoyable.
            </p>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}

/*  Reusable value card */
function ValueCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="bg-gray-50 rounded-2xl p-6 text-center shadow-sm hover:shadow-md transition">
      <div
        className="flex justify-center mb-4"
        style={{ color: colors.primary }}
      >
        {icon}
      </div>
      <h3 className="font-semibold mb-2">{title}</h3>
      <p className="text-sm text-gray-600">
        {description}
      </p>
    </div>
  );
}
