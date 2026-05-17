import HomeAbout from "../sections/HomeAbout";

export default function AboutPage() {
  return (
    <main className="relative bg-[#F8F5F2] text-black overflow-hidden">
      {/* Background Logo */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <img
          src="/images/nya_piccola_rosa.png"
          alt="Background Logo"
          className="w-72 md:w-175 opacity-15 blur-[1px] object-contain"
        />
      </div>
      <div className="relative z-10">
        {/* Existing About content */}
        <HomeAbout />

        {/* Extra spacer to match layout rhythm */}
        <div className="h-20" />
      </div>
    </main>
  );
}