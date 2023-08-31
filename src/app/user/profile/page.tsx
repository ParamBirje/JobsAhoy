import getServerSideSession from "@/lib/auth/ServerSession";
import { redirect } from "next/navigation";
import MainSection from "./components/MainSection";
import UserView from "./components/views/UserView";
import ProfilesView from "./components/views/Profiles/ProfilesView";
import SavedJobsView from "./components/views/SavedJobs/SavedJobsView";
import AppliedJobsView from "./components/views/AppliedJobs/AppliedJobsView";

export default async function ProfilePage() {
  const session = await getServerSideSession();
  if (!session) {
    redirect("/user/login");
  }

  const views = [<UserView />, <ProfilesView />, <SavedJobsView />, <AppliedJobsView />];

  return (
    <main className="max-w-7xl mx-auto px-5 h-[85vh] flex justify-center items-center">
      <div className="h-2/3 w-full flex flex-col gap-10">
        <h1 className="text-5xl font-bold capitalize">My Profile</h1>

        <MainSection views={views} />
      </div>
    </main>
  );
}
