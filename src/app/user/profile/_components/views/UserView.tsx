"use client";
import { useSession } from "next-auth/react";
import React from "react";

export default function UserView() {
  const { data: session } = useSession();
  return (
    <div className="h-full flex flex-col justify-between">
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-3">
          <label>Name</label>
          <input
            className="w-full outline-none bg-opacity-30 bg-primary-lighter py-3 px-4 rounded text-secondary-dark"
            type="text"
            defaultValue={session?.user.name ?? ""}
            disabled
          />
        </div>

        <div className="flex flex-col gap-3">
          <label>Email</label>
          <input
            className="w-full outline-none bg-opacity-30 bg-primary-lighter py-3 px-4 rounded text-secondary-dark"
            type="text"
            defaultValue={session?.user.email ?? ""}
            disabled
          />
        </div>
      </div>

      {/* <div className="flex justify-end items-center">
        <button className="duration-100 flex items-center gap-3 px-6 py-2 bg-accent hover:bg-accent-light rounded-full">
          Apply
        </button>
      </div> */}
    </div>
  );
}
