import Netflix from "@/lib/images/companyLogos/Netflix.png";
import Adobe from "@/lib/images/companyLogos/Adobe.png";
import Google from "@/lib/images/companyLogos/Google.png";
import Miro from "@/lib/images/companyLogos/Miro.png";
import Amazon from "@/lib/images/companyLogos/Amazon.png";
import Image from "next/image";

export default function CompaniesBar() {
  const images = [Netflix, Adobe, Google, Miro, Amazon];
  const logoSizeReduction = 40;

  return (
    <section id="companies" className="bg-primary-light px-5">
      <div className="flex justify-evenly items-center py-10">
        {images.map((image, idx) => {
          return (
            <Image
              key={idx}
              src={image}
              alt={`${image.src}-logo`}
              height={image.height - logoSizeReduction}
              width={image.width - logoSizeReduction}
            />
          );
        })}
      </div>
    </section>
  );
}
