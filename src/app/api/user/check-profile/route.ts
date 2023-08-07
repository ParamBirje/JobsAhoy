import { NextRequest, NextResponse } from "next/server";
import { UserHelper } from "../../services/helpers/user";

const user = new UserHelper();

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const userID = searchParams.get("id") as unknown as number;
  const result = await user.CheckOnboardingStatus(userID);

  if (result) {
    if (result.selected_profile) {
      return NextResponse.json(
        {
          selectedProfile: result.selected_profile,
          message: "User completed onboarding.",
        },
        { status: 200 }
      );
    } else {
      // const url = req.nextUrl.clone();
      // url.pathname = "/user/onboarding";
      return NextResponse.json(
        {
          callbackUrl: "/user/onboarding",
        },
        { status: 200 }
      );
    }
  } else {
    return NextResponse.json(
      {
        error: "No user found for provided ID.",
      },
      {
        status: 404,
      }
    );
  }
}
