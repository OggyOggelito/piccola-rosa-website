import Hero from "./components/Hero";
import HomeAbout from "./sections/HomeAbout";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Hero />

      <HomeAbout />

      {/* Location Section */}
      <section className="px-4 md:px-6 pb-24 max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <p className="text-[#7A1E2C] uppercase tracking-[0.25em] text-sm mb-3">
            Hitta hit
          </p>

          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Besök oss i Hässelby Strand
          </h2>

          <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
            Nya Piccola Rosa är den perfekta platsen för middag, live sport,
            afterwork och sköna kvällar med familj och vänner.
          </p>
        </div>

        <div className="overflow-hidden rounded-3xl shadow-2xl border border-black/5">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d20139.54295410172!2d17.815568551012475!3d59.359585033717785!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x465f9fe03b741b6f%3A0x37aea916889f16ae!2sNya%20Piccola%20Rosa!5e0!3m2!1ssv!2sse!4v1780049246916!5m2!1ssv!2sse"
            width="100%"
            height="500"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-[420px] md:h-[520px] border-0"
          />
        </div>
      </section>
    </main>
  );
}
