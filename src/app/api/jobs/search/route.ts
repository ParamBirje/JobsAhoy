import { NextRequest, NextResponse } from "next/server";
import { JobHelper } from "../../services/helpers/job";

const job = new JobHelper();

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const profileIDs = searchParams.getAll("profile");
  const locationIDs = searchParams.getAll("location");
  const page = searchParams.get("page") as unknown as number;

  if (
    profileIDs.length > 0 &&
    profileIDs.every((value) => Number(value)) &&
    // Filters
    locationIDs.every((value) => Number(value))
  ) {
    const result = await job.SearchJobsByProfile(profileIDs, locationIDs, page);

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
    return NextResponse.json({});
  }
}
