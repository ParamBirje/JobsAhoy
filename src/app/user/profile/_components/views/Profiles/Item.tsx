import React from "react";

export default function Item({ profile }: { profile: IProfile }) {
  return (
    <div className="bg-primary-lighter bg-opacity-30 rounded-md px-6 py-4 w-full flex flex-col justify-between gap-5">
      <div className="flex flex-col">
        <p className="text-lg tracking-wide">{profile.profile_name}</p>
        <p className="text-secondary-dark">{profile.user_profile_experience} yrs experience</p>
        <p className="text-secondary-dark text-sm tracking-wide pt-2">
          {profile.user_profile_desc} ...
        </p>
      </div>

      <div className="w-full flex justify-end items-center gap-3 text-sm mb-1">
        <button className="rounded-full px-3 py-1 border tracking-wide hover:bg-secondary hover:text-primary duration-100">
          Set Primary
        </button>
        <button className="rounded-full px-3 py-1 border tracking-wide hover:bg-secondary hover:text-primary duration-100">
          Edit
        </button>
      </div>
    </div>
  );
}
