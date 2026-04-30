

import HomeAbout from "../sections/HomeAbout";

export default function AboutPage() {
  return (
    <main className="bg-[#F8F5F2] text-black">
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
    </main>
  );
}