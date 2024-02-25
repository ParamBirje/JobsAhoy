import Footer from "@/components/Footer";
import CallToAction from "./_components/CallToAction";
import Hero from "./_components/Hero";
import Services from "./_components/Services";
import Testimonials from "./_components/Testimonials";

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
