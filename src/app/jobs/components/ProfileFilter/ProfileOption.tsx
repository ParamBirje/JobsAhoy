"use client";
import Tooltip from "@/components/Tooltip";
import { Flag } from "@/lib/Icons";

export default function ProfileOption({
  profile,
  checked,
  onChange,
}: {
  profile: UserProfileType;
  checked: boolean;
  onChange: VoidFunction;
}) {
  return (
    <div className="duration-100 group w-full flex items-center justify-start gap-3 hover:bg-primary-lightest rounded-md px-3 py-1">
      <div className="flex items-center gap-2">
        <input checked={checked} onChange={onChange} type="checkbox" id={profile.profile_name} />

        <label className=" whitespace-nowrap" htmlFor={profile.profile_name}>
          {profile.profile_name}
        </label>
      </div>
    </div>
  );
}
