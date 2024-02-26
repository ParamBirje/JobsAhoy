import AccountSetup from "@/lib/images/howitworks/account-setup.png";
import PersonalisedJobs from "@/lib/images/howitworks/personalised-jobs.png";
import SkillsMatch from "@/lib/images/howitworks/skills-match.png";
import Image from "next/image";

export default function HowItWorks() {
  return (
    <section id="hero" className="max-w-7xl mx-auto">
      <div className="flex flex-col gap-20">
        <h3 className="text-center text-5xl font-bold">How It Works</h3>

        <div className="flex flex-col gap-20">
          {/* Step 1 */}
          <div className="flex items-center justify-center gap-10">
            <div className="w-1/2 flex justify-center">
              <Image
                alt="account-setup"
                src={AccountSetup}
                height={AccountSetup.height}
                width={AccountSetup.width}
              />
            </div>
            <div className="w-1/2 flex flex-col gap-5">
              <h3 className="text-3xl font-medium">Setup your free account</h3>
              <p className="tracking-wide text-secondary-dark">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Eligendi unde quia exercitationem quisquam quidem temporibus
                soluta nobis, expedita nesciunt, amet quas aspernatur ab
                corporis adipisci.
              </p>
            </div>
          </div>

          {/* Step 2 */}
          <div className="flex flex-row-reverse items-center justify-center gap-10">
            <div className="w-1/2 flex justify-center">
              <Image
                alt="personalised-jobs"
                src={PersonalisedJobs}
                height={PersonalisedJobs.height}
                width={PersonalisedJobs.width}
              />
            </div>
            <div className="w-1/2 flex flex-col gap-5">
              <h3 className="text-3xl font-medium">
                Personalised specific jobs
              </h3>
              <p className="tracking-wide text-secondary-dark">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Eligendi unde quia exercitationem quisquam quidem temporibus
                soluta nobis, expedita nesciunt, amet quas aspernatur ab
                corporis adipisci.
              </p>
            </div>
          </div>

          {/* Step 3 */}
          <div className="flex items-center justify-center gap-10">
            <div className="w-1/2 flex justify-center">
              <Image
                alt="skills-match"
                src={SkillsMatch}
                height={SkillsMatch.height}
                width={SkillsMatch.width}
              />
            </div>
            <div className="w-1/2 flex flex-col gap-5">
              <h3 className="text-3xl font-medium">
                Apply efficiently with skill matching
              </h3>
              <p className="tracking-wide text-secondary-dark">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Eligendi unde quia exercitationem quisquam quidem temporibus
                soluta nobis, expedita nesciunt, amet quas aspernatur ab
                corporis adipisci.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
