

import HomeAbout from "../sections/HomeAbout";

export default function AboutPage() {
  return (
    <main className="relative bg-[#F8F5F2] text-black overflow-hidden">
      {/* Background Logo */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <img
          src="/images/nya_piccola_rosa.png"
          alt="Background Logo"
          className="w-125 md:w-175 opacity-5 object-contain"
        />
      </div>
      <div className="relative z-10">
        {/* Hero-like header */}
        <section className="pt-32 pb-16 px-6 text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-semibold mb-4">
            Om oss
          </h1>
          <p className="text-lg text-gray-600">
            En familjeägd restaurang där passion för mat, dryck och service möts.
          </p>
        </section>

        {/* Existing About content */}
        <HomeAbout />

        {/* Extra spacer to match layout rhythm */}
        <div className="h-20" />
      </div>
    </main>
  );
}