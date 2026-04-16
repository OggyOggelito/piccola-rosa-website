import MenuSection from "../components/MenuSection";


// --- PIZZOR ---
const pizzorKlass1 = [
  { name: "Marghereta", description: "Tomatsås och ost", price: "305 kr (F) / 125 kr (S)", image: "/images/food_pics/pizza_class_1/marghereta.webp" },
  { name: "Vesuvio", description: "Tomatsås, ost och skinka", price: "305 kr (F) / 125 kr (S)", image: "/images/food_pics/pizza_class_1/vesuvio.jpeg" },
  { name: "Funghi", description: "Tomatsås, ost och färska champinjoner", price: "305 kr (F) / 125 kr (S)", image: "/images/food_pics/pizza_class_1/funghi.jpeg" },
  { name: "Caccatore", description: "Tomatsås, ost, salami och lök", price: "305 kr (F) / 125 kr (S)", image: "/images/food_pics/pizza_class_1/caccatore.webp" },
  { name: "Bolognese", description: "Tomatsås, ost, lök och köttfärssås", price: "305 kr (F) / 120 kr (S)", image: "/images/food_pics/pizza_class_1/bolognese.jpeg" },
  { name: "Pompei", description: "Tomatsås, ost, bacon och lök", price: "305 kr (F) / 125 kr (S)", image: "/images/food_pics/pizza_class_1/pompei.webp" },
  { name: "Napolitano", description: "Tomatsås, ost, sardeller och oliver", price: "305 kr (F) / 125 kr (S)", image: "/images/food_pics/pizza_class_1/napolitano.webp" },
  { name: "Shako", description: "Tomatsås, ost och pepperonikorv", price: "305 kr (F) / 125 kr (S)", image: "/images/food_pics/pizza_class_1/shako.webp" },
  { name: "Arin", description: "Tomatsås, ost, banan, ananas och curry", price: "305 kr (F) / 125 kr (S)", image: "/images/food_pics/pizza_class_1/arin.jpeg" },
];

const pizzorKlass2 = [
  { name: "Capricciosa", description: "Tomatsås, ost, skinka och färska champinjoner", price: "330 kr (F) / 129 kr (S)", image: "/images/food_pics/pizza_class_2/capricciosa.jpeg" },
  { name: "Americana", description: "Tomatsås, ost, köttfärs och färska champinjoner", price: "325 kr (F) / 129 kr (S)", image: "/images/food_pics/pizza_class_2/americana.jpeg" },
  { name: "Hawaii", description: "Tomatsås, ost, skinka och ananas", price: "325 kr (F) / 129 kr (S)", image: "/images/food_pics/pizza_class_2/hawaii.jpeg" },
  { name: "Marinara", description: "Tomatsås, ost, räkor och musslor", price: "325 kr (F) / 134 kr (S)", image: "/images/food_pics/pizza_class_2/marinara.webp" },
  { name: "Del Opera", description: "Tomatsås, ost, skinka och tonfisk", price: "325 kr (F) / 129 kr (S)", image: "/images/food_pics/pizza_class_2/del opera.webp" },
  { name: "Paradiso", description: "Tomatsås, ost, champinjoner och räkor", price: "325 kr (F) / 129 kr (S)", image: "/images/food_pics/pizza_class_2/paradiso.jpeg" },
  { name: "Vegetariana", description: "Tomatsås, ost, champinjoner, lök, oliver, kronärtskocka och paprika", price: "325 kr (F) / 129 kr (S)", image: "/images/food_pics/pizza_class_2/vegetariana.jpeg" },
  { name: "Bussola", description: "Tomatsås, ost, skinka och räkor", price: "325 kr (F) / 129 kr (S)", image: "/images/food_pics/pizza_class_2/bussola.webp" },
  { name: "Kycklingpizza", description: "Tomatsås, ost, kyckling, ananas och curry", price: "325 kr (F) / 135 kr (S)", image: "/images/food_pics/pizza_class_2/kycklingpizza.jpeg" },
];

