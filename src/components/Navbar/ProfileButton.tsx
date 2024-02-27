"use client";

import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function ProfileButton({ user }: { user: any }) {
  const router = useRouter();

  function handleClick() {
    router.push("/user/profile");
  }

  return (
    <button
      onClick={handleClick}
      className="font-medium flex items-center gap-3"
    >
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
