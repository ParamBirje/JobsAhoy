export async function GetUserProfiles(userID: number) {
  const res = await fetch(`http://localhost:3000/api/user/profiles?id=${userID}`);
  const body = await res.json();
  return body;
}

export async function GetJobs(
  profileIDs: number[],
  locationIDs: number[],
  visaStatus: number | null,
  page?: number
): Promise<{
  jobsLength: number;
  jobsList: JobListType[];
}> {
  const res = await fetch(
    `http://localhost:3000/api/jobs/search?profile=${profileIDs.join("&profile=")}${
      locationIDs.length > 0 ? `&location=${locationIDs.join("&location=")}` : ""
    }${visaStatus != null ? `&visa=${visaStatus}` : ""}&page=${page ?? "1"}`
  );

  const body = await res.json();
  console.log("requesting url ", res.url);

  return body;
}

export async function GetTotalJobsCount(
  profileIDs: number[],
  locationIDs: number[],
  visaStatus: number | null
) {
  const res = await fetch(
    `http://localhost:3000/api/jobs/count?profile=${profileIDs.join("&profile=")}${
      locationIDs.length > 0 ? `&location=${locationIDs.join("&location=")}` : ""
    }${visaStatus != null ? `&visa=${visaStatus}` : ""}`
  );

  const body = await res.json();
  return body.totalJobs;
}

// Filters

export async function GetAllLocations() {
  const res = await fetch(`http://localhost:3000/api/locations`);

  const body = await res.json();
  return body.locations;
}
