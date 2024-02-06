import Link from "next/link";
import SignUpForm from "./_components/Form";
import SocialLoginButtons from "@/components/SocialLoginButtons";
import getServerSideSession from "@/lib/auth/ServerSession";
import { redirect } from "next/navigation";

export default async function CreateAccountPage() {
  const session = await getServerSideSession();
  if (session?.user) {
    redirect("/");
  }

  return (
    <main className="max-w-7xl mx-auto px-5 flex items-center justify-center min-h-[80vh]">
      <div className="w-[80%] flex flex-col gap-10">
        <div className="mx-auto text-center w-3/4 mb-[4rem]">
          <h1 className="text-[38px] font-extrabold mb-1">
            Create A New Account
          </h1>
          <p className="text-sm text-secondary-dark w-[60%] mx-auto tracking-wide">
            Millions of people have already joined and are searching actively
            for jobs abroad, cut the wait!
          </p>
        </div>

        <div className="flex justify-between items-start gap-[5rem] w-[85%] mx-auto">
          <div className="h-full w-full self-center">
            <SignUpForm />
          </div>

          <p className="self-center">/</p>

          <SocialLoginButtons />
        </div>

        <div className="flex justify-center">
          <Link
            href={"/user/login"}
            className="text-sm text-secondary-dark underline"
          >
            Already have an account?
          </Link>
        </div>
      </div>
    </main>
  );
}
