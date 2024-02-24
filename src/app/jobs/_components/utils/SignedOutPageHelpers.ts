const locations: string[] = [
  "New York, USA",
  "Sydney, Australia",
  "Berlin, Germany",
  "Amsterdam, Netherlands",
  "Dubai",
];

const jobTitles: string[] = [
  "Devops Engineer",
  "QA Manager",
  "Software Engineer",
  "Cyber Security Specialist",
  "Network Administrator",
];

const companies: string[] = ["Adobe", "HomeToGo", "Miro", "Amazon", "Siemens"];
const jobTypes: string[] = ["Onsite", "Hybrid"];

function generateDummyJobs(): JobDetailsType[] {
  let dummyJobs: JobDetailsType[] = [];

  jobTitles.forEach((title, index) => {
    const exp_min = getRandomIndex(5);
    let dummyJob: JobDetailsType = {
      id: Math.round(Math.random() * 100),
      job_title: title,
      job_company: companies[index],
      job_location: [locations[getRandomIndex(locations.length - 1)]],
      job_desc: "Sign in to view the job description.",
      job_experience_min: exp_min,
      job_experience_max: exp_min + 1 + getRandomIndex(2),
      job_link: "#",
      job_sponsored: true,
      job_type: jobTypes[getRandomIndex(jobTypes.length - 1)],
    };
    dummyJobs.push(dummyJob);
  });

  return dummyJobs;
}

function getRandomIndex(max: number): number {
  // Returns a positive integer from 0 to `max` param
  return Math.abs(Math.round(Math.random() * max));
}

export default generateDummyJobs;
