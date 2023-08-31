import { db } from "../db/config";

export class AppliedJobHelper {
  async GetAllAppliedJobs(userId: string) {
    const result = await db
      .selectFrom("applied_job")
      .innerJoin("visa_job", "visa_job.id", "applied_job.visa_job_id")
      .innerJoin("company", "company.id", "visa_job.job_company")
      .select([
        "applied_job.id",
        "visa_job.job_title",
        "company.company_name as job_company",
        "visa_job.job_location",
        "applied_job.applied_date",
      ])
      .where("applied_job.user_id", "=", Number(userId))
      .execute();

    return result;
  }

  async ApplyAJob(userId: string, visaJobId: string) {
    const checkingResult = await db
      .selectFrom("applied_job")
      .selectAll()
      .where("applied_job.user_id", "=", Number(userId))
      .where("applied_job.visa_job_id", "=", Number(visaJobId))
      .executeTakeFirst();

    if (checkingResult == undefined) {
      const result = await db
        .insertInto("applied_job")
        .values({
          visa_job_id: Number(visaJobId),
          user_id: Number(userId),
        })
        .executeTakeFirst();

      return Number(result.insertId);
    }

    return null;
  }

  //   async DeleteSavedJob(savedJobId: string) {
  //     const result = await db
  //       .deleteFrom("saved_job")
  //       .where("saved_job.id", "=", Number(savedJobId))
  //       .executeTakeFirst();

  //     return Number(result.numDeletedRows);
  //   }
}
