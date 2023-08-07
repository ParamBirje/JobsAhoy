import { NextRequest, NextResponse } from "next/server";
import { UserHelper } from "../../services/helpers/user";

const user = new UserHelper();

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const userID = searchParams.get("id") as unknown as number;

  if (userID) {
    const result = await user.GetUserProfiles(userID);

    if (result) {
      return NextResponse.json({
        ...result,
      });
    }
  }
  // TODO: Add fallback error if no searchParams received
}
