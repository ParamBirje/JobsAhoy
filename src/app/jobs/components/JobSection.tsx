"use client";

import { useEffect } from "react";
import JobCard from "../components/JobCard";
import JobInfo from "../components/JobInfo";
import Pagination from "./Pagination";
import { atom, useAtom } from "jotai";

export const selectedJobAtom = atom<JobListType | null>(null);
export const jobItemsPerPageAtom = atom(0);
export const totalJobsAtom = atom(0);

export default function JobSection({
  jobsList,
  totalJobs,
}: {
  jobsList: JobListType[];
  totalJobs: number;
}) {
  const [jobItemsPerPage, setJobItemsPerPage] = useAtom(jobItemsPerPageAtom);
  const [totalJobsCount, setTotalJobsCount] = useAtom(totalJobsAtom);

  const jobsPerPageLimit = 10;

  useEffect(() => {
    setJobItemsPerPage(jobsPerPageLimit);
    setTotalJobsCount(totalJobs);
  }, []);

  return (
    <div className="flex gap-3">
      {/* Jobs List */}
      <ul className="w-1/3 h-[76vh overflow-y-auto flex flex-col gap-3">
        {jobsList.length > 0 ? (
          jobsList.map((job) => {
            return <JobCard job={job} key={job.id} />;
          })
        ) : (
          <p className="mt-4 tracking-wide text-secondary-dark">No jobs found for this search.</p>
        )}

        {/* Pagination */}
        <Pagination />
      </ul>

      {/* Job Details */}
      <JobInfo />
    </div>
  );
}
