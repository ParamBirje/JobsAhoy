import { NextRequest, NextResponse } from "next/server";
import { UserHelper } from "../../services/helpers/user";

const user = new UserHelper();

export async function POST(req: NextRequest) {
  const body = await req.json();

  const result = await user.UploadOnboardingDetails(
    body.userID,
    body.userProfile,
    body.profileDesc,
    body.userProfileExperience
  );

  if (result) {
    // success

    return NextResponse.json(
      {
        message: "Successfully Onboarded!",
        status: result.status,
        callbackUrl: "/jobs",
      },
      {
        status: 200,
      }
    );
  } else {
    // failed

    return NextResponse.json({
      statusText: "Failed to upload details.",
      status: 400,
    });
  }
}