const pizzorKlass3 = [
  { name: "Tropicana", description: "Tomatsås, ost, skinka, ananas, banan och curry", price: "330 kr (F) / 130 kr (S)", image: "/images/food_pics/pizza_class_3/tropicana.jpeg" },
  { name: "Gorgonzola", description: "Tomatsås, ost, skinka och gorgonzola", price: "330 kr (F) / 130 kr (S)", image: "/images/food_pics/pizza_class_3/gorgonzola.webp" },
  { name: "Havets Special", description: "Tomatsås, ost och blandade skaldjur", price: "330 kr (F) / 130 kr (S)", image: "/images/food_pics/pizza_class_3/havets_special.jpeg" },
  { name: "Kebab Pizza", description: "Tomatsås, ost, lök, feferoni, färska tomater, kebabkött och kebabsås", price: "350 kr (F) / 139 kr (S)", image: "/images/food_pics/pizza_class_3/kebab_pizza.webp" },
  { name: "Canon", description: "Tomatsås, ost, bacon, salami, lök och ägg", price: "330 kr (F) / 135 kr (S)", image: "/images/food_pics/pizza_class_3/canon.jpeg" },
  { name: "Dallas", description: "Tomatsås, ost, köttfärs, färska champinjoner och ägg", price: "330 kr (F) / 130 kr (S)", image: "/images/food_pics/pizza_class_3/dallas.jpeg" },
  { name: "Hässelby", description: "Tomatsås, ost, fårost, mozzarella, honung, ruccola och pinjenötter", price: "330 kr (F) / 139 kr (S)", image: "/images/food_pics/pizza_class_3/hasselby.jpeg" },
  { name: "Prinsessa", description: "Tomatsås, ost, skinka, räkor och ananas", price: "330 kr (F) / 130 kr (S)", image: "/images/food_pics/pizza_class_3/prinsessa.jpeg" },
];

const pizzorKlass4 = [
  { name: "Roma", description: "Tomatsås, ost, skinka, färska champinjoner och räkor", price: "340 kr (F) / 139 kr (S)", image: "/images/food_pics/pizza_class_4/roma.png" },
  { name: "Riviera", description: "Tomatsås, ost, skinka, färska champinjoner, räkor och salami", price: "340 kr (F) / 135 kr (S)", image: "/images/food_pics/pizza_class_4/riviera.png" },
  { name: "Fårostpizza", description: "Tomatsås, ost, lök, paprika, oliver, tomat, fårost, ruccola och purjolök", price: "340 kr (F) / 139 kr (S)", image: "/images/food_pics/pizza_class_4/farostpizza.png" },
  { name: "Merto", description: "Tomatsås, ost, färska champinjoner, fårost, aubergine, zucchini, ruccola och soltorkade tomater", price: "340 kr (F) / 143 kr (S)", image: "/images/food_pics/pizza_class_4/merto.png" },
  { name: "Shakira", description: "Tomatsås, ost, mozzarella, färska champinjoner, aubergine, zucchini, soltorkade tomater och ruccola", price: "340 kr (F) / 143 kr (S)", image: "/images/food_pics/pizza_class_4/shakira.png" },
  { name: "Husets Special", description: "Tomatsås, ost, skinka, champinjoner, lök, paprika och räkor", price: "340 kr (F) / 139 kr (S)", image: "/images/food_pics/pizza_class_4/husets_spc.png" },
  { name: "Indiana", description: "Tomatsås, ost, kyckling, banan, ananas, curry och nötter", price: "340 kr (F) / 135 kr (S)", image: "/images/food_pics/pizza_class_4/indiana.png" },
  { name: "Quattro Sta", description: "Tomatsås, ost, skinka, champinjoner, räkor och musslor", price: "340 kr (F) / 143 kr (S)", image: "/images/food_pics/pizza_class_4/quattro_sta.png" },
];

