import getServerSideSession from "@/lib/auth/ServerSession";
import { redirect } from "next/navigation";
import SignedInPage from "./_components/views/SignedIn";
import SignedOutPage from "./_components/views/SignedOut";

export default async function JobsPage({
  searchParams,
}: {
  searchParams: JobsPageSearchParams;
}) {
  const session = await getServerSideSession();

  if (session) {
    // try {
    const result = await fetch(
      `${process.env.NEXT_PUBLIC_NEXTAUTH_URL}/api/user/check-profile?id=${session.user?.id}`,
      {
        cache: "reload",
        // next: {
        //   revalidate: 0,
        // },
      }
    );

    const body = await result.json();
    if (body.callbackUrl) {
      redirect(body.callbackUrl);
    }
  }

  if (session) {
    return (
      <SignedInPage
        searchParams={searchParams}
        page={searchParams.page ? Number(searchParams.page) : 1}
      />
    );
  } else {
    return <SignedOutPage />;
  }
}
