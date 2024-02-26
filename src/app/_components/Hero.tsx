import Image from "next/image";

import {
  ArrowRight,
  Briefcase,
  CaretDown,
  MapPin,
  CheckFat,
} from "@/lib/Icons";
import GermanyCircle from "@/lib/images/hero/germany.png";
import USCircle from "@/lib/images/hero/unitedstates.png";
import DubaiCircle from "@/lib/images/hero/dubai.png";
import GlassCard from "@/components/Cards/GlassCard";

export default function Hero() {
  return (
    <section id="hero" className="max-w-7xl mx-auto px-5 relative mb-[23em]">
      {/* Actual Main Area */}
      <div className="z-[1] flex flex-col gap-5 w-full relative top-[11em] text-center">
        <div className="flex flex-col gap-3">
          <h1 className="text-6xl font-bold tracking-tight">
            Find Your Next
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accentOrange to-red-500">
              Job Abroad.
            </span>
          </h1>
          <p className="tracking-wide text-sm text-secondary-dark w-[35%] mx-auto">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
            eveniet voluptates assumendas.
          </p>
        </div>

        {/* Search Bar */}
        <div className="mt-10 w-full mx-auto flex items-center rounded-full bg-accentOrange">
          <div className="flex items-center w-full px-5">
            <Briefcase size={26} weight="fill" />
            <input
              placeholder="eg. Software Engineer"
              className="placeholder:text-slate-200 w-full py-3 px-5 bg-transparent outline-none"
              type="text"
            />
          </div>

          <div className="flex items-center w-[70%] px-5">
            <MapPin size={26} weight="fill" />
            <input
              placeholder="Location"
              className="placeholder:text-slate-200 w-full py-3 px-5 bg-transparent outline-none"
              type="text"
            />
            <CaretDown className="cursor-pointer" size={26} weight="fill" />
          </div>
          <button
            className="m-1 pl-6 flex group items-center gap-3 text-black bg-secondary font-bold rounded-full px-5 py-3"
            type="submit"
          >
            <p>Search</p>
            <ArrowRight
              className="duration-100 group-hover:translate-x-1"
              size={20}
            />
          </button>
        </div>
      </div>

      {/* Germany Card */}
      <div className="z-0 absolute top-10 right-[1em]">
        <Image
          src={GermanyCircle}
          height={GermanyCircle.height}
          width={GermanyCircle.width}
          alt={"germany_pic"}
        />
        <GlassCard css="pr-10 absolute top-[5rem] -right-[10rem] font-medium">
          <div className="flex items-center gap-5">
            <MapPin size={20} weight="fill" />
            <div className="flex flex-col">
              <p className="text-xl">Germany</p>
              <p className="text-[10px] tracking-widest">RESTAURANT MANAGER</p>
            </div>
          </div>
        </GlassCard>
      </div>

      {/* United States Card */}
      <div className="z-0 absolute top-[22rem] -left-[10em]">
        <Image
          src={USCircle}
          height={USCircle.height}
          width={USCircle.width}
          alt={"unitedstates_pic"}
        />
        <GlassCard css="pr-10 absolute top-[15rem] -right-[4rem] font-medium">
          <div className="flex items-center gap-5">
            <MapPin size={20} weight="fill" />
            <div className="flex flex-col">
              <p className="text-xl">United States</p>
              <p className="text-[10px] tracking-widest">SOFTWARE ENGINEER</p>
            </div>
          </div>
        </GlassCard>
      </div>

      {/* Dubai Card */}
      <div className="z-0 absolute top-[35rem] right-[-5em]">
        <Image
          src={DubaiCircle}
          height={DubaiCircle.height - 80}
          width={DubaiCircle.width - 80}
          alt={"dubai_pic"}
        />
        <GlassCard css="pr-6 absolute top-[4rem] -left-[12rem] font-medium">
          <div className="flex items-center gap-5">
            <CheckFat className="text-green-400" size={20} weight="fill" />
            <p className="text-md">Relocation Assistance</p>
          </div>
        </GlassCard>
      </div>

      {/* Visa Sponsored Card */}
      <div className="z-0 absolute top-[4rem] left-[6rem]">
        <GlassCard css="pr-8 font-medium">
          <div className="flex items-center gap-5">
            <CheckFat className="text-green-400" size={20} weight="fill" />
            <p className="text-sm">Visa Sponsored</p>
          </div>
        </GlassCard>
      </div>

      {/* Interview Prep Card */}
      {/* <div className="z-0 absolute top-[43rem] left-[28rem]">
        <GlassCard css="pr-8 font-medium">
          <div className="flex items-center gap-5">
            <CheckFat className="text-green-400" size={20} weight="fill" />
            <p className="text-[11px] tracking-wide">Interview Preparation</p>
          </div>
        </GlassCard>
      </div> */}
    </section>
  );
}
