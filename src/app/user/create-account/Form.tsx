"use client"
import { ArrowRight } from "@/lib/Icons";
import { FormEvent } from "react";

export default function SignUpForm() {

    async function handleSubmit(e: FormEvent){
      e.preventDefault();
      console.log("Form submitted.");
    }

    return (
      <form onSubmit={handleSubmit} className="flex flex-col gap-1">
        <input
          className="outline-none bg-primary-light py-3 px-4 w-full rounded"
          placeholder="Full Name"
          type="text"
          required
        />

        <input
          className="outline-none bg-primary-light py-3 px-4 w-full rounded"
          placeholder="Email"
          type="email"
          required
        />

        <input
          className="outline-none bg-primary-light py-3 px-4 w-full rounded"
          placeholder="Password"
          type="password"
          required
        />

        <button
          className="tracking-wide duration-100 flex items-center justify-between gap-2 hover:bg-accentOrange bg-accentOrange-dark text-white font-semibold py-3 px-4 rounded"
          type="submit"
        >
          <p>Aboard</p>
          <ArrowRight size={20} />
        </button>
      </form>
    );
}