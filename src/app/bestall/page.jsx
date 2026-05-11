export default function BestallPage() {
  return (
    <div className="min-h-screen bg-[#F8F5F2] text-black flex flex-col items-center justify-center px-6 py-20">
      
      <h1 className="text-4xl md:text-5xl font-semibold mb-6 text-center text-[#7A1E2C]">
        Beställ mat
      </h1>

      <p className="text-gray-600 text-center max-w-xl mb-12">
        Beställ enkelt via våra partners. Klicka på någon av tjänsterna nedan för att se menyn och lägga din beställning.
      </p>

      <div className="flex flex-col md:flex-row gap-6 w-full max-w-4xl justify-center">
        
        {/* Foodora */}
        <a
          href="https://www.foodora.se/restaurant/faij/nya-piccola-rosa"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#7A1E2C] text-white px-6 md:px-8 py-4 rounded-xl text-base md:text-lg font-medium min-w-65 hover:bg-[#5c1622] transition text-center shadow-sm"
        >
          Beställ via Foodora
        </a>

        {/* Wolt */}
        <a
          href="https://wolt.com/sv/swe/stockholm/restaurant/nya-piccola-ros?srsltid=AfmBOop-P1_ySibQGmtbdiydmG4p_lmcnnecgBPQXrwVkGboNPpQK4cH"
          target="_blank"
          rel="noopener noreferrer"
          className="border border-[#7A1E2C] text-[#7A1E2C] px-6 md:px-8 py-4 rounded-xl text-base md:text-lg font-medium min-w-65 hover:bg-[#7A1E2C] hover:text-white transition text-center shadow-sm"
        >
          Beställ via Wolt
        </a>
        {/* Purspot */}
        <a
          href="https://online.purspot.com/store/location/79ba9c41-dea8-446e-9166-5d910aa59226"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#7A1E2C] text-white px-6 md:px-8 py-4 rounded-xl text-base md:text-lg font-medium min-w-65 hover:bg-[#5c1622] transition text-center shadow-sm"
        >
          Beställ via Purspot
        </a>

      </div>

    </div>
  );
}