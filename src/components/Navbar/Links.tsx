"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Links() {
  const pathname = usePathname();

  const links = [
    {
      name: "Home",
      url: "/",
    },
    {
      name: "Jobs",
      url: "/jobs",
    },
    {
      name: "Blog",
      url: "/blog",
    },
  ];

  return (
    <ul className="grow flex justify-center items-center gap-5 font-medium">
      {links.map((link, index) => {
        return (
          <li key={index}>
            <Link
              className={`${
                pathname == link.url && "text-accentOrange"
              } hover:text-accentOrange`}
              href={link.url}
            >
              {link.name}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