const pizzorKlass5 = [
  { name: "Oxfilepizza", description: "Tomatsås, ost, lök, färska champinjoner, oxfilé, bearnaisesås och färska tomater", price: "365 kr (F) / 143 kr (S)", image: "/images/food_pics/pizza_class_5/oxfile.png" },
  { name: "Milan", description: "Tomatsås, ost, oxfilé, gorgonzola, paprika, färska tomater, vitlök och champinjoner", price: "360 kr (F) / 143 kr (S)", image: "/images/food_pics/pizza_class_5/milan.png" },
  { name: "Kebab Special", description: "Tomatsås, ost, kebabkött, sallad, tomater, lök, feferoni och kebabsås", price: "365 kr (F) / 145 kr (S)", image: "/images/food_pics/pizza_class_5/kebab_special.png" },
  { name: "Gyros Pizza", description: "Tomatsås, ost, gyros, lök, tomat, vitlökssås och feferoni", price: "365 kr (F) / 143 kr (S)", image: "/images/food_pics/pizza_class_5/gyros_pizza.png" },
  { name: "Battes Special", description: "Tomatsås, ost, oxfilé, purjolök, bearnaisesås, champinjoner, lök och paprika", price: "360 kr (F) / 143 kr (S)", image: "/images/food_pics/pizza_class_5/battes.png" },
  { name: "Martinas Special", description: "Tomatsås, ost, oxfilé, bacon och gorgonzola", price: "365 kr (F) / 143 kr (S)", image: "/images/food_pics/pizza_class_5/martinas" },
  { name: "Mancini", description: "Tomatsås, ost, mozzarella, oxfilé, champinjoner, soltorkade tomater, purjolök, bearnaisesås och pesto", price: "365 kr (F) / 145 kr (S)", image: "/images/food_pics/pizza_class_5/mancini.png" },
  { name: "Fläskfile Pizza", description: "Tomatsås, ost, champinjoner, lök, tomater, gorgonzola och fläskfilé", price: "365 kr (F) / 143 kr (S)", image: "/images/food_pics/pizza_class_5/flaskfile.png" },
  { name: "Mimos Special", description: "Tomatsås, ost, fläskfilé, banan, jordnötter och curry", price: "365 kr (F) / 143 kr (S)", image: "/images/food_pics/pizza_class_5/mimos.png" },
  { name: "Runos Special", description: "Tomatsås, ost, fläskfilé, salami, gorgonzola och purjolök", price: "350 kr (F) / 143 kr (S)", image: "/images/food_pics/pizza_class_5/runos.png" },
  { name: "Lången Special", description: "Tomatsås, ost, fläskfilé, champinjoner, tomat och bearnaisesås", price: "365 kr (F) / 140 kr (S)", image: "/images/food_pics/pizza_class_5/Langen_spc.png" },
  { name: "Lasses Special", description: "Tomatsås, ost, skinka, champinjoner, bacon, köttfärs, paprika, lök och tabasco", price: "365 kr (F) / 140 kr (S)", image: "/images/food_pics/pizza_class_5/lasses.png" },
  { name: "Jägaren Special", description: "Tomatsås, ost, skinka, champinjoner, räkor, bacon, ananas och nötter", price: "350 kr (F) / 145 kr (S)", image: "/images/food_pics/pizza_class_5/jagaren.png" },
];

const italienskaPizzor = [
  { name: "Le Chef", description: "Tomatsås, ost, parmaskinka, mozzarella, tomater, oliver och ruccola", price: "350 kr (F) / 143 kr (S)" },
  { name: "Verona", description: "Tomatsås, ost, parmaskinka, mozzarella, champinjoner, soltorkade tomater och purjolök", price: "350 kr (F) / 143 kr (S)" },
  { name: "Scampi Pizza", description: "Tomatsås, ost, scampi, mozzarella, räkor, soltorkade tomater, rödlök och vitlök", price: "360 kr (F) / 149 kr (S)" },
  { name: "Venedig", description: "Tomatsås, ost, parmaskinka, mozzarella, paprika, spenat och pinjenötter", price: "350 kr (F) / 143 kr (S)" },
];

