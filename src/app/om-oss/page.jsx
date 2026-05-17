import HomeAbout from "../sections/HomeAbout";

export default function AboutPage() {
  return (
    <main className="relative bg-[#F8F5F2] text-black overflow-hidden">
      {/* Background Logo */}
      <div className="absolute inset-0 flex flex-col items-center pointer-events-none pt-44 md:pt-52">
        <img
          src="/images/nya_piccola_rosa.png"
          alt="Background Logo"
          className="w-[520px] md:w-[900px] opacity-[0.10] blur-[0.5px] object-contain"
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