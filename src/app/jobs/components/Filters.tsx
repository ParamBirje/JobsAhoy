import ExperienceFilter from "./JobsFilter/ExperienceFilter/Filter";
import JobTypeFilter from "./JobsFilter/JobTypeFilter/Filter";
import LocationFilter from "./JobsFilter/LocationFilter/Filter";
import VisaFilter from "./JobsFilter/VisaFilter/Filter";

export default function Filters({ locationsList }: { locationsList: LocationType[] }) {
  return (
    <div className="font-light text-sm flex justify-start items-center gap-3">
      <LocationFilter optionsList={locationsList} />
      <VisaFilter />
      <ExperienceFilter />
      <JobTypeFilter optionsList={[]} />

      <div className="flex justify-end grow">
        <button className="px-6 py-2 rounded-full duration-100 border border-primary-lightest hover:bg-primary-lightest tracking-wider flex items-center gap-3">
          <p>More Filters</p>
        </button>
      </div>
    </div>
  );
}
