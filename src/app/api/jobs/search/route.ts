import { NextRequest, NextResponse } from "next/server";
import { JobHelper } from "../../services/helpers/job";

const job = new JobHelper();

export async function GET(req: NextRequest) {
  // FIXME: GET USER ID DIRECTLY THROUGH NEXTAUTH

  // const session = await getServerSession(authOptions);

  const { searchParams } = new URL(req.url);
  const profileIDs = searchParams.getAll("profile");
  const locationIDs = searchParams.getAll("location");
  const visaStatus = searchParams.get("visa");
  const minExp = searchParams.get("minExp");
  const maxExp = searchParams.get("maxExp");
  const jobTypeIDs = searchParams.getAll("type");
  const userId = searchParams.get("userId");

  const page = searchParams.get("page") as unknown as number;

  if (
    profileIDs.length > 0 &&
    profileIDs.every((value) => Number(value)) &&
    userId &&
    Number(userId) &&
    //
    // Filters
    locationIDs.every((value) => Number(value)) &&
    (visaStatus == "1" || visaStatus == "0" || visaStatus == null) &&
    (((Number(minExp) || minExp == "0") && Number(maxExp)) || (minExp == null && maxExp == null)) &&
    jobTypeIDs.every((value) => Number(value))
  ) {
    const result = await job.SearchJobsByProfile(
      profileIDs,
      locationIDs,
      visaStatus,
      minExp,
      maxExp,
      jobTypeIDs,
      Number(userId),
      page
    );

    return NextResponse.json(
      {
        jobsListLength: result.length,
        jobsList: result,
      },
      {
        status: 200,
      }
    );
  } else {
    // TODO: Add error to incomplete request fields
    return NextResponse.json({
      error: "Error in parameters provided.",
    });
  }
}
