import { ColumnType, Generated, Insertable, Selectable, Updateable } from "kysely";

export interface Database {
  // The keys here are actual names of tables
  visa_job: VisaJobTable;
  applied_job: AppliedJobTable;
  saved_job: SavedJobTable;
  job_profile: JobProfileTable;
  job_type: JobTypeTable;
  user_profile: UserProfileTable;
  user: UserTable;
  company: CompanyTable;
  location: LocationTable;
  location_connector: LocationConnectorTable;
}

export interface VisaJobTable {
  id: Generated<number>;
  job_title: string;
  job_location: string[];
  job_desc: string;
  job_experience_min: number;
  job_experience_max: number;
  job_sponsored: boolean;
  job_selfapply_link: string | null;
  job_link: string;

  // Foreign Keys
  job_type: number | null;
  approved_by: number | null;
  job_company: number;
  selected_profile: number;

  created_at: ColumnType<Date, string | undefined | Date, never>;
}
export type VisaJob = Selectable<VisaJobTable>;

export interface CompanyTable {
  id: Generated<number>;
  company_name: string;
  company_desc: string;
  company_link: string;
}
export type Company = Selectable<CompanyTable>;

export interface LocationTable {
  id: Generated<number>;
  location_name: string;
  location_desc: string | null;
  location_country: string | null;
}
export type Location = Selectable<LocationTable>;
export type NewLocation = Insertable<LocationTable>;
export type LocationUpdate = Updateable<LocationTable>;

export interface LocationConnectorTable {
  id: Generated<number>;
  location_id: number;
  visa_job_id: number;
}
export type LocationConnector = Selectable<LocationConnectorTable>;
export type NewLocationConnector = Insertable<LocationConnectorTable>;
export type LocationConnectorUpdate = Updateable<LocationConnectorTable>;

export interface AppliedJobTable {
  id: Generated<number>;
  applied_date: ColumnType<Date, string | Date, never>;
  user_id: number;
  visa_job_id: number;
}
export type AppliedJob = Selectable<AppliedJobTable>;
export type NewAppliedJob = Insertable<AppliedJobTable>;
export type AppliedJobUpdate = Updateable<AppliedJobTable>;

export interface SavedJobTable {
  id: Generated<number>;
  saved_date: ColumnType<Date, string | Date, never>;
  user_id: number;
  visa_job_id: number;
}
export type SavedJob = Selectable<SavedJobTable>;
export type NewSavedJob = Insertable<SavedJobTable>;
export type SavedJobUpdate = Updateable<SavedJobTable>;

export interface JobProfileTable {
  id: Generated<number>;
  profile_name: string;
  profile_tags: string;
  created_at: ColumnType<Date, string | undefined | Date, never>;
}
export type JobProfile = Selectable<JobProfileTable>;

export interface JobTypeTable {
  id: Generated<number>;
  type_name: string;
  created_at: ColumnType<Date, string | undefined | Date, never>;
}
export type JobType = Selectable<JobTypeTable>;

export interface UserProfileTable {
  id: Generated<number>;
  user_profile_desc: string;
  user_profile_experience: number;
  user_id: number;
  job_profile_id: number;
  created_at: ColumnType<Date, string | undefined | Date, never>;
}
export type UserProfile = Selectable<UserProfileTable>;
export type NewUserProfile = Insertable<UserProfileTable>;
export type UserProfileUpdate = Updateable<UserProfileTable>;

export interface UserTable {
  id: Generated<number>;
  user_name: string;
  user_email: string;
  user_phone: ColumnType<string, string | null, string>;
  selected_profile: number | null;
  created_at: ColumnType<Date, string | undefined | Date, never>;
}
export type User = Selectable<UserTable>;
export type NewUser = Insertable<UserTable>;
export type UserUpdate = Updateable<UserTable>;
