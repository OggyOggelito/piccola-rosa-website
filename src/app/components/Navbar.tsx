export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full px-3 sm:px-4 md:px-6 py-3 md:py-4 flex items-center justify-between bg-[#FEF6F1]/95 backdrop-blur-md border-b border-[#7A1E2C]/20 gap-2 md:gap-3">
      <div className="flex items-center">
        <img
          src="/images/nya_npr.png"
          alt="Nya Piccola Rosa"
          className="h-16 sm:h-20 md:h-28 w-auto object-contain bg-[#FEF6F1] mix-blend-multiply"
        />
      </div>

      <div className="hidden md:flex gap-8 text-sm">
        <a href="/" className="hover:text-[#7A1E2C] transition">Hem</a>
        <a href="/menu" className="hover:text-[#7A1E2C] transition">Meny</a>
        <a href="/contact" className="hover:text-[#7A1E2C] transition">Kontakt</a>
        <a href="/om-oss" className="hover:text-[#7A1E2C] transition">Om oss</a>
        <a href="/sport" className="hover:text-[#7A1E2C] transition">Sport</a>
      </div>

      <a
        href="/bestall"
        className="bg-[#7A1E2C] text-white px-3 sm:px-4 md:px-5 py-2 rounded-full text-[10px] sm:text-xs md:text-sm font-medium hover:bg-[#5c1622] transition text-center leading-tight max-w-32 sm:max-w-36 md:max-w-none shrink-0"
      >
        Beställ via Purspot, Wolt eller Foodora
      </a>
    </nav>
  );
}
