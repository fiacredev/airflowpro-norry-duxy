import Ventilation from "@/components/shared/Ventilation";
import About from "@/components/shared/About";
import FAQ from "@/components/shared/FAQ";
import Footer from "@/components/shared/Footer";
import Header from "@/components/shared/Header";
import Hero from "@/components/shared/Hero";
import Dryer from "@/components/shared/Dryer";
import Chimney from "@/components/shared/Chimney";
import Contact from "@/components/shared/Contact";
import Hvac from "@/components/shared/Hvac";
import BackToTop from "@/components/shared/BackToTop";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 text-foreground">
      <Header />
      <div className="w-full max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <Hero />
        <About />
        <Hvac />
        <Ventilation />
        <Dryer />
        <Chimney />
        <Contact />
        <FAQ />
      </div>
      {/* Final CTA Section of air flow*/}
      <Footer />
      <BackToTop />
    </div>
  );
}
