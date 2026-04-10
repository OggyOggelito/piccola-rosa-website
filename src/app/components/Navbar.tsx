export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full px-6 py-4 flex items-center justify-between bg-[#F8F5F2]/90 backdrop-blur-md border-b border-[#7A1E2C]/20">
      <div className="text-xl font-semibold tracking-wide">
        Nya Piccola Rosa
      </div>

      <div className="hidden md:flex gap-8 text-sm">
        <a href="/" className="hover:text-[#7A1E2C] transition">Hem</a>
        <a href="/menu" className="hover:text-[#7A1E2C] transition">Meny</a>
        <a href="/contact" className="hover:text-[#7A1E2C] transition">Kontakt</a>
      </div>

      <a
        href="/bestall"
        className="bg-[#7A1E2C] text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-[#5c1622] transition"
      >
        Beställ via Wolt eller Foodora
      </a>
    </nav>
  );
}
