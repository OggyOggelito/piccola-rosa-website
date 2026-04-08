import MenuSection from "../components/MenuSection";

// --- PIZZOR ---
const pizzorKlass1 = [
  { name: "Margherita", description: "Tomatsås och ost", price: "135 kr" },
  { name: "Vesuvio", description: "Tomatsås, ost och skinka", price: "140 kr" },
  { name: "Funghi", description: "Tomatsås, ost och färska champinjoner", price: "140 kr" },
  { name: "Cacciatore", description: "Tomatsås, ost, salami och lök", price: "145 kr" },
  { name: "Bolognese", description: "Tomatsås, ost, lök och köttfärssås", price: "145 kr" },
  { name: "Pompei", description: "Tomatsås, ost, bacon och lök", price: "145 kr" },
  { name: "Napolitano", description: "Tomatsås, ost, sardeller och oliver", price: "145 kr" },
  { name: "Shako", description: "Tomatsås, ost och pepperonikorv", price: "145 kr" },
  { name: "Arin", description: "Tomatsås, ost, banan, ananas och curry", price: "145 kr" },
];

const pizzorKlass2 = [
  { name: "Capricciosa", description: "Tomatsås, ost, skinka och färska champinjoner", price: "145 kr" },
  { name: "Americana", description: "Tomatsås, ost, köttfärs och färska champinjoner", price: "145 kr" },
  { name: "Hawaii", description: "Tomatsås, ost, skinka och ananas", price: "145 kr" },
  { name: "Marinara", description: "Tomatsås, ost, räkor och musslor", price: "150 kr" },
  { name: "Del Opera", description: "Tomatsås, ost, skinka och tonfisk", price: "150 kr" },
  { name: "Paradiso", description: "Tomatsås, ost, champinjoner och räkor", price: "150 kr" },
  { name: "Vegetariana", description: "Tomatsås, ost, champinjoner, lök, oliver, kronärtskocka och paprika", price: "145 kr" },
  { name: "Bussola", description: "Tomatsås, ost, skinka och räkor", price: "150 kr" },
  { name: "Kycklingpizza", description: "Tomatsås, ost, kyckling, ananas och curry", price: "150 kr" },
];

const pizzorKlass3 = [
  { name: "Tropicana", description: "Tomatsås, ost, skinka, ananas, banan och curry", price: "155 kr" },
  { name: "Gorgonzola", description: "Tomatsås, ost, skinka och gorgonzola", price: "155 kr" },
  { name: "Havets Special", description: "Tomatsås, ost och blandade skaldjur", price: "160 kr" },
  { name: "Kebab Pizza", description: "Tomatsås, ost, lök, feferoni, färska tomater, kebabkött och kebabsås", price: "155 kr" },
  { name: "Canon", description: "Tomatsås, ost, bacon, salami, lök och ägg", price: "155 kr" },
  { name: "Dallas", description: "Tomatsås, ost, köttfärs, färska champinjoner och ägg", price: "155 kr" },
  { name: "Hässelby", description: "Tomatsås, ost, fårost, mozzarella, honung, ruccola och pinjenötter", price: "165 kr" },
  { name: "Prinsessa", description: "Tomatsås, ost, skinka, räkor och ananas", price: "155 kr" },
  { name: "Roma", description: "Tomatsås, ost, skinka, färska champinjoner och räkor", price: "155 kr" },
  { name: "Riviera", description: "Tomatsås, ost, skinka, färska champinjoner, räkor och salami", price: "160 kr" },
  { name: "Fårostpizza", description: "Tomatsås, ost, lök, paprika, oliver, tomat, fårost, ruccola och purjolök", price: "160 kr" },
  { name: "Merto", description: "Tomatsås, ost, färska champinjoner, fårost, aubergine, zucchini, ruccola och soltorkade tomater", price: "165 kr" },
  { name: "Shakira", description: "Tomatsås, ost, mozzarella, färska champinjoner, aubergine, zucchini, soltorkade tomater och ruccola", price: "165 kr" },
  { name: "Husets Special", description: "Tomatsås, ost, skinka, champinjoner, lök, paprika och räkor", price: "160 kr" },
  { name: "Indiana", description: "Tomatsås, ost, kyckling, banan, ananas, curry och nötter", price: "160 kr" },
  { name: "Quattro Sta", description: "Tomatsås, ost, skinka, champinjoner, räkor och musslor", price: "160 kr" },
];

