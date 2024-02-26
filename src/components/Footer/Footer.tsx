import Link from "next/link";
import React from "react";
import NavLink from "./NavLink";

export default function Footer() {
  return (
    <footer className="bg-primary-dark py-10">
      <div className="max-w-7xl mx-auto px-5 flex flex-col gap-20">
        <div className="flex justify-between gap-5">
          <div className="flex flex-col gap-5">
            <Link href="/">
              <h3 className="font-bold text-2xl uppercase">
                Jobs<span className="">Ahoy</span>
              </h3>
            </Link>
            <p className="text-sm text-secondary-dark w-2/3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum,
              eum.
            </p>
          </div>

          <div className="flex flex-col gap-2">
            <NavLink href="/jobs">Visa Sponsored Jobs</NavLink>
            <NavLink href="/jobs">Blog</NavLink>
          </div>

          <div className="flex flex-col gap-2">
            <NavLink href="/user/login">Sign In</NavLink>
            <NavLink href="/user/create-account">Create Account</NavLink>
          </div>

          <div className="flex flex-col gap-2 text-accent-light">
            <NavLink href="/user/login">Privacy Policy</NavLink>
            <NavLink href="/user/create-account">Terms and Conditions</NavLink>
          </div>
        </div>

        <div className="flex justify-between items-center text-secondary-dark text-sm">
          <p>
            Made With 🤍 By{" "}
            <Link
              href="https://parameater.co"
              target="_blank"
              className="hover:underline"
            >
              Param Birje
            </Link>
          </p>
          <p>Copyright Ⓒ JobsAhoy 2024</p>
        </div>
      </div>
    </footer>
  );
}
