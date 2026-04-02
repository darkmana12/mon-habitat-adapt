import { Accessories } from "./Accessories";
import { Articles } from "./Articles";
import { FAQ } from "./FAQ";
import { FinalCTA } from "./FinalCTA";
import { Footer } from "./Footer";
import { Hero } from "./Hero";
import { Navbar } from "./Navbar";
import { PrimeBanner } from "./PrimeBanner";
import { Quiz } from "./Quiz";
import { MaPrimeAdaptIntro } from "./MaPrimeAdaptIntro";
import { Services } from "./Services";

export function HomePage() {
  return (
    <>
      <header className="sticky top-0 z-[100]">
        <Navbar />
      </header>
      <PrimeBanner />
      <Hero />
      <Quiz />
      <MaPrimeAdaptIntro />
      <Services />
      <Articles />
      <Accessories />
      <FAQ />
      <FinalCTA />
      <Footer />
    </>
  );
}
