import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json(
    {
      health: "alive",
    },
    {
      status: 200,
    }
  );
}
