export default function Hero() {
  const reviews = [
    "Super trevlig personal. En av de bästa Acapulco pizzorna i västerort! Tips: Utan champinjoner och ta Bea vid sidan.",
    "Trevlig personal. God mat och öl. Veckans tips: Testa deras Biff planka.",
    "Bra service och riktigt god planka!",
    "Grym service och väldigt god mat!",
    "Mycket imponerad. Köttet var saftigt och perfekt tillagat. En riktigt god och vällagad biff på planka.",
  ];

  const allReviews = [...reviews, ...reviews];

  return (
    <section
      className="relative flex items-center justify-center px-4 sm:px-6 py-12 md:py-16 bg-cover bg-center overflow-hidden"
      style={{ backgroundImage: "url('/images/hero.jpg')" }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-[#7A1E2C]/90 via-[#7A1E2C]/75 to-[#5c1622]/90 z-10" />

      <div className="relative z-20 max-w-6xl w-full grid lg:grid-cols-2 gap-8 lg:gap-16 items-center text-left">

        <div className="flex flex-col items-center lg:items-start text-center lg:text-left">

          <h1 className="text-3xl sm:text-5xl md:text-5xl font-semibold mb-5 leading-tight text-white">
            Upplev äkta italiensk matkultur
          </h1>

          <p className="text-base sm:text-lg text-white/80 mb-8 max-w-lg leading-relaxed">
            Välkommen till Piccola Rosa – en plats för smaker, atmosfär och
            minnesvärda stunder i hjärtat av Hässelby Strand
          </p>

          <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto mb-8">
            <a
              href="/contact"
              className="bg-white text-[#7A1E2C] px-7 py-3 rounded-full text-base font-semibold hover:bg-[#f5e8e8] transition text-center"
            >
              Kontakt
            </a>
            <a
              href="/menu"
              className="border-2 border-white text-white px-7 py-3 rounded-full text-base font-semibold hover:bg-white hover:text-[#7A1E2C] transition text-center"
            >
              Se meny
            </a>
          </div>

          <div className="w-full grid grid-cols-1 md:grid-cols-3 overflow-hidden rounded-2xl border border-white/20 shadow-xl">
            <a href="/menu#dryck1" className="group relative overflow-hidden h-[110px] sm:h-[170px] border-r border-white/20">
              <img src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=800&auto=format&fit=crop" alt="Dryckesmeny" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition duration-500" />
              <div className="absolute inset-0 bg-black/45 group-hover:bg-black/55 transition duration-300" />
              <div className="relative z-10 h-full flex items-end p-3 sm:p-4">
                <div>
                  <p className="text-white/70 text-[10px] uppercase tracking-widest mb-1">Dryck</p>
                  <h3 className="text-white text-sm sm:text-xl font-semibold leading-tight">Dryckesmeny</h3>
                </div>
              </div>
            </a>
            <a href="/menu" className="group relative overflow-hidden h-[110px] sm:h-[170px] border-r border-white/20">
              <img src="https://images.unsplash.com/photo-1555949258-eb67b1ef0ceb?q=80&w=800&auto=format&fit=crop" alt="Meny" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition duration-500" />
              <div className="absolute inset-0 bg-black/45 group-hover:bg-black/55 transition duration-300" />
              <div className="relative z-10 h-full flex items-end p-3 sm:p-4">
                <div>
                  <p className="text-white/70 text-[10px] uppercase tracking-widest mb-1">Mat</p>
                  <h3 className="text-white text-sm sm:text-xl font-semibold leading-tight">Meny</h3>
                </div>
              </div>
            </a>
            <a href="/sport" className="group relative overflow-hidden h-[110px] sm:h-[170px]">
              <img src="/images/sport.png" alt="Sport" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition duration-500" />
              <div className="absolute inset-0 bg-black/45 group-hover:bg-black/55 transition duration-300" />
              <div className="relative z-10 h-full flex items-end p-3 sm:p-4">
                <div>
                  <p className="text-white/70 text-[10px] uppercase tracking-widest mb-1">Live Sport</p>
                  <h3 className="text-white text-sm sm:text-xl font-semibold leading-tight">Sport</h3>
                </div>
              </div>
            </a>
          </div>

          {/* Scrolling reviews */}
          <div className="hidden md:block mt-6 overflow-hidden w-full">
            <div
              className="flex gap-4 py-2"
              style={{ animation: "scroll 30s linear infinite" }}
            >
              {allReviews.map((text, i) => (
                <div
                  key={i}
                  className="min-w-[260px] max-w-[260px] sm:min-w-[300px] sm:max-w-[300px] bg-white/10 border border-white/20 rounded-xl p-4 text-left shrink-0 hover:bg-white/15 transition duration-300"
                >
                  <p className="text-yellow-400 mb-2 text-sm">★★★★★</p>
                  <p className="text-xs sm:text-sm text-white/85 leading-relaxed">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right column — desktop only */}
        <div className="hidden lg:flex justify-end items-center">
          <div className="relative overflow-hidden rounded-3xl border border-white/20 shadow-2xl w-full max-w-[640px] h-[420px]">
            <img src="/images/npr.png" alt="Nya Piccola Rosa restaurang i Hässelby Strand" className="absolute inset-0 w-full h-full object-cover object-center" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#7A1E2C]/60 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6 text-left">
              <p className="text-white/70 text-xs uppercase tracking-widest mb-2">Hässelby Strand</p>
              <h3 className="text-white text-2xl font-semibold leading-tight">En modern kvarterskrog med italiensk själ</h3>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}