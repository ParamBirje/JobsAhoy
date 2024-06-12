"use client";
import { CaretUpDown } from "@/lib/Icons";
import { Session } from "next-auth";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import ProfileOption from "./ProfileOption";
import { useRouter, useSearchParams } from "next/navigation";

export default function ProfileSwitcher({
  session,
  selectedProfile,
  profilesList,
}: {
  session: Session | null;
  selectedProfile: UserProfileType;
  profilesList: UserProfileType[];
}) {
  const searchParams = useSearchParams();
  const router = useRouter();

  // Populate the options
  // profilesList = profilesList.filter((value) => {
  //   return value.id !== selectedProfile.id;
  // });

  // Filter Popup Handler
  const [showOptions, setShowOptions] = useState(false);
  function handleShowOptions() {
    setShowOptions((prev) => !prev);
  }

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

  // The Filter List
  const currentlyFilteredIDs = searchParams.getAll("profile");
  const [filterList, setFilterList] = useState(
    profilesList.map((option) => ({
      ...option,
      checked: currentlyFilteredIDs.includes(option.id.toString()),
    }))
  );

  function handleFilterChange(index: number) {
    setFilterList((prevFilterList) => {
      const updatedFilterList = [...prevFilterList];
      updatedFilterList[index].checked = !updatedFilterList[index].checked;
      return updatedFilterList;
    });
  }

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
  async function handleApplyButton() {
    const checkedProfiles = filterList.filter((profile) => profile.checked);
    console.log(
      "Checked Profiles ID: ",
      checkedProfiles.map((profile) => profile.id).join("&profile=")
    );

    // If all filters are unchecked and applied, the selectedProfile is default filter.
    if (checkedProfiles.length == 0)
      checkedProfiles.push({ ...selectedProfile, checked: true });

    const params = new URLSearchParams(searchParams.toString());
    params.delete("profile");

    checkedProfiles.forEach((profile) =>
      params.append("profile", profile.id.toString())
    );
    // HACK: Uncomment this if you want to make selectedProfile default
    // params.append("profile", selectedProfile.id.toString());
    router.push("/jobs?" + params.toString());

    handleShowOptions();
  }

  return (
    <div className="relative">
      <button
        type="button"
        // onClick={handleShowOptions}
        className="px-4 py-2 flex justify-between items-center gap-10 my-1 rounded-md border-[1.5px] border-primary-lightest bg-[#0A1022] hover:bg-primary-lightest duration-100"
      >
        <div className="flex justify-start items-center gap-3">
          <Image
            className="rounded-full object-cover"
            height={22}
            width={37}
            src={session?.user?.image || ""}
            alt={"profile_pic"}
          />

          <div className="flex leading-[1.1] flex-col items-start justify-end">
            <p className="capitalize text-[11px] tracking-wide">
              Hello, {session?.user?.name}
            </p>
            <p className="text-lg tracking-wide font-light capitalize">
              Browse Profiles
            </p>
          </div>
        </div>

        <div className="flex justify-center items-center">
          <CaretUpDown size={20} />
        </div>
      </button>

      {/* The Actual Filter */}
      {showOptions && (
        <div
          ref={componentRef}
          className="z-[2] flex flex-col gap-2 absolute left-0 top-[4rem] rounded-md px-2 py-2 border-[1.5px] bg-[#0A1022] border-primary-lightest min-w-full"
        >
          <p className="text-sm px-3 tracking-wide py-1">Filter Profiles:</p>

          <ul className="flex flex-col gap-1 w-full">
            {filterList.map((profile, index) => {
              return (
                <ProfileOption
                  key={profile.id}
                  profile={profile}
                  checked={profile.checked}
                  onChange={() => handleFilterChange(index)}
                />
              );
            })}

            {profilesList.length == 0 && (
              <div className="text-secondary-dark text-sm text-center">
                No other profiles found.
              </div>
            )}
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

function GetAllSearchParams() {}
