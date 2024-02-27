"use client";
import { signInValidationSchema } from "./utils/AuthSchema";
import { ArrowRight } from "@/lib/Icons";
import { useFormik } from "formik";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function SignInForm() {
  const router = useRouter();
  const [errorMsg, setErrorMsg] = useState<string>("");

  async function handleSubmit(values: any) {
    const result = await signIn("credentials", {
      email: values.email,
      redirect: false,
    });

    if (result && !result.error) {
      router.refresh();
      router.push("/");
    } else {
      setErrorMsg("Error: Login Failed");
      console.error(result?.error);
    }
  }

  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: signInValidationSchema,
    onSubmit: handleSubmit,
  });

  return (
    <form onSubmit={formik.handleSubmit} className="flex flex-col gap-2">
      <input
        className="outline-none bg-primary-light py-3 px-4 w-full rounded"
        placeholder="Email"
        type="email"
        required
        id="email"
        {...formik.getFieldProps("email")}
      />

      <button
        className="tracking-wide duration-100 flex items-center justify-between gap-2 hover:bg-accent-light bg-accent text-white font-semibold py-3 px-4 rounded"
        type="submit"
      >
        <p>Login</p>
        <ArrowRight size={25} />
      </button>

      <p className="text-red-400 text-center">{errorMsg}</p>
    </form>
  );
}
