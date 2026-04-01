import { Accessories } from "./Accessories";
import { Articles } from "./Articles";
import { FAQ } from "./FAQ";
import { FinalCTA } from "./FinalCTA";
import { Footer } from "./Footer";
import { Hero } from "./Hero";
import { MonteHighlight } from "./MonteHighlight";
import { Navbar } from "./Navbar";
import { PrimeBanner } from "./PrimeBanner";
import { Quiz } from "./Quiz";
import { Services } from "./Services";

export function HomePage() {
  return (
    <>
      <Navbar />
      <PrimeBanner />
      <Hero />
      <Quiz />
      <Services />
      <MonteHighlight />
      <Articles />
      <Accessories />
      <FAQ />
      <FinalCTA />
      <Footer />
    </>
  );
}
