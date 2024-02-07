import React from "react";
import Item from "./Item";
import getServerSideSession from "@/lib/auth/ServerSession";

export default async function AppliedJobsView() {
  // this runs as a server component
  const session = await getServerSideSession();

  // TODO: Add try catch, fallback value
  const response = await fetch(
    `http://localhost:3000/api/user/applied-job?userId=${session?.user.id}`
  );

  const result = await response.json();

  return (
    <div className="flex flex-col gap-2 w-full">
      {result.appliedJobs.map((job: IAppliedJobs) => {
        return <Item key={job.id} job={job} />;
      })}
    </div>
  );
}
