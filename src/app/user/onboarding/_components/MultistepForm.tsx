"use client";

import { ReactElement, useState } from "react";
import Step1 from "./Step1";
import Step2 from "./Step2";
import { useRouter } from "next/navigation";

export default function MultistepForm({ handleSubmit }: { handleSubmit: any }) {
  const router = useRouter();

  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [formData, setFormData] = useState({
    userProfile: "",
    profileDesc: "",
    userProfileExperience: 0,
  });

  async function next(newData: any) {
    setFormData(newData);

    if (currentStepIndex == steps.length - 1) {
      const callbackUrl = await handleSubmit(newData);

      // TODO: show an error if no response
      if (callbackUrl) {
        router.push(callbackUrl);
        router.refresh();
      }
    } else {
      setCurrentStepIndex((prev) => prev + 1);
    }
  }

  const steps: ReactElement[] = [
    <Step1 key={1} next={next} formData={formData} />,
    <Step2 key={2} next={next} formData={formData} />,
  ];

  return (
    <>
      {/* Input */}
      <div className="w-full flex flex-col gap-3 items-start">{steps[currentStepIndex]}</div>

      {/* Steps Completed */}
      <div className="w-full flex justify-end">
        <p className="text-[11px] text-secondary-dark tracking-wider uppercase">
          Current Step {currentStepIndex + 1} / {steps.length}.
        </p>
      </div>
    </>
  );
}
