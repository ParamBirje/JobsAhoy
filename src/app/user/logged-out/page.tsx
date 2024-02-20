import React from "react";
import Link from "next/link";
import getServerSideSession from "@/lib/auth/ServerSession";
import { redirect } from "next/navigation";

export default async function LoggedOutPage() {
  // If logged in, redirect to /jobs dashboard
  const session = await getServerSideSession();
  if (session?.user) {
    redirect("/jobs");
  }

  return (
    <main className="max-w-7xl mx-auto px-5 flex items-center justify-center min-h-[80vh]">
      <div className="w-[80%] flex flex-col gap-10">
        <div className="mx-auto text-center w-3/4 mb-[4rem]">
          <h1 className="text-[38px] font-extrabold mb-1">
            Successfully Logged Out.
          </h1>
          <p className="text-sm text-secondary-dark w-[60%] mx-auto tracking-wide">
            Sad to see you go :( We&apos;ll add more jobs under your profile
            till then. Hope to see you soon!
          </p>

          <Link href="/user/login">
            <button className="bg-accent rounded-full px-6 py-2 font-medium hover:bg-accent-light duration-100 mt-5">
              Sign In
            </button>
          </Link>
        </div>
      </div>
    </main>
  );
}
