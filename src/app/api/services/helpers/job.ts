import { db } from "../db/config";
import { sql } from "kysely";

export class JobHelper {
  async SearchJobsByProfile(
    profileIDs: string[],
    locationIDs: string[],
    visaStatus: string | null,
    minExp: string | null,
    maxExp: string | null,
    jobTypeIDs: string[],
    userId: number,
    page: number | null
  ) {
    const itemsPerPage = 10;

    let currentPage = page ?? 1;
    let offset = (currentPage - 1) * itemsPerPage;

    let query = db
      .selectFrom("visa_job")
      .innerJoin("job_profile", "job_profile.id", "visa_job.selected_profile")
      .innerJoin("company", "company.id", "visa_job.job_company")
      .innerJoin("job_type", "job_type.id", "visa_job.job_type")

      .leftJoin("saved_job", (join) =>
        join.onRef("saved_job.visa_job_id", "=", "visa_job.id").on("saved_job.user_id", "=", userId)
      )
      .leftJoin("applied_job", (join) =>
        join
          .onRef("applied_job.visa_job_id", "=", "visa_job.id")
          .on("applied_job.user_id", "=", userId)
      )

      .select([
        "visa_job.id",
        "visa_job.job_title",
        "company.company_name as job_company",
        "visa_job.job_location",
        "visa_job.job_experience_min",
        "visa_job.job_experience_max",
        "job_type.type_name as job_type",
        "visa_job.created_at",
        "saved_job.id as saved_job_id",
        "applied_job.id as applied_job_id",
      ])

      .where((eb) =>
        eb.or(
          profileIDs.map((profile) => {
            return eb("job_profile.id", "=", Number(profile));
          })
        )
      )

      .where("applied_job.id", "is", null);

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

    // Visa Status Filter
    if (visaStatus) {
      query = query.where("visa_job.job_sponsored", "=", Boolean(Number(visaStatus)));
    }

    // Experience Filter
    if (minExp && maxExp) {
      query = query.where(
        sql`(visa_job.job_experience_min between ${Number(minExp)} and ${Number(
          maxExp
        )} OR visa_job.job_experience_max between ${Number(minExp)} and ${Number(maxExp)})`
      );
    }

    // Job Type Filter
    if (jobTypeIDs.length > 0) {
      query = query.where((eb) =>
        eb.or(
          jobTypeIDs.map((jobType) => {
            return eb("visa_job.job_type", "=", Number(jobType));
          })
        )
      );
    }

    console.log(query.compile().sql);

    const result = await query.offset(offset).limit(itemsPerPage).execute();
    return result;
  }

  // HACK: This code should be the same as above.
  async CountJobsByProfile(
    profileIDs: string[],
    locationIDs: string[],
    visaStatus: string | null,
    minExp: string | null,
    maxExp: string | null,
    jobTypeIDs: string[],
    userId: number
  ) {
    let query = db
      .selectFrom("visa_job")
      .innerJoin("job_profile", "job_profile.id", "visa_job.selected_profile")
      .innerJoin("company", "company.id", "visa_job.job_company")
      .innerJoin("job_type", "job_type.id", "visa_job.job_type")

      .leftJoin("applied_job", (join) =>
        join
          .onRef("applied_job.visa_job_id", "=", "visa_job.id")
          .on("applied_job.user_id", "=", userId)
      )

      .select((eb) => eb.fn.countAll().as("totalJobs"))

      .where((eb) =>
        eb.or(
          profileIDs.map((profile) => {
            return eb("job_profile.id", "=", Number(profile));
          })
        )
      )

      .where("applied_job.id", "is", null);

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

    // Visa Status Filter
    if (visaStatus) {
      query = query.where("visa_job.job_sponsored", "=", Boolean(Number(visaStatus)));
    }

    // Experience Filter
    if (minExp && maxExp) {
      query = query.where(
        sql`(visa_job.job_experience_min between ${Number(minExp)} and ${Number(
          maxExp
        )} OR visa_job.job_experience_max between ${Number(minExp)} and ${Number(maxExp)})`
      );
    }

    // Job Type Filter
    if (jobTypeIDs.length > 0) {
      query = query.where((eb) =>
        eb.or(
          jobTypeIDs.map((jobType) => {
            return eb("visa_job.job_type", "=", Number(jobType));
          })
        )
      );
    }

    const result = await query.executeTakeFirst();
    return result?.totalJobs;
  }

  async GetJobDetails(jobId: number, userId: number) {
    const result = await db
      .selectFrom("visa_job")
      .innerJoin("company", "company.id", "visa_job.job_company")
      .innerJoin("job_type", "job_type.id", "visa_job.job_type")
      .leftJoin("saved_job", (join) =>
        join
          .onRef("saved_job.visa_job_id", "=", "visa_job.id")
          .on("saved_job.visa_job_id", "=", jobId)
      )

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
        "saved_job.id as saved_job_id",
      ])
      .where("visa_job.id", "=", jobId)
      .executeTakeFirst();

    return result;
  }
}
