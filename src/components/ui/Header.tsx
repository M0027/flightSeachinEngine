"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { colors } from "../../statics/color";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* HEADER */}
      <header
        className="flex items-center justify-between px-4 py-4"
        style={{ backgroundColor: colors.primary }}
      >
        <h1 className="text-white font-bold font-roboto text-xl">
          MacFlight
        </h1>

        {/* Desktop menu */}
        <nav className="hidden md:flex gap-6 text-white">
          <a href="/" className="hover:opacity-80 font-roboto cursor-pointer">Flights</a>
          <a href="/airlines" className="hover:opacity-80 font-roboto cursor-pointer">Airlines</a>
          <a href="/about" className="hover:opacity-80 font-roboto cursor-pointer">About</a>
          <a href="/help" className="hover:opacity-80 font-roboto cursor-pointer">Help</a>
          </nav>

        {/* Mobile menu button */}
        <button
          className="md:hidden"
          onClick={() => setOpen(true)}
        >
          <Menu size={28} color="white" />
        </button>
      </header>

      {/* MOBILE MENU */}
      {open && (
        <div
          className="
            fixed inset-0 z-50
            flex flex-col
            animate-slideDown
          "
          style={{ backgroundColor: colors.primary }}
        >
          {/* Close button */}
          <button
            className="absolute top-4 left-4"
            onClick={() => setOpen(false)}
          >
            <X size={30} color="white" />
          </button>

          {/* Menu items */}
          <nav className="mt-20 flex font-roboto flex-col gap-6 px-6 text-white text-lg">
            <a href="/" className="border-b font-roboto border-white/20 pb-2">Flights</a>
            <a href="/airlines" className="border-b font-roboto border-white/20 pb-2">Airlines</a>
            <a href="/about/" className="border-b font-roboto border-white/20 pb-2">About</a>
            <a href="/help" className="border-b font-roboto border-white/20 pb-2">help</a>
          </nav>
        </div>
      )}
    </>
  );
}
