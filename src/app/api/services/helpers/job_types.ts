import { db } from "../db/config";

export class JobTypeHelper {
  async GetAllJobTypes() {
    const result = db
      .selectFrom("job_type")
      .select(["job_type.id", "job_type.type_name"])
      .execute();

    return result;
  }
}
