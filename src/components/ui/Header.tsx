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
        className="flex items-center justify-between px-4 py-3"
        style={{ backgroundColor: colors.primary }}
      >
        <h1 className="text-white font-bold text-lg">
          FlightNow
        </h1>

        {/* Desktop menu */}
        <nav className="hidden md:flex gap-6 text-white">
          <a className="hover:opacity-80 cursor-pointer">Buscar</a>
          <a className="hover:opacity-80 cursor-pointer">Ofertas</a>
          <a className="hover:opacity-80 cursor-pointer">Conta</a>
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
          <nav className="mt-20 flex flex-col gap-6 px-6 text-white text-lg">
            <a className="border-b border-white/20 pb-2">Buscar</a>
            <a className="border-b border-white/20 pb-2">Ofertas</a>
            <a className="border-b border-white/20 pb-2">Conta</a>
          </nav>
        </div>
      )}
    </>
  );
}
