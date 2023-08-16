"use client";
import { CaretDown } from "@/lib/Icons";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useEffect, useRef, useState } from "react";
import ReactSlider from "react-slider";

export default function ExperienceFilter({ min, max }: { min: number; max: number }) {
  const searchParams = useSearchParams();
  const router = useRouter();

  // From searchParams, if already filtered.
  const minExp = searchParams.get("minExp");
  const maxExp = searchParams.get("maxExp");

  // FIXME: Check if max is greater than min
  const [minimumExp, setMinimumExp] = useState<number>(Number(minExp) || min);
  const [maximumExp, setMaximumExp] = useState<number>(Number(maxExp) || max);

  const [showOptions, setShowOptions] = useState(false);

  function handleShowOptions() {
    setShowOptions((prev) => !prev);
  }

  // Listening to clicks outside of the profile options
  const componentRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    const handleClickOutside = (event: any) => {
      if (componentRef.current && !componentRef.current.contains(event.target)) {
        setShowOptions(false);
      }
    };

    if (showOptions) {
      document.addEventListener("click", handleClickOutside);
    }

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [showOptions]);

  // Clear button handler
  function handleClearButton() {
    setMinimumExp(min);
    setMaximumExp(max);
  }

  // Apply button handler
  function handleApplyButton() {
    console.log("Applied");

    const params = new URLSearchParams(searchParams.toString());
    params.delete("minExp");
    params.delete("maxExp");

    if (minimumExp != min || maximumExp != max) {
      params.append("minExp", minimumExp.toString());
      params.append("maxExp", maximumExp.toString());
    }
    router.push("/jobs?" + params.toString());

    handleShowOptions();
  }

  return (
    <div className="relative">
      <button
        onClick={handleShowOptions}
        className={`${
          showOptions && "bg-primary-lightest"
        } px-6 py-2 rounded-full duration-100 border border-primary-lightest hover:bg-primary-lightest tracking-wider flex items-center gap-3`}
      >
        <p>Experience</p>
        <CaretDown size={15} />
      </button>

      {showOptions && (
        <div
          ref={componentRef}
          className="z-[1] flex flex-col gap-3 absolute left-0 top-[3rem] rounded-md px-2 py-2 border-[1.5px] bg-[#0A1022] border-primary-lightest min-w-[20em]"
        >
          <div className="w-full text-secondary-dark text-sm text-center px-3 pt-1 tracking-wide">
            Experience in years.
          </div>

          <div className="flex flex-col items-center justify-center w-full">
            <ReactSlider
              className="horizontal-slider"
              thumbClassName="example-thumb"
              trackClassName="example-track"
              defaultValue={[minimumExp, maximumExp]}
              ariaLabel={["Lower thumb", "Upper thumb"]}
              pearling
              snapDragDisabled
              minDistance={2}
              max={20}
              ariaValuetext={(state) => `Thumb value ${state.valueNow}`}
              renderThumb={(props, state) => (
                <div key={state.index} {...props}>
                  {state.valueNow}
                </div>
              )}
              value={[minimumExp, maximumExp]}
              onChange={(values) => {
                setMinimumExp(values[0]);
                setMaximumExp(values[1]);
              }}
            />

            <p className="w-full text-center tracking-wide font-medium">
              {minimumExp}-{maximumExp} Years Of Exp.
            </p>
          </div>

          <div className="flex justify-end items-center gap-3 px-1 py-1">
            <button
              onClick={handleClearButton}
              className="hover:underline text-accent-light text-sm"
            >
              Clear
            </button>
            <button
              onClick={handleApplyButton}
              className="text-sm bg-accent rounded-full px-4 py-1 font-medium hover:bg-accent-light duration-100"
            >
              Apply
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
