import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/sections/hero";
import { Credibility } from "@/components/sections/credibility";
import { About } from "@/components/sections/about";
import { Portfolio } from "@/components/sections/portfolio";
import { Testimonials } from "@/components/sections/testimonials";
import { Stats } from "@/components/sections/stats";
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
        <Testimonials />
        <Stats />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
