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
            href="#booking"
            className="bg-white text-black px-6 py-3 rounded-full text-lg font-medium hover:bg-gray-200 transition"
          >
            Boka bord
          </a>

          <a
            href="/menu"
            className="border border-white px-6 py-3 rounded-full text-lg font-medium hover:bg-white hover:text-black transition"
          >
            Se meny
          </a>
        </div>
      </div>
    </section>
  );
}
