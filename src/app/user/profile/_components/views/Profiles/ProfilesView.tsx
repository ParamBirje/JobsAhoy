import React from "react";
import Item from "./Item";
import getServerSideSession from "@/lib/auth/ServerSession";
import { Plus } from "@/lib/Icons";
import Tooltip from "@/components/Tooltip";

export default async function ProfilesView() {
  // this runs as a server component
  const session = await getServerSideSession();

  // TODO: Add try catch, fallback value
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_NEXTAUTH_URL}/api/user/profiles?id=${session?.user.id}`
  );

  const result = await response.json();

  return (
    <div className="grid grid-cols-2 gap-3">
      {result.profilesList.map((profile: IProfile) => {
        return <Item key={profile.id} profile={profile} />;
      })}

      <button className="bg-primary-lighter bg-opacity-30 rounded-md px-6 py-4 w-full flex items-center justify-center gap-5 hover:bg-opacity-50 duration-100">
        {/* Icon */}
        <Tooltip text="Add a profile">
          <Plus className="text-primary-lighter" size={75} />
        </Tooltip>

        {/* <p>Add</p> */}
      </button>
    </div>
  );
}
