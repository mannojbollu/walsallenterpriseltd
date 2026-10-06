import { seo } from "../data/site";
import { Seo } from "../components/Seo";
import { Hero } from "../sections/Hero";
import { About } from "../sections/About";
import { Reuse } from "../sections/Reuse";
import { Services } from "../sections/Services";
import { Gallery } from "../sections/Gallery";
import { Process } from "../sections/Process";
import { FAQ } from "../sections/FAQ";
import { Ports } from "../sections/Ports";
import { CTASection } from "../sections/CTASection";

export default function HomePage() {
  return (
    <>
      <Seo {...seo.home} />
      <Hero />
      <About />
      <Reuse />
      <Services />
      <Gallery />
      <Process />
      <Ports />
      <FAQ />
      <CTASection />
    </>
  );
}
