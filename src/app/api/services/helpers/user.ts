import { db } from "../db/config";
// FIXME: Memory clogging backend, close all db instances after performing tasks

export class UserHelper {
  async CreateUser(email: string, userName: string) {
    const result = await db
      .insertInto("user")
      .columns(["user_name", "user_email"])
      .values({
        user_name: userName,
        user_email: email,
      })
      .executeTakeFirst();

    return result;
  }

  async CheckUserExists(userID: number) {
    const result = await db
      .selectFrom("user")
      .selectAll()
      .where("user.id", "=", userID)
      .executeTakeFirst();
    return result;
  }

  async GetUserID(userEmail: string) {
    const result = await db
      .selectFrom("user")
      .selectAll()
      .where("user.user_email", "=", userEmail)
      .executeTakeFirst();
    return result;
  }

  async CheckOnboardingStatus(userID: number) {
    const result = await db
      .selectFrom("user")
      .select("selected_profile")
      .where("user.id", "=", userID)
      .executeTakeFirst();
    return result;
  }

  async UploadOnboardingDetails(
    userID: number,
    userProfile: number,
    profileDesc: string,
    userProfileExperience: number
  ) {
    const userProfileResult = await db
      .insertInto("user_profile")
      .values({
        user_id: userID,
        job_profile_id: userProfile,
        user_profile_desc: profileDesc,
        user_profile_experience: userProfileExperience,
      })
      .executeTakeFirst();

    if (userProfileResult) {
      const userUpdateResult = await db
        .updateTable("user")
        .set({
          selected_profile: Number(userProfileResult.insertId),
        })
        .where("id", "=", userID)
        .executeTakeFirst();

      return {
        status: "success",
      };
    }

    return null;
  }

  async GetUserProfiles(userID: number) {
    const userResult = await db
      .selectFrom("user")
      .select(["user.id", "user.selected_profile"])
      .where("user.id", "=", userID)
      .executeTakeFirst();

    if (userResult) {
      const profilesResult = await db
        .selectFrom("user_profile")
        .innerJoin("job_profile", "job_profile.id", "user_profile.job_profile_id")
        .select([
          "job_profile.id",
          "job_profile.profile_name",
          "user_profile.user_profile_experience",
          "user_profile.user_profile_desc",
        ])
        .where("user_profile.user_id", "=", userID)
        .execute();

      var selectedProfile;
      profilesResult.forEach((profile) => {
        if (profile.id == userResult.selected_profile) {
          selectedProfile = profile;
        }
      });

      return {
        selectedProfile: selectedProfile,
        profilesList: profilesResult,
      };
    }
    return null;
  }
}
