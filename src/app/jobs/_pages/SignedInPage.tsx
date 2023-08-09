import getServerSideSession from "@/lib/auth/ServerSession";
import JobSection from "../components/JobSection";
import ProfileSwitcher from "../components/ProfileFilter/ProfileSwitcher";
import { redirect } from "next/navigation";
import Filters from "../components/Filters";
import {
  GetAllLocations,
  GetJobs,
  GetTotalJobsCount,
  GetUserProfiles,
} from "./helpers/SignedInPageHelpers";

export default async function SignedInPage({
  searchParams,
  page,
}: {
  searchParams: JobsPageSearchParams;
  page: number;
}) {
  const session = await getServerSideSession();

  // Initial Promise
  const {
    selectedProfile,
    profilesList,
  }: { selectedProfile: UserProfileType; profilesList: UserProfileType[] } = await GetUserProfiles(
    session?.user?.id as number
  );

  // Getting the searchParams to change the content (for using filters)
  let cleanedProfileList: number[] = [];
  let cleanedLocationList: number[] = [];
  let cleanedVisaStatus: number | null = null;

  // Getting profile filter params
  if (searchParams.profile) {
    searchParams.profile = [...searchParams.profile];
    searchParams.profile.forEach((profileID) => cleanedProfileList.push(Number(profileID)));

    // --- HACK: Uncomment this if you want to make selectedProfile default with other profiles
    // if (!searchParams.profile.includes(selectedProfile.id.toString())) {
    //   cleanedProfileList.push(Number(selectedProfile.id));
    // }
  } else {
    redirect(`/jobs?profile=${profilesList.map((profile) => profile.id).join("&profile=")}`);
  }

  // Other filters (these filters are not necessary in the url, hence dont need redirects.)
  if (searchParams.location) {
    searchParams.location = [...searchParams.location];
    searchParams.location.forEach((locationID) => cleanedLocationList.push(Number(locationID)));
  }

  if (searchParams.visa && (searchParams.visa == "1" || searchParams.visa == "0")) {
    cleanedVisaStatus = Number(searchParams.visa);
  }

  // Promises
  const [jobsData, totalJobs, locationsList] = await Promise.all([
    GetJobs(cleanedProfileList, cleanedLocationList, cleanedVisaStatus, page),
    GetTotalJobsCount(cleanedProfileList, cleanedLocationList, cleanedVisaStatus),

    // Filters
    GetAllLocations(),
  ]);

  return (
    <main className="max-w-7xl mx-auto px-5 py-5 h-[80vh]">
      <div className="flex flex-col gap-10 h-full">
        <div className="flex flex-col gap-4">
          {/* Profile Bar */}

          <div className="w-fit">
            <ProfileSwitcher
              session={session}
              selectedProfile={selectedProfile}
              profilesList={profilesList}
            />
          </div>

          {/* Filters */}
          <Filters locationsList={locationsList} />
        </div>

        {/* Job Section */}
        <JobSection totalJobs={totalJobs} jobsList={jobsData.jobsList} />
      </div>
    </main>
  );
}
