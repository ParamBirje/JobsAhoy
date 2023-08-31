import { NextRequest, NextResponse } from "next/server";
import { SavedJobHelper } from "../../services/helpers/saved_job";

const savedJobHelper = new SavedJobHelper();

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const userID = searchParams.get("userId");

  if (userID && Number(userID)) {
    const result = await savedJobHelper.GetAllSavedJobs(userID);

    if (result) {
      return NextResponse.json({
        savedJobs: result,
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
    const result = await savedJobHelper.SaveAJob(userID, visaJobId);

    if (result) {
      return NextResponse.json({
        message: "Job saved successfully.",
      });
    } else {
      return NextResponse.json(
        {
          error: "Job already saved.",
        },
        {
          status: 226, // "already in use"
        }
      );
    }
  }

  //  TODO: Add a response to no searchParams received.
}

export async function DELETE(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const savedJobID = searchParams.get("id");

  if (savedJobID && Number(savedJobID)) {
    const result = await savedJobHelper.DeleteSavedJob(savedJobID);

    if (result) {
      return NextResponse.json({
        message: "Saved Job removed.",
      });
    } else {
      return NextResponse.json(
        {
          error: "Saved Job removed.",
        },
        {
          status: 501,
        }
      );
    }
  }

  //   TODO: Add a response to no searchParams received.
}
