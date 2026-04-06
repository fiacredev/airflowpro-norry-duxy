import AnimatedSection from "../ui/AnimatedSection";
import { Button } from "../ui/button";

export default function Hero() {
  return (
<section
  className="relative min-h-screen flex items-center justify-center overflow-hidden px-6 py-24 scroll-mt-23 rounded-xl border-t-8 border-blue-500"
  id="home"
>

      {/* Background Image */}
    <div className="absolute inset-0">
      <img
        src="/ventilation.jpg" // put your image in /public
        alt="Background"
        className="w-full h-full object-cover opacity-100"
      />
    </div>

      {/* Dark overlay (optional for readability) */}
    <div className="absolute inset-0 bg-[#0a1628]/80" />

      {/* Grid Background (optional, keep if you like effect) */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(45,125,210,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(45,125,210,0.08)_1px,transparent_1px)] bg-[size:48px_48px]" />

      {/* Glow */}
      <div className="absolute w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(0,180,216,0.18)_0%,transparent_70%)] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />

      <AnimatedSection className="relative text-center max-w-3xl">

        {/* Eyebrow */}
        <p className="uppercase tracking-[0.3em] text-[#5ab4f0] text-sm mb-4 opacity-80">
          air quality care.
        </p>

        {/* Title */}
        <h1 className="uppercase font-extrabold leading-[0.95] text-white text-5xl sm:text-6xl md:text-7xl mb-6">
          Clean Air <br />
          <span className="text-[#5ab4f0]">Respire</span>
        </h1>

        {/* Subtitle */}
        <p className="text-[#c8e6fc] text-xl leading-relaxed mb-10">
          Our team provides professional air duct, dryer vent, wall-mounted AC,
          and chimney cleaning services with care and precision. Enjoy cleaner air and peace of mind.
        </p>

        {/* CTA */}
        <div className="flex flex-wrap justify-center gap-4">

          <Button className="bg-[#2d7dd2] hover:bg-[#5ab4f0] text-white px-8 py-6 text-sm tracking-widest uppercase" id="#contact">
            <a href="#contact">FreeQuote</a>
          </Button>

          <Button
            variant="outline"
            className="border border-[#c8e6fc55] text-[#c8e6fc] hover:text-[#5ab4f0] hover:border-[#5ab4f0] px-8 py-6 text-sm tracking-widest uppercase"
          >
            <a href="#contact">Contact Us</a>
          </Button>

        </div>
      </AnimatedSection>
    </section>
  );
}