const pizzorKlass4 = [
  { name: "Oxfilepizza", description: "Tomatsås, ost, lök, färska champinjoner, oxfilé, bearnaisesås och färska tomater", price: "175 kr" },
  { name: "Milan", description: "Tomatsås, ost, oxfilé, gorgonzola, paprika, färska tomater, vitlök och champinjoner", price: "175 kr" },
  { name: "Kebab Special", description: "Tomatsås, ost, kebabkött, sallad, tomater, lök, feferoni och kebabsås", price: "170 kr" },
  { name: "Gyros Pizza", description: "Tomatsås, ost, gyros, lök, tomat, vitlökssås och feferoni", price: "170 kr" },
  { name: "Battes Special", description: "Tomatsås, ost, oxfilé, purjolök, bearnaisesås, champinjoner, lök och paprika", price: "175 kr" },
  { name: "Martinas Special", description: "Tomatsås, ost, oxfilé, bacon och gorgonzola", price: "175 kr" },
  { name: "Mancini", description: "Tomatsås, ost, mozzarella, oxfilé, champinjoner, soltorkade tomater, purjolök, bearnaisesås och pesto", price: "180 kr" },
  { name: "Fläskfile Pizza", description: "Tomatsås, ost, champinjoner, lök, tomater, gorgonzola och fläskfilé", price: "175 kr" },
];

const pizzorKlass5 = [
  { name: "Mimos Special", description: "Tomatsås, ost, fläskfilé, banan, jordnötter och curry", price: "175 kr" },
  { name: "Runos Special", description: "Tomatsås, ost, fläskfilé, salami, gorgonzola och purjolök", price: "175 kr" },
  { name: "Lången Special", description: "Tomatsås, ost, fläskfilé, champinjoner, tomat och bearnaisesås", price: "175 kr" },
  { name: "Lasses Special", description: "Tomatsås, ost, skinka, champinjoner, bacon, köttfärs, paprika, lök och tabasco", price: "175 kr" },
  { name: "Jägaren Special", description: "Tomatsås, ost, skinka, champinjoner, räkor, bacon, ananas och nötter", price: "175 kr" },
];

const italienskaPizzor = [
  { name: "Le Chef", description: "Tomatsås, ost, parmaskinka, mozzarella, tomater, oliver och ruccola", price: "165 kr" },
  { name: "Verona", description: "Tomatsås, ost, parmaskinka, mozzarella, champinjoner, soltorkade tomater och purjolök", price: "165 kr" },
  { name: "Scampi Pizza", description: "Tomatsås, ost, scampi, mozzarella, räkor, soltorkade tomater, rödlök och vitlök", price: "170 kr" },
  { name: "Venedig", description: "Tomatsås, ost, parmaskinka, mozzarella, paprika, spenat och pinjenötter", price: "165 kr" },
];

const mexikanskaPizzor = [
  { name: "Azteka", description: "Tomatsås, ost, skinka, taco sås, kryddmix, jalapeño och gräddfil", price: "155 kr" },
  { name: "Mexikana", description: "Tomatsås, ost, köttfärs, lök, taco sås, kryddmix, jalapeño och vitlök", price: "155 kr" },
  { name: "Acapulco", description: "Tomatsås, ost, oxfilé, champinjoner, lök, jalapeño, taco sås och vitlök", price: "165 kr" },
  { name: "Den Gode", description: "Tomatsås, ost, kyckling, champinjoner, paprika, ananas, curry, taco sås och jalapeño", price: "160 kr" },
];

const halvinbakade = [
  { name: "Oscar", description: "Tomatsås, ost, oxfilé, räkor och bearnaisesås", price: "170 kr" },
  { name: "Ciao Ciao", description: "Tomatsås, ost, oxfilé, paprika, tomater och bearnaisesås", price: "170 kr" },
  { name: "Shish Kebab", description: "Tomatsås, ost, oxfilé, lök, champinjoner, paprika och bearnaisesås", price: "170 kr" },
  { name: "Gudfader", description: "Tomatsås, ost, oxfilé, lök, tomat och vitlök", price: "170 kr" },
];

const inbakade = [
  { name: "Calzone Bussola", description: "Tomatsås, ost, skinka och räkor", price: "150 kr" },
  { name: "Calzone Capri", description: "Tomatsås, ost, skinka och champinjoner", price: "150 kr" },
  { name: "Calzone", description: "Tomatsås, ost och skinka", price: "145 kr" },
  { name: "Tefat", description: "Dubbelinbakad. Tomatsås, ost och skinka", price: "160 kr" },
  { name: "UFO", description: "Tomatsås, ost, skinka, champinjoner och räkor", price: "160 kr" },
  { name: "Mezza Luna", description: "Halv mozzarella/skinka, halv mozzarella/parmaskinka/ruccola", price: "165 kr" },
];

