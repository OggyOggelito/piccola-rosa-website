

export default function HomeAbout() {
  return (
    <section className="px-6 py-20 max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-center">
      
      <div>
        <h2 className="text-3xl md:text-4xl font-semibold mb-6">
          Om Piccola Rosa
        </h2>

        <p className="text-gray-300 mb-4">
          På Piccola Rosa erbjuder vi en genuin italiensk matupplevelse där
          tradition möter modern elegans. Våra rätter tillagas med noggrant
          utvalda råvaror och en passion för smak.
        </p>

        <p className="text-gray-400">
          Oavsett om du besöker oss för en middag, en dejt eller en kväll med
          vänner, strävar vi alltid efter att skapa en varm och minnesvärd
          atmosfär.
        </p>
      </div>

      <div className="w-full h-75 md:h-100 bg-cover bg-center rounded-xl"
        style={{ backgroundImage: "url('/images/restaurant.jpg')" }}
      />
      
    </section>
  );
}