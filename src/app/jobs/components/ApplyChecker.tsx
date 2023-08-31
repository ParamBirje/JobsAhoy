import { Session } from "next-auth";
import React, { useEffect, useRef, useState } from "react";

export default function ApplyChecker({
  enabled,
  setShow,
  session,
  job,
}: {
  enabled: boolean;
  setShow: any;
  session: Session | null;
  job: JobDetailsType;
}) {
  const [error, setError] = useState<string | null>(null);

  // Listening to clicks outside of the profile options
  const componentRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    const handleClickOutside = (event: any) => {
      if (componentRef.current && !componentRef.current.contains(event.target)) {
        setShow(false);
      }
    };

    if (enabled) {
      document.addEventListener("click", handleClickOutside);
    }

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [enabled]);

  // Decline Button
  function handleDeclineButton() {
    setShow(!enabled);
  }

  // Apply button handler
  // FIXME: Uses client side POST request
  async function handleAcceptButton() {
    try {
      const res = await fetch(
        `http://localhost:3000/api/user/applied-job?userId=${session?.user.id}&jobId=${job.id}`,
        {
          method: "POST",
        }
      );

      console.log("Job tracking status:", res.status);
      setError(null);
      setShow(!enabled);
    } catch (e) {
      console.log("applied button error", e);
      setError("Process failed.");
    }
  }

  return (
    <div className="fixed z-[10] top-0 left-0 w-full h-full flex items-center bg-black bg-opacity-50 justify-center">
      <div
        ref={componentRef}
        className="w-1/4 px-5 py-5 rounded-md bg-primary-lighter flex flex-col gap-3"
      >
        <h3 className="text-lg font-semibold">Did you apply to this job?</h3>
        <p className="text-secondary-dark">
          We will add this job to your profile's applied jobs list, which will help you to track
          your applications easily.
        </p>

        <div className="flex items-center justify-end mt-5">
          <button
            onClick={handleDeclineButton}
            className="text-sm rounded-full px-4 py-1 font-medium hover:underline underline-offset-2 duration-100"
          >
            No, I did not apply
          </button>

          <button
            onClick={handleAcceptButton}
            className="text-sm bg-accent rounded-full px-4 py-1 font-medium hover:bg-accent-light duration-100"
          >
            Yes, track this application
          </button>
        </div>

        {error && <p>{error}</p>}
      </div>
    </div>
  );
}
