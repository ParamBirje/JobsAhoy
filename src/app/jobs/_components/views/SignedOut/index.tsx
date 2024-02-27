import Link from "next/link";
import generateDummyJobs from "../../utils/SignedOutPageHelpers";
import GuestJobSection from "./GuestJobSection";

export default function SignedOutPage() {
  const dummyJobs: JobDetailsType[] = generateDummyJobs();

  return (
    <main className="max-w-7xl mx-auto px-5 py-5 h-[80vh]">
      <div className="flex flex-col gap-10 h-full">
        <div className="flex justify-between items-center gap-4 bg-primary-lighter rounded-md px-6 py-4">
          <div className="flex flex-col gap-3">
            <h2 className="text-2xl font-medium">
              Access all the jobs specific to your role.
            </h2>
            <p className="w-2/3 text-secondary opacity-90 tracking-wide text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Reiciendis molestias molestiae excepturi rerum? Velit error quidem
              qui minima et distinctio?
            </p>
          </div>

          <div className="w-1/3 flex flex-col items-center gap-3">
            <Link href="/user/login">
              <button className="bg-accent rounded-full px-6 py-2 font-medium hover:bg-accent-light duration-100 mt-1">
                Create A Free Account
              </button>
            </Link>
            <Link className="text-sm" href="/user/login">
              Have an account? Sign in.
            </Link>
          </div>
        </div>

        {/* Dummy Job Section */}
        <GuestJobSection jobsList={dummyJobs} />
      </div>
    </main>
  );
}
