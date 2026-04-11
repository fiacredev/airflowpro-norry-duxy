import Apart from "@/components/shared/ApartFromOthers";
import About from "@/components/shared/About";
import FAQ from "@/components/shared/FAQ";
import Footer from "@/components/shared/Footer";
import Header from "@/components/shared/Header";
import Hero from "@/components/shared/Hero";
import Clients from "@/components/shared/Clients";
import Contact from "@/components/shared/Contact";
import Promotions from "@/components/shared/Promotions";
import BackToTop from "@/components/shared/BackToTop";
import GoTOPromotions from "@/components/shared/GoToPromo";
import fume from '../public/images/fume.png'
import ox from '../public/images/ox.png'
import co from '../public/images/co.png'

import { InfiniteMovingCards } from "@/components/ui/Marquee";
import ServicesPage from "@/components/shared/ServicePage";


export default function Home() {

  const Icons = Array(17).fill([fume, ox, co]).flat();
  
  return (
    <div className="min-h-screen bg-gray-50 text-foreground">
      <Header />
      <div className="w-full max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <Hero />
        <GoTOPromotions />
        <About />
        <Apart />
        <Clients />
        <InfiniteMovingCards
          items={Icons}
          direction="right"
          speed="fast"
          className="mb-25 mt-25"
        />
        <ServicesPage/>
        <Promotions />
        <FAQ />
        <Contact />
      </div>
      {/* Final CTA Section of air flow*/}
      <Footer />
      <BackToTop />
    </div>
  );
}