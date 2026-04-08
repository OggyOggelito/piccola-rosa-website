import MenuSection from "../components/MenuSection";

const starters = [
  {
    name: "Bruschetta",
    description: "Tomat, basilika, olivolja",
    price: "95 kr",
  },
  {
    name: "Caprese",
    description: "Mozzarella, tomat, basilika",
    price: "115 kr",
  },
];

const mains = [
  {
    name: "Pasta Carbonara",
    description: "Grädde, pancetta, parmesan",
    price: "145 kr",
  },
  {
    name: "Pizza Margherita",
    description: "Tomatsås, mozzarella, basilika",
    price: "135 kr",
  },
];

export default function HomeMenuPreview() {
  return (
    <section className="px-6 py-20 max-w-5xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-semibold mb-4">
          Vår meny
        </h2>
        <p className="text-gray-400 max-w-xl mx-auto">
          Ett urval av våra mest populära rätter – tillagade med passion och
          italienska traditioner
        </p>
      </div>

      <MenuSection title="Förrätter" items={starters} />
      <MenuSection title="Huvudrätter" items={mains} />

      <div className="flex justify-center mt-10">
        <a
          href="/menu"
          className="border border-white px-6 py-3 rounded-full text-lg font-medium hover:bg-white hover:text-black transition"
        >
          Se hela menyn
        </a>
      </div>
    </section>
  );
}
