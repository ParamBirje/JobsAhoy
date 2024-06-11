import React from "react";
import Item from "./Item";
import getServerSideSession from "@/lib/auth/ServerSession";

export default async function SavedJobsView() {
  // this runs as a server component
  const session = await getServerSideSession();

  // TODO: Add try catch, fallback value
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_NEXTAUTH_URL}/api/user/saved-job?userId=${session?.user.id}`
  );

  const result = await response.json();

  return (
    <div className="flex flex-col gap-2 w-full">
      {result.savedJobs.map((job: ISavedJobs) => {
        return <Item key={job.id} job={job} />;
      })}
    </div>
  );
}
