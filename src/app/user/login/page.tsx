import Link from "next/link";
import SignInForm from "./Form";
import SocialLoginButtons from "@/components/SocialButtons";
import getServerSideSession from "@/lib/auth/ServerSession";
import { redirect } from "next/navigation";

export default async function SignIn() {
  const session = await getServerSideSession();
  if (session?.user) {
    redirect("/");
  }

  return (
    <main className="max-w-7xl mx-auto px-5 flex items-center justify-center min-h-[80vh]">
      <div className="w-[80%] flex flex-col gap-10">
        <div className="mx-auto text-center w-3/4 mb-[4rem]">
          <h1 className="text-[38px] font-extrabold mb-1">Login To Your Account</h1>
          <p className="text-sm text-secondary-dark w-[60%] mx-auto tracking-wide">
            Millions of people have already joined and are searching actively for jobs abroad, cut
            the wait!
          </p>
        </div>

        <div className="flex justify-between items-start gap-[5rem] w-[85%] mx-auto">
          <div className="h-full w-full self-center">
            <SignInForm />

            <div className="w-full my-1 h-full">
              <Link
                href="/user/create-account"
                className="duration-100 flex items-center justify-center gap-2 hover:bg-secondary text-seconday border border-secondary hover:text-primary font-medium tracking-wide py-3 px-4 rounded"
                type="button"
              >
                <p>Quickly Create An Account</p>
              </Link>
            </div>
          </div>

          <p className="self-center">/</p>

          <SocialLoginButtons />
        </div>

        <button className="text-sm text-secondary-dark underline">Forgot Password?</button>
      </div>
    </main>
  );
}
