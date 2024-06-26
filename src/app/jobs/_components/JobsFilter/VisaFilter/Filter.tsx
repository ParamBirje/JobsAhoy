"use client";
import { CaretDown } from "@/lib/Icons";
import React, { useEffect, useRef, useState } from "react";
import Option from "./Option";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";

export default function VisaFilter() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const optionsList: VisaStatusType[] = [
    {
      id: 1,
      is_visa_sponsored: 1,
    },
    {
      id: 2,
      is_visa_sponsored: 0,
    },
  ];

  const [showOptions, setShowOptions] = useState(false);
  function handleShowOptions() {
    setShowOptions((prev) => !prev);
  }

  // Filter lists
  const currentlyFilteredIDs = searchParams.getAll("visa");
  const [filterList, setFilterList] = useState(
    optionsList.map((option) => ({
      ...option,
      checked: currentlyFilteredIDs.includes(
        option.is_visa_sponsored.toString()
      ),
    }))
  );

  const handleFilterChange = (idToUpdate: number) => {
    // setFilterList((prevFilterList) => {
    //   const updatedFilterList = [...prevFilterList];
    //   updatedFilterList[index].checked = !updatedFilterList[index].checked;
    //   return updatedFilterList;
    // });
    const newFilterList = filterList.map((jobType) =>
      jobType.id === idToUpdate
        ? { ...jobType, checked: !jobType.checked }
        : jobType
    );
    setFilterList(newFilterList);
  };

  // Listening to clicks outside of the profile options
  const componentRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    const handleClickOutside = (event: any) => {
      if (
        componentRef.current &&
        !componentRef.current.contains(event.target)
      ) {
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
  function handleClearFilter() {
    setFilterList((prevFilterList) =>
      prevFilterList.map((option) => ({
        ...option,
        checked: false,
      }))
    );
  }

  // Apply button handler
  function handleApplyButton() {
    console.log("Applied");

    const checkedOptions = filterList.filter((option) => option.checked);
    const params = new URLSearchParams(searchParams.toString());
    params.delete("visa");
    params.delete("page");

    if (checkedOptions.length == 1) {
      checkedOptions.forEach((visaStatus) =>
        params.append("visa", visaStatus.is_visa_sponsored.toString())
      );
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
        <p>Visa Status</p>
        <CaretDown size={15} />
      </button>

      {showOptions && (
        <div
          ref={componentRef}
          className="z-[1] flex flex-col gap-2 absolute left-0 top-[3rem] rounded-md px-2 py-2 border-[1.5px] bg-[#0A1022] border-primary-lightest min-w-full"
        >
          <ul className="flex flex-col gap-1 w-full">
            <div className="text-secondary-dark text-xs px-3 py-1 tracking-wide">
              Both are selected by default.
            </div>

            {filterList.map((visaStatus, index) => {
              return (
                <Option
                  key={visaStatus.id}
                  option={visaStatus}
                  checked={visaStatus.checked}
                  onChange={handleFilterChange}
                />
              );
            })}
          </ul>

          <div className="flex justify-end items-center gap-3 px-1 py-1">
            <button
              onClick={handleClearFilter}
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
