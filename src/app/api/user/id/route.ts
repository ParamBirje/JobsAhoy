import { NextRequest, NextResponse } from "next/server";
import { UserHelper } from "../../services/helpers/user";

const user = new UserHelper();

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const email = searchParams.get("email");

  if (email) {
    const result = await user.GetUserID(email);

    if (result) {
      return NextResponse.json(
        {
          id: result.id,
        },
        {
          status: 200,
        }
      );
    }
  }
}
