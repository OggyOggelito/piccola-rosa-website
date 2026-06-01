"use client";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav className="sticky top-0 z-50 w-full px-4 sm:px-6 md:px-8 py-2 md:py-3 flex items-center justify-between bg-[#FEF6F1]/95 backdrop-blur-md border-b border-[#7A1E2C]/15 gap-6">
        {/* Logo */}
        <div className="flex items-center">
          <img
            src="/images/nya_npr.png"
            alt="Nya Piccola Rosa"
            className="h-10 md:h-12 w-auto object-contain bg-[#FEF6F1] mix-blend-multiply shrink-0"
          />
        </div>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-6 text-base font-medium text-[#1a1a1a] flex-1 justify-center">
          <a href="/" className="hover:text-[#7A1E2C] transition">Hem</a>
          <a href="/menu" className="hover:text-[#7A1E2C] transition">Meny</a>
          <a href="/contact" className="hover:text-[#7A1E2C] transition">Kontakt</a>
          <a href="/om-oss" className="hover:text-[#7A1E2C] transition">Om oss</a>
          <a href="/sport" className="hover:text-[#7A1E2C] transition">Sport</a>
        </div>

        {/* Desktop CTA */}
        <a
          href="/bestall"
          className="hidden md:block bg-[#7A1E2C] text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-[#5c1622] transition whitespace-nowrap shrink-0"
        >
          Beställ via Purspot, Wolt eller Foodora
        </a>

        {/* Mobile hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden flex flex-col justify-center items-center w-9 h-9 gap-[5px] rounded-lg hover:bg-[#7A1E2C]/10 transition"
          aria-label="Öppna meny"
        >
          <span
            className={`block w-5 h-[2px] bg-[#7A1E2C] rounded transition-all duration-300 ${open ? "rotate-45 translate-y-[7px]" : ""}`}
          />
          <span
            className={`block w-5 h-[2px] bg-[#7A1E2C] rounded transition-all duration-300 ${open ? "opacity-0" : ""}`}
          />
          <span
            className={`block w-5 h-[2px] bg-[#7A1E2C] rounded transition-all duration-300 ${open ? "-rotate-45 -translate-y-[7px]" : ""}`}
          />
        </button>
      </nav>

      {/* Mobile dropdown */}
      <div
        className={`md:hidden sticky top-[60px] z-40 w-full bg-[#FEF6F1]/98 backdrop-blur-md border-b border-[#7A1E2C]/15 overflow-hidden transition-all duration-300 ${
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col px-6 py-4 gap-4 text-base font-medium text-[#1a1a1a]">
          <a href="/" onClick={() => setOpen(false)} className="hover:text-[#7A1E2C] transition py-1">Hem</a>
          <a href="/menu" onClick={() => setOpen(false)} className="hover:text-[#7A1E2C] transition py-1">Meny</a>
          <a href="/contact" onClick={() => setOpen(false)} className="hover:text-[#7A1E2C] transition py-1">Kontakt</a>
          <a href="/om-oss" onClick={() => setOpen(false)} className="hover:text-[#7A1E2C] transition py-1">Om oss</a>
          <a href="/sport" onClick={() => setOpen(false)} className="hover:text-[#7A1E2C] transition py-1">Sport</a>
          <a
            href="/bestall"
            onClick={() => setOpen(false)}
            className="mt-1 bg-[#7A1E2C] text-white px-5 py-3 rounded-full text-sm font-medium text-center hover:bg-[#5c1622] transition"
          >
            Beställ via Purspot, Wolt eller Foodora
          </a>
        </div>
      </div>
    </>
  );
}