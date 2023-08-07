import { Airplane, ArrowRight, Info, MapPin } from "@/lib/Icons";
import parse from "html-react-parser";
import { useAtom } from "jotai";
import { selectedJobAtom } from "./JobSection";
import { useEffect, useState } from "react";

export default function JobInfo() {
  const [job, setJobDetails] = useState<JobDetailsType>();
  const [selectedJob] = useAtom(selectedJobAtom);

  useEffect(() => {
    if (selectedJob) {
      (async function () {
        const result = await GetSelectedJobDetails(selectedJob.id);
        setJobDetails(result);
      })();
    }
  }, [selectedJob]);

  const jobDesc = job?.job_desc as string;

  return (
    <div className="w-2/3 h-[70vh] relative bg-opacity-60 bg-primary-lighter px-8 py-5 rounded-lg tracking-wide flex flex-col gap-5">
      {job ? (
        <>
          <div className="flex justify-between">
            <div>
              {/* Main Metadata */}
              <div className="sticky top-0">
                <h3 className="text-2xl font-semibold">{job.job_title}</h3>
                <h4 className="text-lg">{job.job_company}</h4>

                <div className="flex items-center gap-3">
                  <button className="my-3 text-lg text-accent-light flex items-center gap-2">
                    <MapPin weight="fill" size={20} />
                    <p>{job.job_location.join(", ")}</p>
                  </button>
                </div>
              </div>

              {/* Assigned Tags */}
              <div className="flex items-center gap-2">
                <div className="text-[11px] bg-primary-lightest hover:brightness-110 px-4 py-1 rounded-full tracking-wider flex items-center gap-3">
                  <p>{job.job_sponsored ? "Visa Sponsored" : "Visa Available"}</p>
                </div>

                <div className="text-[11px] bg-primary-lightest hover:brightness-110 px-4 py-1 rounded-full tracking-wider flex items-center gap-3">
                  <p>
                    {job.job_experience_min}-{job.job_experience_max} Years Exp.
                  </p>
                </div>

                <div className="text-[11px] bg-primary-lightest hover:brightness-110 px-4 py-1 rounded-full tracking-wider flex items-center gap-3">
                  <p>{job.job_type}</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col items-end justify-between gap-5 h-full">
              <button className="px-8 py-2 text-lg font-medium tracking-wide text-secondary bg-accentOrange-dark rounded-full hover:brightness-110 duration-100">
                Apply
              </button>

              {job.job_selfapply_link && (
                <button className="flex items-center text-accent-light gap-1 hover:underline pr-2">
                  <Airplane size={15} />
                  <p className="tracking-wide">Apply For Visa</p>
                </button>
              )}
            </div>
          </div>

          {/* Description */}
          <div className="w-full overflow-y-auto">
            <div
              className="tracking-wider leading-relaxed opacity-80 text-md"
              // dangerouslySetInnerHTML={{ __html: jobDesc }}
            >
              {parse(jobDesc)}
            </div>

            <div className="mx-auto w-3/4 h-[2px] my-5" />

            {/* Additional buttons */}
            <div className="my-5">
              <div className="flex items-center gap-5 text-lg">
                <button className="flex items-center tracking-wider justify-between px-4 py-2 w-full bg-transparent border border-secondary rounded-lg hover:bg-secondary hover:text-primary duration-100">
                  <p>Start Interview Prep</p>
                  <ArrowRight size={20} />
                </button>
                <button className="flex items-center tracking-wider justify-between px-4 py-2 w-full bg-transparent border border-secondary rounded-lg hover:bg-secondary hover:text-primary duration-100">
                  <p>Create Resume/Cover Letter</p>
                  <ArrowRight size={20} />
                </button>
              </div>
              <div className="mt-5">
                <h5 className="text-md font-semibold">About Marriott Hotels</h5>
                <p className="text-secondary-dark">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore, possimus?
                </p>
              </div>
            </div>
          </div>
        </>
      ) : (
        <div className="text-secondary-dark">Please select a job to view more.</div>
      )}
    </div>
  );
}

// FIXME: This function calls on clientside
async function GetSelectedJobDetails(jobId: string | number) {
  const result = await fetch(`http://localhost:3000/api/jobs/specific?jobId=${jobId}`);
  const body = await result.json();

  return body.jobDetails;
}
