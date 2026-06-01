export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center text-center px-6 py-20 bg-cover bg-center overflow-hidden"
      style={{ backgroundImage: "url('/images/hero.jpg')" }}
    >
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-linear-to-b from-[#7A1E2C]/80 via-[#7A1E2C]/50 to-[#7A1E2C]/80 z-10" />

      <div className="relative z-20 max-w-6xl w-full grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
        <div>
        <h1 className="text-5xl md:text-6xl font-semibold mb-6 leading-tight text-white">
          Upplev äkta italiensk matkultur
        </h1>

        <p className="text-lg md:text-xl text-gray-200 mb-10 max-w-xl mx-auto leading-relaxed">
          Välkommen till Piccola Rosa – en plats för smaker, atmosfär och
          minnesvärda stunder i hjärtat av Hässelby Strand
        </p>

        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-2">
          <a
            href="/contact"
            className="bg-[#7A1E2C] text-white px-6 py-3 rounded-full text-base md:text-lg font-medium hover:bg-[#5c1622] transition w-full sm:w-auto"
          >
            Kontakt
          </a>

          <a
            href="/menu"
            className="border border-white px-6 py-3 rounded-full text-base md:text-lg font-medium hover:bg-white hover:text-[#7A1E2C] transition w-full sm:w-auto"
          >
            Se meny
          </a>
        </div>

        {/* Quick Navigation Cards */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-0 overflow-hidden rounded-3xl border border-white/10 shadow-2xl bg-white/5 backdrop-blur-sm">
          <a
            href="/menu#dryck1"
            className="group relative overflow-hidden h-[180px] border-r border-white/10 last:border-r-0"
          >
            <img
              src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=1200&auto=format&fit=crop"
              alt="Dryckesmeny"
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition duration-500"
            />

            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition duration-300" />

            <div className="relative z-10 h-full flex items-end p-4 sm:p-5">
              <div>
                <p className="text-white/70 text-xs uppercase tracking-[0.25em] mb-2">
                  Dryck
                </p>
                <h3 className="text-white text-2xl font-semibold leading-tight">
                  Dryckesmeny
                </h3>
              </div>
            </div>
          </a>

          <a
            href="/menu"
            className="group relative overflow-hidden h-[180px] border-r border-white/10 last:border-r-0"
          >
            <img
              src="https://images.unsplash.com/photo-1555949258-eb67b1ef0ceb?q=80&w=1200&auto=format&fit=crop"
              alt="Meny"
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition duration-500"
            />

            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition duration-300" />

            <div className="relative z-10 h-full flex items-end p-4 sm:p-5">
              <div>
                <p className="text-white/70 text-xs uppercase tracking-[0.25em] mb-2">
                  Mat
                </p>
                <h3 className="text-white text-2xl font-semibold leading-tight">
                  Meny
                </h3>
              </div>
            </div>
          </a>

          <a
            href="/sport"
            className="group relative overflow-hidden h-[180px] border-r border-white/10 last:border-r-0"
          >
            <img
              src="/images/sport.png"
              alt="Sport"
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition duration-500"
            />

            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition duration-300" />

            <div className="relative z-10 h-full flex items-end p-4 sm:p-5">
              <div>
                <p className="text-white/70 text-xs uppercase tracking-[0.25em] mb-2">
                  Live Sport
                </p>
                <h3 className="text-white text-2xl font-semibold leading-tight">
                  Sport
                </h3>
              </div>
            </div>
          </a>
        </div>

        {/* Reviews */}
        <div className="mt-8 md:mt-12 overflow-hidden w-full">
          <div className="flex gap-4 sm:gap-6 animate-[scroll_25s_linear_infinite] py-2">
            <div className="min-w-80 max-w-80 sm:min-w-80 sm:max-w-80 bg-white/5 border border-white/10 rounded-xl p-5 text-left shrink-0 hover:bg-white/10 transition duration-300">
              <p className="text-yellow-400 mb-2">★★★★★</p>
              <p className="text-[13px] sm:text-sm text-gray-200 leading-relaxed whitespace-normal">
                Super trevlig personal. De känns alltid närvarande och bra service. En av de bästa Acapulco pizzorna i västerort!
                Tips: Utan champinjoner och ta Bea vid sidan så att du kan smeta på varje slice.
              </p>
            </div>
            <div className="min-w-80 max-w-80 sm:min-w-80 sm:max-w-80 bg-white/5 border border-white/10 rounded-xl p-5 text-left shrink-0 hover:bg-white/10 transition duration-300">
              <p className="text-yellow-400 mb-2">★★★★★</p>
              <p className="text-[13px] sm:text-sm text-gray-200 leading-relaxed whitespace-normal">
                Trevlig personal. God mat och öl. Veckans tips: Testa deras Biff planka.
              </p>
            </div>
            <div className="min-w-80 max-w-80 sm:min-w-80 sm:max-w-80 bg-white/5 border border-white/10 rounded-xl p-5 text-left shrink-0 hover:bg-white/10 transition duration-300">
              <p className="text-yellow-400 mb-2">★★★★★</p>
              <p className="text-[13px] sm:text-sm text-gray-200 leading-relaxed whitespace-normal">
                Bra service och riktigt god planka!
              </p>
            </div>
            <div className="min-w-80 max-w-80 sm:min-w-80 sm:max-w-80 bg-white/5 border border-white/10 rounded-xl p-5 text-left shrink-0 hover:bg-white/10 transition duration-300">
              <p className="text-yellow-400 mb-2">★★★★★</p>
              <p className="text-[13px] sm:text-sm text-gray-200 leading-relaxed whitespace-normal">
                Grym service och väldigt god mat!
              </p>
            </div>
            <div className="min-w-80 max-w-80 sm:min-w-80 sm:max-w-80 bg-white/5 border border-white/10 rounded-xl p-5 text-left shrink-0 hover:bg-white/10 transition duration-300">
              <p className="text-yellow-400 mb-2">★★★★★</p>
              <p className="text-[13px] sm:text-sm text-gray-200 leading-relaxed whitespace-normal">
                Mycket imponerad. Köttet var saftigt och perfekt tillagat, grönsakerna var fräscha och smakrika och bearnaisesåsen var krämig och välbalanserad. En riktigt god och vällagad biff på planka.
              </p>
            </div>
            {/* Duplicate for loop */}
            <div className="min-w-80 max-w-80 sm:min-w-80 sm:max-w-80 bg-white/5 border border-white/10 rounded-xl p-5 text-left shrink-0 hover:bg-white/10 transition duration-300">
              <p className="text-yellow-400 mb-2">★★★★★</p>
              <p className="text-[13px] sm:text-sm text-gray-200 leading-relaxed whitespace-normal">
                Super trevlig personal. De känns alltid närvarande och bra service. En av de bästa Acapulco pizzorna i västerort!
                Tips: Utan champinjoner och ta Bea vid sidan så att du kan smeta på varje slice.
              </p>
            </div>
            <div className="min-w-80 max-w-80 sm:min-w-80 sm:max-w-80 bg-white/5 border border-white/10 rounded-xl p-5 text-left shrink-0 hover:bg-white/10 transition duration-300">
              <p className="text-yellow-400 mb-2">★★★★★</p>
              <p className="text-[13px] sm:text-sm text-gray-200 leading-relaxed whitespace-normal">
                Trevlig personal. God mat och öl. Veckans tips: Testa deras Biff planka.
              </p>
            </div>
            <div className="min-w-80 max-w-80 sm:min-w-80 sm:max-w-80 bg-white/5 border border-white/10 rounded-xl p-5 text-left shrink-0 hover:bg-white/10 transition duration-300">
              <p className="text-yellow-400 mb-2">★★★★★</p>
              <p className="text-[13px] sm:text-sm text-gray-200 leading-relaxed whitespace-normal">
                Bra service och riktigt god planka!
              </p>
            </div>
            <div className="min-w-80 max-w-80 sm:min-w-80 sm:max-w-80 bg-white/5 border border-white/10 rounded-xl p-5 text-left shrink-0 hover:bg-white/10 transition duration-300">
              <p className="text-yellow-400 mb-2">★★★★★</p>
              <p className="text-[13px] sm:text-sm text-gray-200 leading-relaxed whitespace-normal">
                Grym service och väldigt god mat!
              </p>
            </div>
            <div className="min-w-80 max-w-80 sm:min-w-80 sm:max-w-80 bg-white/5 border border-white/10 rounded-xl p-5 text-left shrink-0 hover:bg-white/10 transition duration-300">
              <p className="text-yellow-400 mb-2">★★★★★</p>
              <p className="text-[13px] sm:text-sm text-gray-200 leading-relaxed whitespace-normal">
                Mycket imponerad. Köttet var saftigt och perfekt tillagat, grönsakerna var fräscha och smakrika och bearnaisesåsen var krämig och välbalanserad. En riktigt god och vällagad biff på planka.
              </p>
            </div>
          </div>
        </div>
        </div>

        {/* Restaurant Image */}
        <div className="hidden lg:flex justify-center items-stretch relative h-full">
          <div className="relative overflow-hidden rounded-3xl border border-white/10 shadow-2xl bg-white/5 w-full max-w-[560px] h-[760px]">
            <img
              src="/images/npr.png"
              alt="Nya Piccola Rosa restaurang i Hässelby Strand"
              className="absolute inset-0 w-full h-full object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-[#7A1E2C]/50 via-transparent to-transparent" />

            <div className="absolute bottom-0 left-0 right-0 p-6 text-left">
              <p className="text-white text-sm uppercase tracking-[0.25em] opacity-80 mb-2">
                Hässelby Strand
              </p>
              <h3 className="text-white text-3xl font-semibold leading-tight">
                En modern kvarterskrog med italiensk själ
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
