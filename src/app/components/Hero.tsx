export default function Hero() {
  return (
    <section
      className="relative h-[90vh] flex items-center justify-center text-center px-6 bg-cover bg-center"
      style={{ backgroundImage: "url('/images/hero.jpg')" }}
    >
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-linear-to-b from-[#7A1E2C]/80 via-[#7A1E2C]/50 to-[#7A1E2C]/80 z-10" />

      <div className="relative z-20 max-w-3xl">
        <h1 className="text-4xl md:text-6xl font-semibold tracking-wide mb-6 leading-tight text-white">
          Upplev äkta italiensk matkultur
        </h1>

        <p className="text-lg md:text-xl text-gray-200 mb-10 max-w-xl mx-auto">
          Välkommen till Piccola Rosa – en plats för smaker, atmosfär och
          minnesvärda stunder i hjärtat av Hässelby Strand
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="/contact"
            className="bg-[#7A1E2C] text-white px-6 py-3 rounded-full text-lg font-medium hover:bg-[#5c1622] transition"
          >
            Kontakt
          </a>

          <a
            href="/menu"
            className="border border-white px-6 py-3 rounded-full text-lg font-medium hover:bg-white hover:text-[#7A1E2C] transition"
          >
            Se meny
          </a>
        </div>

        {/* Reviews */}
        <div className="mt-16 overflow-hidden">
          <div className="flex gap-6 animate-[scroll_25s_linear_infinite]">

            <div className="min-w-[320px] max-w-[320px] bg-white/5 border border-white/10 rounded-xl p-5 text-left shrink-0 hover:bg-white/10 transition duration-300">
              <p className="text-yellow-400 mb-2">★★★★★</p>
              <p className="text-sm text-gray-200 leading-relaxed whitespace-normal">
                Super trevlig personal. De känns alltid närvarande och bra service. En av de bästa Acapulco pizzorna i västerort!
                Tips: Utan champinjoner och ta Bea vid sidan så att du kan smeta på varje slice.
              </p>
            </div>

            <div className="min-w-[320px] max-w-[320px] bg-white/5 border border-white/10 rounded-xl p-5 text-left shrink-0 hover:bg-white/10 transition duration-300">
              <p className="text-yellow-400 mb-2">★★★★★</p>
              <p className="text-sm text-gray-200 leading-relaxed whitespace-normal">
                Trevlig personal. God mat och öl. Veckans tips: Testa deras Biff planka.
              </p>
            </div>

            <div className="min-w-[320px] max-w-[320px] bg-white/5 border border-white/10 rounded-xl p-5 text-left shrink-0 hover:bg-white/10 transition duration-300">
              <p className="text-yellow-400 mb-2">★★★★★</p>
              <p className="text-sm text-gray-200 leading-relaxed whitespace-normal">
                Bra service och riktigt god planka!
              </p>
            </div>

            <div className="min-w-[320px] max-w-[320px] bg-white/5 border border-white/10 rounded-xl p-5 text-left shrink-0 hover:bg-white/10 transition duration-300">
              <p className="text-yellow-400 mb-2">★★★★★</p>
              <p className="text-sm text-gray-200 leading-relaxed whitespace-normal">
                Grym service och väldigt god mat!
              </p>
            </div>

            <div className="min-w-[320px] max-w-[320px] bg-white/5 border border-white/10 rounded-xl p-5 text-left shrink-0 hover:bg-white/10 transition duration-300">
              <p className="text-yellow-400 mb-2">★★★★★</p>
              <p className="text-sm text-gray-200 leading-relaxed whitespace-normal">
                Mycket imponerad. Köttet var saftigt och perfekt tillagat, grönsakerna var fräscha och smakrika och bearnaisesåsen var krämig och välbalanserad. En riktigt god och vällagad biff på planka.
              </p>
            </div>

            {/* Duplicate for loop */}
            <div className="min-w-[320px] max-w-[320px] bg-white/5 border border-white/10 rounded-xl p-5 text-left shrink-0 hover:bg-white/10 transition duration-300">
              <p className="text-yellow-400 mb-2">★★★★★</p>
              <p className="text-sm text-gray-200 leading-relaxed whitespace-normal">
                Super trevlig personal. De känns alltid närvarande och bra service. En av de bästa Acapulco pizzorna i västerort!
                Tips: Utan champinjoner och ta Bea vid sidan så att du kan smeta på varje slice.
              </p>
            </div>

            <div className="min-w-[320px] max-w-[320px] bg-white/5 border border-white/10 rounded-xl p-5 text-left shrink-0 hover:bg-white/10 transition duration-300">
              <p className="text-yellow-400 mb-2">★★★★★</p>
              <p className="text-sm text-gray-200 leading-relaxed whitespace-normal">
                Trevlig personal. God mat och öl. Veckans tips: Testa deras Biff planka.
              </p>
            </div>

            <div className="min-w-[320px] max-w-[320px] bg-white/5 border border-white/10 rounded-xl p-5 text-left shrink-0 hover:bg-white/10 transition duration-300">
              <p className="text-yellow-400 mb-2">★★★★★</p>
              <p className="text-sm text-gray-200 leading-relaxed whitespace-normal">
                Bra service och riktigt god planka!
              </p>
            </div>

            <div className="min-w-[320px] max-w-[320px] bg-white/5 border border-white/10 rounded-xl p-5 text-left shrink-0 hover:bg-white/10 transition duration-300">
              <p className="text-yellow-400 mb-2">★★★★★</p>
              <p className="text-sm text-gray-200 leading-relaxed whitespace-normal">
                Grym service och väldigt god mat!
              </p>
            </div>

            <div className="min-w-[320px] max-w-[320px] bg-white/5 border border-white/10 rounded-xl p-5 text-left shrink-0 hover:bg-white/10 transition duration-300">
              <p className="text-yellow-400 mb-2">★★★★★</p>
              <p className="text-sm text-gray-200 leading-relaxed whitespace-normal">
                Mycket imponerad. Köttet var saftigt och perfekt tillagat, grönsakerna var fräscha och smakrika och bearnaisesåsen var krämig och välbalanserad. En riktigt god och vällagad biff på planka.
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
