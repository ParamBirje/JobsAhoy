import { db } from "../db/config";
import { sql } from "kysely";

export class JobHelper {
  async SearchJobsByProfile(profileIDs: string[], locationIDs: string[], page: number | null) {
    const itemsPerPage = 10;

    let currentPage = page ?? 1;
    let offset = (currentPage - 1) * itemsPerPage;

    let query = db
      .selectFrom("visa_job")
      .innerJoin("job_profile", "job_profile.id", "visa_job.selected_profile")
      .innerJoin("company", "company.id", "visa_job.job_company")
      .innerJoin("job_type", "job_type.id", "visa_job.job_type")
      .select([
        "visa_job.id",
        "visa_job.job_title",
        "company.company_name as job_company",
        "visa_job.job_location",
        "visa_job.job_experience_min",
        "visa_job.job_experience_max",
        "job_type.type_name as job_type",
        "visa_job.created_at",
      ])
      .where((eb) =>
        eb.or(
          profileIDs.map((profile) => {
            return eb("job_profile.id", "=", Number(profile));
          })
        )
      );

    // Filters

    // Location Filter
    if (locationIDs.length > 0) {
      query = query
        .innerJoin("location_connector", "location_connector.visa_job_id", "visa_job.id")
        .where((eb) =>
          eb.or(
            locationIDs.map((location) => {
              return eb("location_connector.location_id", "=", Number(location));
            })
          )
        );
    }

    const result = await query.offset(offset).limit(itemsPerPage).execute();
    return result;
  }

  // HACK: This code should be the same as above.
  async CountJobsByProfile(profileIDs: string[], locationIDs: string[]) {
    let query = db
      .selectFrom("visa_job")
      .innerJoin("job_profile", "job_profile.id", "visa_job.selected_profile")
      .select((eb) => eb.fn.countAll().as("totalJobs"))

      .where((eb) =>
        eb.or(
          profileIDs.map((profile) => {
            return eb("job_profile.id", "=", Number(profile));
          })
        )
      );

    // Filters

    // Location Filter
    if (locationIDs.length > 0) {
      query = query
        .innerJoin("location_connector", "location_connector.visa_job_id", "visa_job.id")
        .where((eb) =>
          eb.or(
            locationIDs.map((location) => {
              return eb("location_connector.location_id", "=", Number(location));
            })
          )
        );
    }

    const result = await query.executeTakeFirst();
    return result?.totalJobs;
  }

  async GetJobDetails(jobId: number) {
    const result = await db
      .selectFrom("visa_job")
      .innerJoin("company", "company.id", "visa_job.job_company")
      .innerJoin("job_type", "job_type.id", "visa_job.job_type")
      .select([
        "visa_job.id",
        "visa_job.job_title",
        "company.company_name as job_company",
        "visa_job.job_location",
        "visa_job.job_experience_min",
        "visa_job.job_experience_max",
        "job_type.type_name as job_type",
        "visa_job.job_desc",
        "visa_job.job_link",
        "visa_job.job_sponsored",
        "visa_job.job_selfapply_link",
        "visa_job.created_at",
      ])
      .where("visa_job.id", "=", jobId)
      .executeTakeFirst();

    return result;
  }
}