const mexikanskaPizzor = [
  { name: "Azteka", description: "Tomatsås, ost, skinka, taco sås, kryddmix, jalapeño och gräddfil", price: "350 kr (F) / 134 kr (S)" },
  { name: "Mexikana", description: "Tomatsås, ost, köttfärs, lök, taco sås, kryddmix, jalapeño och vitlök", price: "350 kr (F) / 143 kr (S)" },
  { name: "Acapulco", description: "Tomatsås, ost, oxfilé, champinjoner, lök, jalapeño, taco sås och vitlök", price: "360 kr (F) / 143 kr (S)" },
  { name: "Den Gode", description: "Tomatsås, ost, kyckling, champinjoner, paprika, ananas, curry, taco sås och jalapeño", price: "350 kr (F) / 143 kr (S)" },
];

const halvinbakade = [
  { name: "Oscar", description: "Tomatsås, ost, oxfilé, räkor och bearnaisesås", price: "350 kr (F) / 143 kr (S)" },
  { name: "Ciao Ciao", description: "Tomatsås, ost, oxfilé, paprika, färska tomater och bearnaisesås", price: "350 kr (F) / 143 kr (S)" },
  { name: "Shish Kebab", description: "Tomatsås, ost, oxfilé, lök, färska champinjoner, paprika och bearnaisesås", price: "350 kr (F) / 143 kr (S)" },
  { name: "Gudfader", description: "Tomatsås, ost, oxfilé, lök, färsk tomat och vitlök", price: "350 kr (F) / 143 kr (S)" },
];

const inbakade = [
  { name: "Calzone Bussola", description: "Tomatsås, ost, skinka och räkor", price: "138 kr (S)" },
  { name: "Calzone Capri", description: "Tomatsås, ost, skinka och champinjoner", price: "138 kr (S)" },
  { name: "Calzone", description: "Tomatsås, ost och skinka", price: "125 kr (S)" },
  { name: "Tefat", description: "Dubbelinbakad. Tomatsås, ost och skinka", price: "350 kr (F) / 143 kr (S)" },
  { name: "UFO", description: "Tomatsås, ost, skinka, champinjoner och räkor", price: "350 kr (F) / 155 kr (S)" },
  { name: "Mezza Luna", description: "Tomatsås och ost. Halva delen: mozzarella och skinka. Andra delen: mozzarella, parmaskinka och ruccola", price: "350 kr (F) / 143 kr (S)" },
];

const barnpizza = [
  { name: "Margharita Barnpizza", description: "Tomatsås och ost", price: "110 kr"}
];

const panpizza = [
  { name: "Honolulu", description: "Skinka, banan, curry, räkor", price: "309 kr (L) / 235 kr (M) / 128 kr (S)" },
  { name: "San Fransiso", description: "Skinka, lök, paprika, färska champinjoner", price: "299 kr (L) / 220 kr (M) / 115 kr (S)" },
  { name: "Arizona", description: "Skinka, bacon, räkor, färska champinjoner", price: "309 kr (L) / 235 kr (M) / 129 kr (S)" },
  { name: "Mexicana", description: "Köttfärs, taco sås, jalapeño, kryddmix", price: "340 kr (L) / 290 kr (M) / 140 kr (S)" },
  { name: "Pizza Russo", description: "Oxfilé, färska tomater, bearnaisesås, färska champinjoner", price: "340 kr (L) / 290 kr (M) / 139 kr (S)" },
  { name: "Miami", description: "Kyckling, banan, ananas, curry", price: "340 kr (L) / 290 kr (M) / 135 kr (S)" },
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
        Nya Piccola Rosa Meny
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