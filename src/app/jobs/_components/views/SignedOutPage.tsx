import { ArrowRight, Briefcase, CaretDown, Heart, MapPin } from "@/lib/Icons";
import JobCard from "../JobCard";

export default function SignedOutPage() {
  return (
    <main className="max-w-7xl mx-auto px-5 h-[85vh]">
      <div className="flex flex-col gap-10 h-full">
        <div className="flex flex-col gap-3 my-1">
          {/* Search Bar */}
          <div className="flex items-stretch gap-3">
            {/* Search Bar */}
            <div className="w-full flex items-center rounded-lg bg-primary-lightest">
              <div className="flex items-center w-full px-5">
                <Briefcase size={26} weight="fill" />
                <input
                  placeholder="eg. Software Engineer"
                  className="placeholder:text-slate-200 placeholder:opacity-70 w-full py-3 px-5 bg-transparent outline-none"
                  type="text"
                />
              </div>

              <div className="flex items-center w-[91%] px-5">
                <MapPin size={26} weight="fill" />
                <input
                  placeholder="Location"
                  className="placeholder:text-slate-200 placeholder:opacity-70 w-full py-3 px-5 bg-transparent outline-none"
                  type="text"
                />
                <CaretDown className="cursor-pointer" size={26} weight="fill" />
              </div>
            </div>
            <button className="px-7 py-3 bg-accent rounded-md tracking-wide font-medium hover:bg-accent-light">
              Search
            </button>
          </div>

          {/* Filters */}
          <div className="font-light text-sm flex items-center gap-3">
            <button className="bg-primary-lightest px-6 py-2 rounded-full duration-100 border border-transparent hover:bg-primary-light hover:border-secondary tracking-wider flex items-center gap-3">
              <p>Experience Level</p>
              <CaretDown size={20} />
            </button>
            <button className="bg-primary-lightest px-6 py-2 rounded-full duration-100 border border-transparent hover:bg-primary-light hover:border-secondary tracking-wider">
              Job Type
            </button>
          </div>
        </div>

        <div className="flex gap-3">
          {/* Jobs List */}
          <ul className="w-1/3 h-[76vh] overflow-y-auto flex flex-col gap-3">
            {/* JOB CARD HERE */}
          </ul>

          {/* Job Details INFO here */}
        </div>
      </div>
    </main>
  );
}
