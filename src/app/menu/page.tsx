import MenuSection from "../components/MenuSection";

const pizzor = [
  { name: "Margherita", description: "Tomatsås, mozzarella, basilika", price: "135 kr" },
  { name: "Vesuvio", description: "Skinka", price: "140 kr" },
];

const pasta = [
  { name: "Carbonara", description: "Grädde, pancetta, parmesan", price: "145 kr" },
  { name: "Bolognese", description: "Köttfärssås", price: "140 kr" },
];

const sallader = [
  { name: "Caesarsallad", description: "Kyckling, parmesan", price: "135 kr" },
];

export default function MenuPage() {
  return (
    <main className="min-h-screen px-6 py-16 max-w-4xl mx-auto">
      
      <h1 className="text-4xl md:text-5xl font-semibold mb-12 text-center">
        Meny
      </h1>

      <MenuSection title="Pizzor" items={pizzor} />
      <MenuSection title="Pasta" items={pasta} />
      <MenuSection title="Sallader" items={sallader} />

    </main>
  );
}