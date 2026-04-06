import Apart from "@/components/shared/ApartFromOthers";
import About from "@/components/shared/About";
import FAQ from "@/components/shared/FAQ";
import Footer from "@/components/shared/Footer";
import Header from "@/components/shared/Header";
import Hero from "@/components/shared/Hero";
import Clients from "@/components/shared/Clients";
import Chimney from "@/components/shared/Chimney";
import Contact from "@/components/shared/Contact";
import DryDuct from "@/components/shared/DryerDuct"
import DryerVent from "@/components/shared/DryerVent";
import AirConditional from "@/components/shared/AirConditional";
import BackToTop from "@/components/shared/BackToTop";
import fume from '../public/images/fume.png'
import ox from '../public/images/ox.png'
import co from '../public/images/co.png'

import { InfiniteMovingCards } from "@/components/ui/Marquee";
import Services from "@/components/shared/Services";


export default function Home() {

  const Icons = Array(17).fill([fume, ox, co]).flat();
  
  return (
    <div className="min-h-screen bg-gray-50 text-foreground">
      <Header />
      <div className="w-full max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <Hero />
        <About />
        <Apart />
        <Clients />
        <InfiniteMovingCards
          items={Icons}
          direction="right"
          speed="fast"
          className="mb-10"
        />
        <Services/>
        <FAQ />
        <Contact />
      </div>
      {/* Final CTA Section of air flow*/}
      <Footer />
      <BackToTop />
    </div>
  );
}