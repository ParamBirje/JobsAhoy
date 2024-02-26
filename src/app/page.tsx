import Footer from "@/components/Footer/Footer";
import CallToAction from "./_components/CallToAction";
import Hero from "./_components/Hero";
import CompaniesBar from "./_components/CompaniesBar";
import HowItWorks from "./_components/HowItWorks";

export default function Home() {
  return (
    <>
      <main>
        {/* Sections */}

        <Hero />

        <CompaniesBar />

        <HowItWorks />

        <CallToAction />
      </main>

      {/* Footer is here for now, as not planned with other pages yet. */}
      <Footer />
    </>
  );
}
