import { NextRequest, NextResponse } from "next/server";
import { JobHelper } from "../../services/helpers/job";

const jobs = new JobHelper();

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const userId = 2;
  const jobId = searchParams.get("jobId");

  if (Number(jobId) && Number(userId)) {
    const result = await jobs.GetJobDetails(Number(jobId), Number(userId));

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
