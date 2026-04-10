export default function Hero() {
  return (
    <section
      className="relative h-[90vh] flex items-center justify-center text-center px-6 bg-cover bg-center"
      style={{ backgroundImage: "url('/images/hero.jpg')" }}
    >
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-linear-to-b from-black/80 via-black/60 to-black/90 z-10" />

      <div className="relative z-20 max-w-3xl">
        <h1 className="text-4xl md:text-6xl font-semibold tracking-wide mb-6 leading-tight">
          Upplev äkta italiensk matkultur
        </h1>

        <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-xl mx-auto">
          Välkommen till Piccola Rosa – en plats för smaker, atmosfär och
          minnesvärda stunder i hjärtat av Hässelby Strand
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="/contact"
            className="bg-white text-black px-6 py-3 rounded-full text-lg font-medium hover:bg-gray-200 transition"
          >
            Kontakt
          </a>

          <a
            href="/menu"
            className="border border-white px-6 py-3 rounded-full text-lg font-medium hover:bg-white hover:text-black transition"
          >
            Se meny
          </a>
        </div>

        {/* Reviews */}
        <div className="mt-16 overflow-hidden">
          <div className="flex gap-6 animate-scroll whitespace-nowrap">
            
            {/* Review 1 */}
            <div className="min-w-75 bg-white/5 border border-white/10 rounded-xl p-5 text-left">
              <p className="text-yellow-400 mb-2">★★★★★</p>
              <p className="text-sm text-gray-300">
                Super trevlig personal och fantastisk service. En av de bästa pizzorna i västerort!
              </p>
            </div>

            {/* Review 2 */}
            <div className="min-w-75 bg-white/5 border border-white/10 rounded-xl p-5 text-left">
              <p className="text-yellow-400 mb-2">★★★★★</p>
              <p className="text-sm text-gray-300">
                Trevlig personal. God mat och öl. Testa deras biff planka!
              </p>
            </div>

            {/* Review 3 */}
            <div className="min-w-75 bg-white/5 border border-white/10 rounded-xl p-5 text-left">
              <p className="text-yellow-400 mb-2">★★★★★</p>
              <p className="text-sm text-gray-300">
                Grym service och väldigt god mat!
              </p>
            </div>

            {/* Review 4 */}
            <div className="min-w-75 bg-white/5 border border-white/10 rounded-xl p-5 text-left">
              <p className="text-yellow-400 mb-2">★★★★★</p>
              <p className="text-sm text-gray-300">
                Mycket imponerad. Perfekt tillagat kött och krämig bearnaisesås.
              </p>
            </div>

            {/* Duplicate Reviews for seamless loop */}
            <div className="min-w-75 bg-white/5 border border-white/10 rounded-xl p-5 text-left">
              <p className="text-yellow-400 mb-2">★★★★★</p>
              <p className="text-sm text-gray-300">
                Super trevlig personal och fantastisk service. En av de bästa pizzorna i västerort!
              </p>
            </div>

            <div className="min-w-75 bg-white/5 border border-white/10 rounded-xl p-5 text-left">
              <p className="text-yellow-400 mb-2">★★★★★</p>
              <p className="text-sm text-gray-300">
                Trevlig personal. God mat och öl. Testa deras biff planka!
              </p>
            </div>

            <div className="min-w-75 bg-white/5 border border-white/10 rounded-xl p-5 text-left">
              <p className="text-yellow-400 mb-2">★★★★★</p>
              <p className="text-sm text-gray-300">
                Grym service och väldigt god mat!
              </p>
            </div>

            <div className="min-w-75 bg-white/5 border border-white/10 rounded-xl p-5 text-left">
              <p className="text-yellow-400 mb-2">★★★★★</p>
              <p className="text-sm text-gray-300">
                Mycket imponerad. Perfekt tillagat kött och krämig bearnaisesås.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
