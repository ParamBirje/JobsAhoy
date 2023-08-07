import { NextRequest, NextResponse } from "next/server";
import { LocationHelper } from "../services/helpers/location";

const locationHelper = new LocationHelper();

export async function GET(req: NextRequest) {
  const result = await locationHelper.GetAllLocations();

  return NextResponse.json(
    {
      locations: result,
    },
    {
      status: 200,
    }
  );
}
