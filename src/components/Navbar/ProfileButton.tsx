"use client";

import Image from "next/image";
import Link from "next/link";

export default function ProfileButton({ user }: { user: any }) {
  return (
    <Link href="/user/profile" className="font-medium flex items-center gap-3">
      <Image
        className="rounded-full"
        src={user.image || ""}
        width={24}
        height={24}
        alt={"profile_pic"}
      />
      <p>{user.name}</p>
    </Link>
  );
}
