"use client";
import { Briefcase, CheckCircle, Heart, User } from "@/lib/Icons";

export default function SideMenu({ views, setView }: { views: React.JSX.Element[]; setView: any }) {
  return (
    <div className="h-full w-[40%] rounded-md bg-opacity-30 bg-primary-lighter flex flex-col items-start">
      <button
        onClick={() => setView(views[0])}
        className="py-4 px-6 hover:bg-primary-lightest w-full rounded-t-md flex items-center justify-start gap-5"
      >
        <User size={20} />
        <p className="text-lg tracking-wide">User Information</p>
      </button>

      <button
        onClick={() => setView(views[1])}
        className="py-4 px-6 hover:bg-primary-lightest w-full flex items-center justify-start gap-5"
      >
        <Briefcase size={20} />
        <p className="text-lg tracking-wide">Profiles</p>
      </button>

      <button
        onClick={() => setView(views[2])}
        className="py-4 px-6 hover:bg-primary-lightest w-full flex items-center justify-start gap-5"
      >
        <Heart size={20} />
        <p className="text-lg tracking-wide">Saved Jobs</p>
      </button>

      <button
        onClick={() => setView(views[3])}
        className="py-4 px-6 hover:bg-primary-lightest w-full flex items-center justify-start gap-5"
      >
        <CheckCircle size={20} />
        <p className="text-lg tracking-wide">Applied Jobs</p>
      </button>
    </div>
  );
}
