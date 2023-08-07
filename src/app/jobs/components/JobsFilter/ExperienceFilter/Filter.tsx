"use client";
import { CaretDown } from "@/lib/Icons";
import React, { useEffect, useRef, useState } from "react";
import ReactSlider from "react-slider";

export default function ExperienceFilter() {
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

  // Apply button handler
  function handleApplyButton() {
    console.log("Applied");

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
          className="z-[1] flex flex-col gap-5 absolute left-0 top-[3rem] rounded-md px-2 py-2 border-[1.5px] bg-[#0A1022] border-primary-lightest min-w-[20em]"
        >
          <ReactSlider
            className="horizontal-slider"
            thumbClassName="example-thumb"
            trackClassName="example-track"
            defaultValue={[0, 20]}
            ariaLabel={["Lower thumb", "Upper thumb"]}
            ariaValuetext={(state) => `Thumb value ${state.valueNow}`}
            renderThumb={(props, state) => (
              <div key={state.index} {...props}>
                {state.valueNow}
              </div>
            )}
            pearling
            snapDragDisabled
            minDistance={2}
            max={20}
          />

          <div className="flex justify-end items-center gap-3 px-1 py-1">
            <button className="hover:underline text-accent-light text-sm">Clear</button>
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
