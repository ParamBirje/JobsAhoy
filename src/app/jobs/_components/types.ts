interface JobListType {
  id: number;
  job_title: string;
  job_company: string;
  job_location: string[];
  job_experience_min: number;
  job_experience_max: number;
  job_type: string;
  created_at: Date;
  saved_job_id: number | string | null;
}

interface JobDetailsType extends JobListType {
  job_desc: string;
  job_link: string;
  job_sponsored: boolean;
  job_selfapply_link: string | null;
}

interface UserProfileType {
  id: number;
  profile_name: string;
}

interface LocationType {
  id: number;
  location_name: string;
}

interface JobTypeType {
  id: number;
  type_name: string;
}

interface VisaStatusType {
  id: number;
  is_visa_sponsored: 0 | 1;
}
