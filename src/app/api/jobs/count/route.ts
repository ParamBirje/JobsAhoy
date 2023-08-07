import { NextRequest, NextResponse } from "next/server";
import { JobHelper } from "../../services/helpers/job";

const job = new JobHelper();

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const profileIDs = searchParams.getAll("profile");
  const locationIDs = searchParams.getAll("location");

  if (profileIDs.length > 0 && profileIDs.every((value) => Number(value))) {
    const result = await job.CountJobsByProfile(profileIDs, locationIDs);

    return NextResponse.json(
      {
        totalJobs: Number(result),
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
