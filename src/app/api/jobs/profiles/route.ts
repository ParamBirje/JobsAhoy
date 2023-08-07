import { NextRequest, NextResponse } from "next/server";
import { JobProfileHelper } from "../../services/helpers/job_profile";

const jobProfile = new JobProfileHelper();

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const searchTerm = searchParams.get("search");

  if (searchTerm) {
    const result = await jobProfile.GetJobProfileBySearch(searchTerm);

    return NextResponse.json(
      {
        profiles: result,
      },
      {
        status: 200,
      }
    );
  } else {
    const result = await jobProfile.GetAllJobProfiles();

    return NextResponse.json(
      {
        profiles: result,
      },
      {
        status: 200,
      }
    );
  }
}
