import { seo } from "../data/site";
import { Seo } from "../components/Seo";
import { Hero } from "../sections/Hero";
import { Products } from "../sections/Products";
import { HowToBuy } from "../sections/HowToBuy";
import { About } from "../sections/About";
import { CTASection } from "../sections/CTASection";

export default function HomePage() {
  return (
    <>
      <Seo {...seo.home} />
      <Hero />
      <Products />
      <HowToBuy />
      <About />
      <CTASection />
    </>
  );
}
