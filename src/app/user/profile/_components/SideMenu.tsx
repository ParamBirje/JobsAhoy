"use client";
import { Briefcase, CheckCircle, Heart, User } from "@/lib/Icons";
import SideMenuButton from "./SideMenuButton";

export default function SideMenu({
  views,
  setView,
}: {
  views: React.JSX.Element[];
  setView: any;
}) {
  return (
    <div className="h-full w-[40%] rounded-md bg-opacity-30 bg-primary-lighter flex flex-col items-start">
      <SideMenuButton
        onClick={() => setView(views[0])}
        className="rounded-t-md"
      >
        <User size={20} />
        <p className="text-lg tracking-wide">User Information</p>
      </SideMenuButton>

      <SideMenuButton onClick={() => setView(views[1])}>
        <Briefcase size={20} />
        <p className="text-lg tracking-wide">Profiles</p>
      </SideMenuButton>

      <SideMenuButton onClick={() => setView(views[2])}>
        <Heart size={20} />
        <p className="text-lg tracking-wide">Saved Jobs</p>
      </SideMenuButton>

      <SideMenuButton onClick={() => setView(views[3])}>
        <CheckCircle size={20} />
        <p className="text-lg tracking-wide">Applied Jobs</p>
      </SideMenuButton>
    </div>
  );
}
