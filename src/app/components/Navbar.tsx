export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full px-6 py-4 flex items-center justify-between bg-black/70 backdrop-blur-md border-b border-white/10">
      <div className="text-xl font-semibold tracking-wide">
        Piccola Rosa
      </div>

      <div className="hidden md:flex gap-8 text-sm">
        <a href="/" className="hover:text-gray-300 transition">Hem</a>
        <a href="/menu" className="hover:text-gray-300 transition">Meny</a>
        <a href="/contact" className="hover:text-gray-300 transition">Kontakt</a>
      </div>

      <a
        href="#beställ"
        className="bg-white text-black px-4 py-2 rounded-full text-sm font-medium hover:bg-gray-200 transition"
      >
        Beställ via Wolt eller Foodora
      </a>
    </nav>
  );
}
