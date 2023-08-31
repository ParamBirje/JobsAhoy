import { MapPin } from "@/lib/Icons";
import React from "react";

export default function Item({ job }: { job: IAppliedJobs }) {
  return (
    <div className="bg-primary-lighter bg-opacity-30 rounded-md px-6 py-3 w-full flex justify-between items-center">
      <div className="flex items-center gap-3">
        <p className="text-lg">{job.job_title}</p>
        <p className="text-secondary-dark">@{job.job_company}</p>
      </div>

      <div className="flex items-center gap-3 text-accent-light">
        <MapPin weight="fill" size={20} />
        <p>{job.job_location[0]}</p>
      </div>
    </div>
  );
}
