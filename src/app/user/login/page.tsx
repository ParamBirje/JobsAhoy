import SignInForm from "./_components/Form";
import SocialLoginButtons from "./_components/SocialLoginButtons";
import getServerSideSession from "@/lib/auth/ServerSession";
import { redirect } from "next/navigation";

export default async function SignIn() {
  const session = await getServerSideSession();
  if (session?.user) {
    redirect("/");
  }

  return (
    <main className="max-w-7xl mx-auto px-5 flex items-center justify-center min-h-[80vh]">
      <div className="w-[80%]">
        <div className="mx-auto text-center w-3/4 mb-[4rem]">
          <h1 className="text-[38px] font-extrabold mb-1">
            Login / Create Account
          </h1>
          <p className="text-sm text-secondary-dark w-[60%] mx-auto tracking-wide">
            Millions of people have already joined and are searching actively
            for jobs abroad, cut the wait!
          </p>
        </div>

        <div className="flex justify-between items-start gap-[5rem] w-[85%] mx-auto">
          <div className="h-full w-full self-center flex flex-col gap-6">
            <div className="w-full my-1 h-full">
              <div className="duration-100 flex items-center justify-center gap-2 text-seconday border border-green-400 text-green-400 font-medium tracking-wide py-3 px-4 rounded">
                <p>Testing Area</p>
              </div>
            </div>

            <SignInForm />
          </div>

          <p className="self-center">/</p>

          <SocialLoginButtons />
        </div>
      </div>
    </main>
  );
}
