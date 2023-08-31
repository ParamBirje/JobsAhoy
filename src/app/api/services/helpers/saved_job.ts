import { db } from "../db/config";

export class SavedJobHelper {
  async GetAllSavedJobs(userId: string) {
    const result = await db
      .selectFrom("saved_job")
      .innerJoin("visa_job", "visa_job.id", "saved_job.visa_job_id")
      .innerJoin("company", "company.id", "visa_job.job_company")
      .select([
        "saved_job.id",
        "visa_job.job_title",
        "company.company_name as job_company",
        "visa_job.job_location",
        "saved_job.saved_date",
      ])
      .where("saved_job.user_id", "=", Number(userId))
      .execute();

    return result;
  }

  async SaveAJob(userId: string, visaJobId: string) {
    const checkingResult = await db
      .selectFrom("saved_job")
      .selectAll()
      .where("saved_job.user_id", "=", Number(userId))
      .where("saved_job.visa_job_id", "=", Number(visaJobId))
      .executeTakeFirst();

    if (checkingResult == undefined) {
      const result = await db
        .insertInto("saved_job")
        .values({
          visa_job_id: Number(visaJobId),
          user_id: Number(userId),
        })
        .executeTakeFirst();

      return Number(result.insertId);
    }

    return null;
  }

  async DeleteSavedJob(savedJobId: string) {
    const result = await db
      .deleteFrom("saved_job")
      .where("saved_job.id", "=", Number(savedJobId))
      .executeTakeFirst();

    return Number(result.numDeletedRows);
  }
}
