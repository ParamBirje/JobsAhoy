import { NextRequest, NextResponse } from "next/server";
import { JobHelper } from "../../services/helpers/job";

const jobs = new JobHelper();

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const jobId = searchParams.get("jobId");

  if (jobId) {
    const result = await jobs.GetJobDetails(jobId as unknown as number);

    if (result) {
      return NextResponse.json(
        {
          jobDetails: result,
        },
        {
          status: 200,
        }
      );
    }
  }
  // TODO: Add an error response if no required data present
}
