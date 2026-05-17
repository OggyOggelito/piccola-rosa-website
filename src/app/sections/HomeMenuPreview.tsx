export default function HomeAbout() {
  return (
    <section className="px-6 pt-10 md:pt-16 pb-24 max-w-5xl mx-auto text-center relative z-10">
      {/* Heading */}
      <div className="mb-32 md:mb-44">
        <h2 className="text-4xl md:text-6xl font-bold tracking-tight">
          Om Piccola Rosa
        </h2>
      </div>

      {/* Content below logo */}
      <div className="pt-20 md:pt-28">
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
