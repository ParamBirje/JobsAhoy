import Footer from "@/components/Footer";
import CallToAction from "../components/LandingPage/CallToAction";
import Hero from "../components/LandingPage/Hero";
import Services from "../components/LandingPage/Services";
import Testimonials from "../components/LandingPage/Testimonials";

export default function Home() {
  return (
    <>
      <main>
        {/* Sections */}

        <Hero />

        <Services />
        <CallToAction />
        <Testimonials />
      </main>

      <Footer />
    </>
  );
}
