import { NextRequest, NextResponse } from "next/server";
import { JobTypeHelper } from "../../services/helpers/job_types";

const jobTypeHelper = new JobTypeHelper();

export async function GET(req: NextRequest) {
  const result = await jobTypeHelper.GetAllJobTypes();

  return NextResponse.json(
    {
      types: result,
    },
    {
      status: 200,
    }
  );
}
