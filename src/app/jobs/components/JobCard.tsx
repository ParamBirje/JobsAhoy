"use client";

import { Heart, MapPin } from "@/lib/Icons";
import { useAtom } from "jotai";
import { selectedJobAtom } from "./JobSection";

export default function JobCard({ job }: { job: JobListType; setSelectedJob?: CallableFunction }) {
  const [selectedJob, setSelectedJob] = useAtom(selectedJobAtom);

  function handleSelect() {
    setSelectedJob(job);
  }

  return (
    <li className="w-full">
      <button
        onClick={handleSelect}
        className={`w-full bg-opacity-60 bg-primary-lighter hover:bg-primary-lightest px-6 py-3 rounded-lg tracking-wide flex items-start justify-between ${
          selectedJob == job && "!bg-primary-lightest"
        }`}
      >
        <div className="flex flex-col gap-3">
          <div className="flex flex-col items-start">
            <h4 className="line-clamp-1">{job.job_title.trim()}</h4>
            <p className="text-sm text-secondary-dark line-clamp-1">{job.job_company}</p>
          </div>

          <div className="font-medium flex items-center gap-2">
            <MapPin weight="fill" size={20} />
            <p className="line-clamp-1">{job.job_location.join(", ")}</p>
          </div>
        </div>

        <div>
          <div className="hover:text-accentOrange">
            <Heart size={20} />
          </div>
        </div>
      </button>
    </li>
  );
}