const panpizza = [
  { name: "Honolulu", description: "Skinka, banan, curry, räkor", price: "160 kr" },
  { name: "San Fransiso", description: "Skinka, lök, paprika, champinjoner", price: "155 kr" },
  { name: "Arizona", description: "Skinka, bacon, räkor, champinjoner", price: "160 kr" },
  { name: "Mexicana - S", description: "Small", price: "140 kr" },
  { name: "Pizza", description: "Oxfilé, tomater, bearnaisesås, champinjoner", price: "170 kr" },
  { name: "Miami", description: "Kyckling, banan, ananas, curry", price: "160 kr" },
];

const salladerFull = [
  { name: "Avokadosallad", description: "Räkor, skinka, avokado, ägg, citron, majs, tomat och gurka", price: "139 kr" },
  { name: "Kycklingsallad", description: "Kyckling, paprika, majs, ananas, tomat och gurka", price: "135 kr" },
  { name: "Räksallad", description: "Räkor, paprika, champinjoner, tomater, gurka, ägg, citron", price: "139 kr" },
  { name: "Västkustsallad", description: "Räkor, musslor, paprika, champinjoner, citron, ägg", price: "139 kr" },
  { name: "Parmasallad", description: "Parmaskinka, soltorkade tomater, paprika, champinjoner, ruccola", price: "135 kr" },
  { name: "Ost Skinksallad", description: "Ost, skinka, champinjoner, paprika, majs, tomat", price: "135 kr" },
  { name: "Tonfisksallad", description: "Tonfisk, paprika, lök, majs, ägg, citron", price: "135 kr" },
  { name: "Grekisksallad", description: "Fårost, lök, tomat, gurka, oliver, feferoni", price: "135 kr" },
  { name: "Kebabsallad", description: "Kebabkött, lök, feferoni, tomat, gurka, vitlökssås", price: "135 kr" },
  { name: "Halloumisallad", description: "Halloumi, sallad, tomat, gurka, paprika", price: "135 kr" },
  { name: "Cesarsallad", description: "Kycklingfilé, krutonger, tomat, ruccola, dressing", price: "145 kr" },
];

const pastaFull = [
  { name: "Husets Pasta", description: "Oxfilé, champinjoner, vitlök, pesto, rödvinssås", price: "143 kr" },
  { name: "Taxi Pasta", description: "Oxfilé, champinjoner, paprika och gorgonzolasås", price: "143 kr" },
  { name: "Pasta Penne", description: "Oxfilé, champinjoner, paprika och gorgonzolasås", price: "143 kr" },
  { name: "Pasta Goloza", description: "Kyckling, paprika, zucchini, vitvin och tomatsås", price: "143 kr" },
  { name: "Pasta Al Salmone", description: "Lax, vitvin, paprika, vitlök och tomatsås", price: "143 kr" },
  { name: "Pasta Frutti Di Mare", description: "Scampi, räkor, musslor, vitvin, vitlök", price: "148 kr" },
  { name: "Pasta Carbonara", description: "Bacon, lök, ägg, gräddsås", price: "143 kr" },
  { name: "Vegetarisk Pasta", description: "Soltorkade tomater, oliver, zucchini, champinjoner", price: "139 kr" },
  { name: "Pasta Bolognese", description: "Köttfärs, vitlök och tomatsås", price: "143 kr" },
  { name: "Lasagne Al Forno", description: "Hemlagad", price: "143 kr" },
  { name: "Avokado Pasta", description: "Avokado, räkor, paprika och champinjoner", price: "143 kr" },
  { name: "Kyckling Ala Piccola", description: "Kyckling, paprika, champinjoner, currysås", price: "143 kr" },
];

const alaCarteFull = [
  { name: "Fläskfile Oscar", description: "Med räkor, grönsaker, rödvinssås och bearnaise", price: "229 kr" },
  { name: "Entrecote", description: "Med grönsaker, rödvinssås och pommes", price: "229 kr" },
  { name: "Wienerschnitzel", description: "Med ärtor, kapris och citron", price: "229 kr" },
  { name: "Biff på planka", description: "Med grillade grönsaker och bearnaise", price: "229 kr" },
];

