"use client"

import FacebookIcon from '@/lib/images/facebook_icon.png'
import GoogleIcon from '@/lib/images/google_icon.png'
import LinkedInIcon from '@/lib/images/linkedin_icon.png'
import InstagramIcon from '@/lib/images/instagram_icon.png'
import Image from "next/image";
import { signIn } from 'next-auth/react'

export default function SocialLoginButtons() {

  const icon_size = 23

  async function handleGoogleSignIn() {
    signIn("google", {
      callbackUrl: "/jobs"
    })
  }

  return (
    <div className="flex flex-col gap-1 w-full font-medium">
      <button onClick={handleGoogleSignIn} className="w-full duration-100 flex items-center justify-start gap-5 bg-transparent hover:bg-accent border border-accent py-3 px-4 rounded tracking-wide">
        <Image
          height={icon_size}
          width={icon_size}
          src={GoogleIcon}
          alt={"google_icon"}
        />
        <p>Using Google</p>
      </button>

      <button className="w-full duration-100 flex items-center justify-start gap-5 bg-transparent hover:bg-accent border border-accent py-3 px-4 rounded tracking-wide">
        <Image
          height={icon_size}
          width={icon_size}
          src={LinkedInIcon}
          alt={"linkedin_icon"}
        />
        <p>Using LinkedIn</p>
      </button>

      <button className="w-full duration-100 flex items-center justify-start gap-5 bg-transparent hover:bg-accent border border-accent py-3 px-4 rounded tracking-wide">
        <Image
          height={icon_size}
          width={icon_size}
          src={FacebookIcon}
          alt={"facebook_icon"}
        />
        <p>Using Facebook</p>
      </button>

      <button className="w-full duration-100 flex items-center justify-start gap-5 bg-transparent hover:bg-accent border border-accent py-3 px-4 rounded tracking-wide">
        <Image
          height={icon_size}
          width={icon_size}
          src={InstagramIcon}
          alt={"instagram_icon"}
        />
        <p>Using Instagram</p>
      </button>
    </div>
  );
}
