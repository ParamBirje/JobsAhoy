import { db } from "../db/config";

export class JobProfileHelper {
  async GetJobProfileBySearch(searchTerm: string) {
    const searchQuery = `%${searchTerm}%`;

    // OPTIMIZE: Optimise this query
    const result = db
      .selectFrom("job_profile")
      .select(["job_profile.id", "job_profile.profile_name"])
      .where((eb) => {
        return eb("job_profile.profile_name", "like", searchQuery).or(
          "job_profile.profile_tags",
          "like",
          searchQuery
        );
      })
      .execute();

    return result;
  }

  async GetAllJobProfiles() {
    // OPTIMIZE: Optimise this query
    const result = db
      .selectFrom("job_profile")
      .select(["job_profile.id", "job_profile.profile_name"])
      .execute();

    return result;
  }
}
