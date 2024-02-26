"use client";

import GuestJobCard from "./GuestJobCard";
import { atom } from "jotai";
import GuestJobInfo from "./GuestJobInfo";

export const selectedJobAtom = atom<JobDetailsType | null>(null);
export const jobItemsPerPageAtom = atom(0);
export const totalJobsAtom = atom(0);

export default function GuestJobSection({
  jobsList,
}: {
  jobsList: JobDetailsType[];
}) {
  return (
    <div className="flex gap-3">
      {/* Jobs List */}
      <ul className="w-1/3 h-[70vh] overflow-y-auto flex flex-col gap-3">
        {jobsList.map((job) => {
          return <GuestJobCard job={job} key={job.id} />;
        })}
      </ul>

      {/* Job Details */}
      <GuestJobInfo />
    </div>
  );
}
