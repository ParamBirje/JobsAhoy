import Link from "next/link";
import React from "react";

export default function NavLink({ href, children }: NavLinkProps) {
  return (
    <Link href={href} className="hover:underline underline-offset-2">
      {children}
    </Link>
  );
}

type NavLinkProps = {
  href: string;
  children: React.ReactNode;
};
