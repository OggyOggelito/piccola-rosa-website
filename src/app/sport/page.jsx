export default function SportPage() {
  return (
    <main className="min-h-screen bg-[#F8F5F2] text-black overflow-hidden">
      {/* Hero */}
      <section className="relative px-4 md:px-6 pt-28 pb-20 md:py-36 text-center overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-b from-black/60 via-black/40 to-[#F8F5F2]" />
        <img
          src="/images/npr.png"
          alt="Nya Piccola Rosa restaurang"
          className="absolute inset-0 w-full h-full object-cover opacity-25"
        />

        <div className="relative z-10 max-w-5xl mx-auto backdrop-blur-[2px] rounded-3xl px-4 py-6">
          <p className="text-[#7A1E2C] uppercase tracking-[0.3em] text-sm md:text-base font-medium mb-4">
            Live Sport hos Nya Piccola Rosa
          </p>

          <h1 className="text-[2.4rem] sm:text-5xl md:text-7xl font-semibold leading-[1.1] mb-6">
            Sport, mat och magisk stämning
          </h1>

          <p className="text-lg md:text-2xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
            Upplev de största matcherna live hos Nya Piccola Rosa — från
            Allsvenskan och Champions League till Premier League,
            derbykvällar, UFC och mycket mer.
          </p>
        </div>
      </section>

      {/* Highlights */}
      <section className="px-4 md:px-6 pb-16 md:pb-24">
        <div className="max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-6 -mt-10 relative z-20">
          <div className="bg-white/90 backdrop-blur-sm border border-[#7A1E2C]/10 rounded-3xl p-6 shadow-lg hover:-translate-y-1 hover:shadow-2xl transition duration-300">
            <div className="text-4xl mb-4">🔥</div>
            <h3 className="text-xl font-semibold mb-2">
              Hetaste matcherna live
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Se de största matcherna och sporteventen live tillsammans med
              andra fans.
            </p>
          </div>

          <div className="bg-white/90 backdrop-blur-sm border border-[#7A1E2C]/10 rounded-3xl p-6 shadow-lg hover:-translate-y-1 hover:shadow-2xl transition duration-300">
            <div className="text-4xl mb-4">🍻</div>
            <h3 className="text-xl font-semibold mb-2">Iskall öl</h3>
            <p className="text-gray-600 leading-relaxed">
              Njut av kall öl och dryck under matchkvällarna i en avslappnad
              miljö.
            </p>
          </div>

          <div className="bg-white/90 backdrop-blur-sm border border-[#7A1E2C]/10 rounded-3xl p-6 shadow-lg hover:-translate-y-1 hover:shadow-2xl transition duration-300">
            <div className="text-4xl mb-4">🍕</div>
            <h3 className="text-xl font-semibold mb-2">Fantastisk mat</h3>
            <p className="text-gray-600 leading-relaxed">
              Pizza, plankor, grillrätter och mycket mer till kvällens matcher.
            </p>
          </div>

          <div className="bg-white/90 backdrop-blur-sm border border-[#7A1E2C]/10 rounded-3xl p-6 shadow-lg hover:-translate-y-1 hover:shadow-2xl transition duration-300">
            <div className="text-4xl mb-4">⚽</div>
            <h3 className="text-xl font-semibold mb-2">Äkta matchkänsla</h3>
            <p className="text-gray-600 leading-relaxed">
              Samla vännerna och upplev kvällarna alla kommer prata om.
            </p>
          </div>
        </div>
      </section>

      {/* Closing */}
      <section className="px-4 md:px-6 pb-24 text-center">
        <div className="max-w-4xl mx-auto bg-linear-to-br from-[#7A1E2C] to-[#4d111b] text-white rounded-4xl p-8 md:p-14 shadow-2xl border border-white/10">
          <h2 className="text-3xl md:text-5xl font-semibold mb-6 leading-tight">
            Hässelbys nya mötesplats för live sport
          </h2>

          <p className="text-lg md:text-xl text-white/90 leading-relaxed max-w-3xl mx-auto">
            Välkommen till Nya Piccola Rosa — mötesplatsen för sport, mat och
            skön stämning i Hässelby Strand.
          </p>
        </div>
      </section>
    </main>
  );
}