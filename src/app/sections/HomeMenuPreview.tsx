export default function HomeAbout() {
  return (
    <section className="px-6 pt-10 md:pt-16 pb-24 max-w-5xl mx-auto text-center relative z-10">
      {/* Heading */}
      <div className="mb-12 md:mb-16">
        <h2 className="text-4xl md:text-6xl font-bold tracking-tight">
          Om Piccola Rosa
        </h2>
      </div>

      {/* Center Logo */}
      <div className="flex justify-center items-center mb-16 md:mb-24 pointer-events-none">
        <img
          src="/images/nya_piccola_rosa.png"
          alt="Piccola Rosa Logo"
          className="w-[320px] md:w-[520px] opacity-[0.12] object-contain select-none"
        />
      </div>

      {/* Content below logo */}
      <div>
        <p className="text-gray-700 text-lg md:text-2xl mb-12 leading-relaxed max-w-3xl mx-auto">
          Hos oss på Nya Piccola Rosa möts du av doften av nylagad mat,
          ljudet av levande samtal och känslan av att vara hemma, fast med
          något extra.
        </p>

        <p className="text-gray-700 text-lg md:text-xl mb-10 leading-relaxed max-w-3xl mx-auto">
          Vi är en familjeägd restaurang, driven av far och son, där
          passionen för mat, dryck och service genomsyrar allt vi gör.
        </p>

        <p className="text-gray-700 text-lg md:text-xl mb-12 leading-relaxed max-w-3xl mx-auto">
          Slå dig ner för en middag, ta ett glas vin eller beställ hem via
          Foodora – vi vill ge dig mer än bara en måltid.
        </p>

        <p className="text-[#7A1E2C] text-xl md:text-2xl font-medium mt-6">
          Välkommen in till din lokala kvarterskrog.
        </p>
      </div>
    </section>
  );
}
