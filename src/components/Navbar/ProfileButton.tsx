"use client";

import { signOut } from "next-auth/react";
import React from "react";
import Image from "next/image";

export default function ProfileButton({ user }: { user: any }) {
  function handleClick() {
    signOut({
      callbackUrl: "/user/logged-out",
    });
  }

  const tempImage =
    "https://toppng.com//public/uploads/preview/circled-user-icon-user-pro-icon-11553397069rpnu1bqqup.png";

  return (
    <button onClick={handleClick} className="font-medium flex items-center gap-3">
      <Image
        className="rounded-full"
        src={user.image || ""}
        width={24}
        height={24}
        alt={"profile_pic"}
      />
      <p>{user.name}</p>
    </button>
  );
}
