export default function HomeAbout() {
  return (
    <section className="px-6 py-20 max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-center">
      
      <div>
        <h2 className="text-3xl md:text-4xl font-semibold mb-6">
          Om Piccola Rosa
        </h2>

        <p className="text-gray-700 mb-4">
          Hos oss på Nya Piccola Rosa möts du av doften av nylagad mat, ljudet av levande samtal och känslan av att vara hemma, fast med något extra.
        </p>

        <p className="text-gray-700 mb-4">
          Vi är en familjeägd restaurang, driven av far och son, där passionen för mat, dryck och service genomsyrar allt vi gör. Här kombinerar vi smaker med noggrant utvalda råvaror och skapar rätter som får dig att vilja stanna lite längre.
        </p>

        <p className="text-gray-700 mb-4">
          Slå dig ner för en avslappnad middag, ta ett glas vin i gott sällskap eller beställ hem dina favoriter via Foodora, oavsett hur du väljer att uppleva oss, vill vi ge dig mer än bara en måltid.
        </p>

        <p className="text-gray-700 mb-4">
          Hos oss handlar det om stunderna runt bordet. Om smakerna du minns. Och känslan som får dig att vilja komma tillbaka.
        </p>

        <p className="text-[#7A1E2C] font-medium">
          Välkommen in till din lokala kvarterskrog.
        </p>
      </div>

      <div className="w-full h-75 md:h-100 bg-cover bg-center rounded-xl"
        style={{ backgroundImage: "url('/images/restaurant.jpg')" }}
      />
      
    </section>
  );
}