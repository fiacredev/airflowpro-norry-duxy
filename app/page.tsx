import Ventilation from "@/components/shared/Ventilation";
import About from "@/components/shared/About";
import FAQ from "@/components/shared/FAQ";
import Footer from "@/components/shared/Footer";
import Header from "@/components/shared/Header";
import Hero from "@/components/shared/Hero";
import Image from "next/image";
import Dryer from "@/components/shared/Dryer";
import Chimney from "@/components/shared/Chimney";
import Contact from "@/components/shared/Contact";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 text-foreground">
      <Header />
      <div className="w-full max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <Hero />
        <About />
        <Ventilation />
        <Dryer />
        <Chimney />
        <Contact />
        <FAQ />
      </div>
      {/* Final CTA Section of air flow*/}
      <Footer />
    </div>
  );
}
