import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { WhatsAppFab } from "@/components/layout/whatsapp-fab";
import { Hero } from "@/components/sections/hero";
import { Credibility } from "@/components/sections/credibility";
import { About } from "@/components/sections/about";
import { Portfolio } from "@/components/sections/portfolio";
import { Experience } from "@/components/sections/experience";
import { Videos } from "@/components/sections/videos";
import { Testimonials } from "@/components/sections/testimonials";
import { Stats } from "@/components/sections/stats";
import { Faq } from "@/components/sections/faq";
import { Cta } from "@/components/sections/cta";
import { Contact } from "@/components/sections/contact";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Credibility />
        <About />
        <Portfolio />
        <Experience />
        <Videos />
        <Testimonials />
        <Stats />
        <Faq />
        <Cta />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFab />
    </>
  );
}
