"use client";
import Link from "next/link";
import ProfileButton from "./ProfileButton";
import { User } from "@/lib/Icons";
import Links from "./Links";
import { useSession } from "next-auth/react";

export default function Navbar() {
  const { data: session } = useSession();

  return (
    <nav className="z-[5] sticky top-0 backdrop-blur-md bg-primary bg-opacity-0 border- border-primary-lightest border-opacity-60">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-5 py-4">
        {/* LOGO */}

        <div className="min-w-[20%]">
          <Link href="/">
            <h3 className="font-bold text-2xl uppercase">JobsAhoy</h3>
          </Link>
        </div>

        {/* Middle Nav */}
        <Links />

        {/* Side Nav */}
        <div className="min-w-[20%] flex justify-end items-center">
          {session ? (
            <ProfileButton user={session.user} />
          ) : (
            <Link href={"/user/login"} className="flex items-center gap-5">
              <User size={20} />
              <p className="font-medium">Sign In</p>
            </Link>
          )}
        </div>
      </div>

      <div className="h-[1px] w-full mx-auto bg-gradient-to-r from-transparent from-5% via-primary-lightest to-transparent to-95%" />
    </nav>
  );
}
