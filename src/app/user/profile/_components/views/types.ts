interface ISavedJobs {
  id: number | string;
  job_title: string;
  job_company: string;
  job_location: string[];
  saved_date: string;
}

interface IAppliedJobs {
  id: number | string;
  job_title: string;
  job_company: string;
  job_location: string[];
  applied_date: string;
}

interface IProfile {
  id: number | string;
  profile_name: string;
  user_profile_experience: number;
  user_profile_desc: string;
}
