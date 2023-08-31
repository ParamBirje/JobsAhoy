import { NextRequest, NextResponse } from "next/server";
import { AppliedJobHelper } from "../../services/helpers/applied_job";

const appliedJobHelper = new AppliedJobHelper();

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const userID = searchParams.get("userId");

  if (userID && Number(userID)) {
    const result = await appliedJobHelper.GetAllAppliedJobs(userID);

    if (result) {
      return NextResponse.json({
        appliedJobs: result,
      });
    }
  }

  //   TODO: Add a response to no searchParams received.
}

export async function POST(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const userID = searchParams.get("userId");
  const visaJobId = searchParams.get("jobId");

  if (userID && Number(userID) && visaJobId && Number(visaJobId)) {
    const result = await appliedJobHelper.ApplyAJob(userID, visaJobId);

    if (result) {
      return NextResponse.json({
        message: "Job applied successfully.",
      });
    } else {
      return NextResponse.json(
        {
          error: "Job already applied.",
        },
        {
          status: 226, // "already in use"
        }
      );
    }
  }

  //  TODO: Add a response to no searchParams received.
}

// export async function DELETE(req: NextRequest) {
//   const { searchParams } = new URL(req.url);
//   const savedJobID = searchParams.get("id");

//   if (savedJobID && Number(savedJobID)) {
//     const result = await appliedJobHelper.DeleteSavedJob(savedJobID);

//     if (result) {
//       return NextResponse.json({
//         message: "Applied Job removed.",
//       });
//     }
//   }

//   //   TODO: Add a response to no searchParams received.
// }
