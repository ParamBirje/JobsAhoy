export async function GetUserProfiles(userID: number) {
  const res = await fetch(`http://localhost:3000/api/user/profiles?id=${userID}`);
  const body = await res.json();
  return body;
}

export async function GetJobs(
  profileIDs: number[],
  locationIDs: number[],
  visaStatus: number | null,
  experienceRange: number[],
  jobTypeIDs: number[],
  userId: number,
  page?: number
): Promise<{
  jobsLength: number;
  jobsList: JobListType[];
}> {
  const res = await fetch(
    `http://localhost:3000/api/jobs/search?profile=${profileIDs.join("&profile=")}${
      locationIDs.length > 0 ? `&location=${locationIDs.join("&location=")}` : ""
    }${visaStatus != null ? `&visa=${visaStatus}` : ""}${
      experienceRange.length > 0 ? `&minExp=${experienceRange.join("&maxExp=")}` : ""
    }${jobTypeIDs.length > 0 ? `&type=${jobTypeIDs.join("&type=")}` : ""}&userId=${userId}&page=${
      page ?? "1"
    }`
  );

  const body = await res.json();

  return body;
}

export async function GetTotalJobsCount(
  profileIDs: number[],
  locationIDs: number[],
  visaStatus: number | null,
  experienceRange: number[],
  jobTypeIDs: number[],
  userId: number
) {
  const res = await fetch(
    `http://localhost:3000/api/jobs/count?profile=${profileIDs.join("&profile=")}${
      locationIDs.length > 0 ? `&location=${locationIDs.join("&location=")}` : ""
    }${visaStatus != null ? `&visa=${visaStatus}` : ""}${
      experienceRange.length > 0 ? `&minExp=${experienceRange.join("&maxExp=")}` : ""
    }${jobTypeIDs.length > 0 ? `&type=${jobTypeIDs.join("&type=")}` : ""}&userId=${userId}`
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

export async function GetAllJobTypes() {
  const res = await fetch(`http://localhost:3000/api/jobs/job-types`);

  const body = await res.json();
  return body.types;
}
