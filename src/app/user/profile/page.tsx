import getServerSideSession from "@/lib/auth/ServerSession";
import { redirect } from "next/navigation";
import MainSection from "./_components/MainSection";
import UserView from "./_components/views/UserView";
import ProfilesView from "./_components/views/Profiles/ProfilesView";
import SavedJobsView from "./_components/views/SavedJobs/SavedJobsView";
import AppliedJobsView from "./_components/views/AppliedJobs/AppliedJobsView";

export default async function ProfilePage() {
  const session = await getServerSideSession();
  if (!session) {
    redirect("/user/login");
  }

  const views = [
    <UserView key={1} />,
    <ProfilesView key={2} />,
    <SavedJobsView key={3} />,
    <AppliedJobsView key={4} />,
  ];

  return (
    <main className="max-w-7xl mx-auto px-5 h-[85vh] flex justify-center items-center">
      <div className="h-2/3 w-full flex flex-col gap-10">
        <h1 className="text-5xl font-bold capitalize">My Profile</h1>

        <MainSection views={views} />
      </div>
    </main>
  );
}
