import Globe from "@/lib/images/services/globe.png";
import Resume from "@/lib/images/services/resume.png";
import Airplane from "@/lib/images/services/airplane.png";
import Image from "next/image";
import PlasticCard from "@/components/Cards/PlasticCard";
import GradientDivider from "../GradientDivider";

export default function Services() {
  return (
    <section id="services" className="max-w-7xl mx-auto px-5 mt-[35em]">
      <div>
        <GradientDivider />

        <h3 className="text-center text-5xl font-bold mt-[2em]">Every Step Of The Way.</h3>

        <div className="flex justify-between items-center gap-[5rem] mt-[6em] mb-[8em]">
          <PlasticCard css="w-1/2 h-[25em]">
            <Image src={Globe} height={Globe.height} width={Globe.width} alt={"globe"} />
            <h4 className="text-xl font-semibold">Many Locations</h4>
            <p className="text-secondary-dark w-[50%]">
              Jobs in your favorite country that provide visa sponsorship, relocation.
            </p>
            <button className="bg-accent rounded-full px-6 py-2 font-medium hover:bg-accent-light duration-100 mt-5">
              Explore
            </button>
          </PlasticCard>

          <PlasticCard css="h-[28em]">
            <Image
              src={Airplane}
              height={Airplane.height}
              width={Airplane.width}
              alt={"airplane"}
            />
            <h4 className="text-xl font-semibold">Visa & Relocation</h4>
            <p className="text-secondary-dark w-[50%]">
              Relocation Assistance with visa processing guidance and policies. Lorem ipsum
            </p>
            <button className="bg-accent rounded-full px-6 py-2 font-medium hover:bg-accent-light duration-100 mt-5">
              Learn More
            </button>
          </PlasticCard>

          <PlasticCard css="w-1/2 h-[25em]">
            <Image src={Resume} height={Resume.height} width={Resume.width} alt={"resume"} />
            <h4 className="text-xl font-semibold">Interview & Resume</h4>
            <p className="text-secondary-dark w-[50%]">
              Interview questions and guides to help you create better CVs & Cover Letters.
            </p>
            <button className="bg-accent rounded-full px-6 py-2 font-medium hover:bg-accent-light duration-100 mt-5">
              Create
            </button>
          </PlasticCard>
        </div>
      </div>
    </section>
  );
}
