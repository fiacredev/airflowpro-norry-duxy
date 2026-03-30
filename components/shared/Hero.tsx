import AnimatedSection from "../ui/AnimatedSection";
import { Button } from "../ui/button";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-[#0a1628] overflow-hidden px-6 py-24" id="home">

      {/* Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(45,125,210,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(45,125,210,0.08)_1px,transparent_1px)] bg-[size:48px_48px]" />

      {/* Glow */}
      <div className="absolute w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(0,180,216,0.18)_0%,transparent_70%)] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />

      <AnimatedSection className="relative text-center max-w-3xl">

        {/* Eyebrow */}
        <p className="uppercase tracking-[0.3em] text-[#5ab4f0] text-sm mb-4 opacity-80">
          Professional Air Quality Services
        </p>

        {/* Title */}
        <h1 className="uppercase font-extrabold leading-[0.95] text-white text-5xl sm:text-6xl md:text-7xl mb-6">
          Clean Air <br />
          <span className="text-[#5ab4f0]">Starts Here</span>
        </h1>

        {/* Subtitle */}
        <p className="text-[#c8e6fc] text-lg leading-relaxed mb-10">
          Ventilation, HVAC, dryer ducts & chimney cleaning delivered fast,
          done right. Breathe easier with a team you can trust.
        </p>

        {/* CTA */}
        <div className="flex flex-wrap justify-center gap-4">

          <Button className="bg-[#2d7dd2] hover:bg-[#5ab4f0] text-white px-8 py-6 text-sm tracking-widest uppercase">
            Get a Free Quote
          </Button>

          <Button
            variant="outline"
            className="border border-[#c8e6fc55] text-[#c8e6fc] hover:text-[#5ab4f0] hover:border-[#5ab4f0] px-8 py-6 text-sm tracking-widest uppercase"
          >
            Contact Us
          </Button>

        </div>
      </AnimatedSection>
    </section>
  );
}