const grillFull = [
  { name: "Kebabtallrik", description: "Med pommes eller ris", price: "139 kr" },
  { name: "Mix tallrik", description: "Kebab och kyckling", price: "149 kr" },
  { name: "Kyckling tallrik", description: "Med pommes eller ris", price: "140 kr" },
  { name: "Falafel tallrik", description: "Med pommes eller ris", price: "139 kr" },
  { name: "Kyckling rulle", description: "Kyckling, sallad, lök, tomat", price: "140 kr" },
  { name: "Kebabrulle", description: "Kebab, sallad, lök, tomat", price: "139 kr" },
  { name: "Kebab m. bröd", description: "Sallad, lök, tomat", price: "110 kr" },
  { name: "Falafel m. bröd", description: "Sallad, lök, tomat", price: "110 kr" },
  { name: "Gyros tallrik", description: "Med pommes eller ris", price: "145 kr" },
  { name: "Falafel rulle", description: "Sallad, lök, tomat", price: "135 kr" },
];

const dryckFull = [
  { name: "Coca Cola 2L", description: "", price: "50 kr" },
  { name: "Coca Cola Zero 2L", description: "", price: "50 kr" },
  { name: "Mer Jordgubb", description: "20cl", price: "17 kr" },
  { name: "Pepsi Max", description: "33cl", price: "26 kr" },
  { name: "Sprite Zero", description: "33cl", price: "26 kr" },
  { name: "Trocadero", description: "33cl", price: "26 kr" },
  { name: "Fanta", description: "33cl", price: "26 kr" },
];

// --- PASTA ---
const pasta = [
  { name: "Carbonara", description: "Grädde, pancetta, parmesan", price: "145 kr" },
  { name: "Bolognese", description: "Köttfärssås", price: "140 kr" },
  { name: "Lasagne", description: "Ugnsbakad klassiker", price: "155 kr" },
];

// --- SALLADER ---
const sallader = [
  { name: "Caesarsallad", description: "Kyckling, parmesan, dressing", price: "135 kr" },
  { name: "Grekisk sallad", description: "Fetaost, oliver", price: "130 kr" },
];

// --- À LA CARTE ---
const alaCarte = [
  { name: "Fläskfilé Oscar", description: "Serveras med pommes", price: "199 kr" },
  { name: "Entrecôte", description: "Med bearnaisesås", price: "219 kr" },
];

// --- GRILL & KEBAB ---
const grill = [
  { name: "Kebabtallrik", description: "Pommes, sås", price: "135 kr" },
  { name: "Kycklingtallrik", description: "Pommes, sås", price: "135 kr" },
];

// --- HAMBURGARE ---
const burgare = [
  { name: "Cheeseburgare", description: "Ost, dressing", price: "120 kr" },
  { name: "Halloumiburgare", description: "Vegetarisk", price: "125 kr" },
];

// --- FISK ---
const fisk = [
  { name: "Fish & Chips", description: "Serveras med remoulad", price: "145 kr" },
  { name: "Lax", description: "Med potatis", price: "165 kr" },
];

// --- MACKOR ---
const mackor = [
  { name: "Vitlöksbröd", description: "Med ost", price: "75 kr" },
];

// --- DRYCK ---
const dryck = [
  { name: "Coca-Cola", description: "33cl", price: "25 kr" },
  { name: "Fanta", description: "33cl", price: "25 kr" },
];

export default function MenuPage() {
  return (
    <main className="min-h-screen px-6 py-16 max-w-4xl mx-auto">

      <h1 className="text-4xl md:text-5xl font-semibold mb-12 text-center">
        Meny
      </h1>

      <MenuSection title="Pizzor Klass 1" items={pizzorKlass1} />
      <MenuSection title="Pizzor Klass 2" items={pizzorKlass2} />
      <MenuSection title="Pizzor Klass 3" items={pizzorKlass3} />
      <MenuSection title="Pizzor Klass 4" items={pizzorKlass4} />
      <MenuSection title="Pizzor Klass 5" items={pizzorKlass5} />
      <MenuSection title="Italienska Delikatesspizzor" items={italienskaPizzor} />
      <MenuSection title="Mexikanska pizzor" items={mexikanskaPizzor} />
      <MenuSection title="Halvinbakade pizzor" items={halvinbakade} />

      <MenuSection title="Inbakade pizzor" items={inbakade} />
      <MenuSection title="Panpizza" items={panpizza} />

      <MenuSection title="Sallader" items={salladerFull} />
      <MenuSection title="Pasta rätter" items={pastaFull} />

      <MenuSection title="À La Carte" items={alaCarteFull} />
      <MenuSection title="Grill Kebab" items={grillFull} />

      <MenuSection title="Dryck" items={dryckFull} />

    </main>
  );
}