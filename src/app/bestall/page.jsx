

export default function BestallPage() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-6 py-20">
      
      <h1 className="text-4xl md:text-5xl font-semibold mb-6 text-center">
        Beställ mat
      </h1>

      <p className="text-gray-400 text-center max-w-xl mb-12">
        Beställ enkelt via våra partners. Klicka på någon av tjänsterna nedan för att se menyn och lägga din beställning.
      </p>

      <div className="flex flex-col sm:flex-row gap-6">
        
        {/* Foodora */}
        <a
          href="https://www.foodora.se/restaurant/faij/nya-piccola-rosa"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white text-black px-8 py-4 rounded-xl text-lg font-medium hover:bg-gray-200 transition text-center"
        >
          Beställ via Foodora
        </a>

        {/* Wolt */}
        <a
          href="https://wolt.com/sv/swe/stockholm/restaurant/nya-piccola-ros?srsltid=AfmBOop-P1_ySibQGmtbdiydmG4p_lmcnnecgBPQXrwVkGboNPpQK4cH"
          target="_blank"
          rel="noopener noreferrer"
          className="border border-white px-8 py-4 rounded-xl text-lg font-medium hover:bg-white hover:text-black transition text-center"
        >
          Beställ via Wolt
        </a>

      </div>

    </div>
  );
}