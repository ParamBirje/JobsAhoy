import { db } from "../db/config";

export class LocationHelper {
  async GetAllLocations() {
    const result = db
      .selectFrom("location")
      .select(["location.id", "location.location_name"])
      .execute();

    return result;
  }
}
