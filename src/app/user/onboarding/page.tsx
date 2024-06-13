import getServerSideSession from "@/lib/auth/ServerSession";
import { redirect } from "next/navigation";
import MultistepForm from "./_components/MultistepForm";

export default async function OnboardingPage({
  searchParams,
}: {
  searchParams: { step: number };
}) {
  const session = await getServerSideSession();

  if (!session) {
    redirect("/user/login");
  }

  async function handleSubmit(formData: any) {
    "use server";

    // try {
    const result = await fetch(
      `${process.env.NEXT_PUBLIC_NEXTAUTH_URL}/api/user/onboarding`,
      {
        method: "POST",
        body: JSON.stringify({
          userID: session?.user?.id,
          userProfile: formData.userProfile,
          profileDesc: formData.profileDesc,
          userProfileExperience: formData.userProfileExperience,
        }),
      }
    );

    const body = await result.json();

    if (body.callbackUrl) {
      return body.callbackUrl;
    }

    return null;
  }

  return (
    <main className="max-w-7xl mx-auto px-5 h-[85vh] flex justify-center items-center">
      <div className="w-2/3 flex flex-col justify-evenly items-start bg-primary-lighter rounded-lg bg-opacity-40 py-10 px-10">
        <div className="flex flex-col gap-3 tracking-wide">
          <h1 className="text-5xl font-bold capitalize">
            Hi, {session?.user?.name} !
          </h1>
          <p className="text-sm text-secondary-dark w-2/3">
            Let us get to know you better so that we can provide you with the
            best suitable jobs.
          </p>
        </div>

        <div className="mt-[3rem] w-full h-full">
          <MultistepForm handleSubmit={handleSubmit} />
        </div>
      </div>
    </main>
  );
}
