import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import QuickFacts from "@/components/QuickFacts";
import Overview from "@/components/Overview";
import Location from "@/components/Location";
import Schools from "@/components/Schools";
import Amenities from "@/components/Amenities";
import Caivan from "@/components/Caivan";
import Investment from "@/components/Investment";
import FAQ from "@/components/FAQ";
import RegisterCTA from "@/components/RegisterCTA";
import StickyRegisterSidebar from "@/components/StickyRegisterSidebar";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";
import StickyFormShortcut from "@/components/StickyFormShortcut";
import ExitIntent from "@/components/ExitIntent";

export default function Home() {
  return (
    <>
      <Nav />
      <div className="mx-auto flex max-w-shell justify-center">
        <div className="min-w-0 flex-1">
          <main>
            <Hero />
            <QuickFacts />
            <Overview />
            <Location />
            <Schools />
            <Amenities />
            <Caivan />
            <Investment />
            <FAQ />
            <RegisterCTA />
          </main>
          <Footer />
        </div>
        <StickyRegisterSidebar />
      </div>
      <FloatingCTA />
      <StickyFormShortcut />
      <ExitIntent />
      <div className="h-16 lg:hidden" aria-hidden="true" />
    </>
  );
}
