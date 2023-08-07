import { MapPin } from "@/lib/Icons";

export default function GlassCard({css, children}: {css: string, children: React.ReactNode}) {
  return (
    <div className={`${css} border border-opacity-10 border-white px-5 py-4 bg-black bg-opacity-20 flex flex-col items-start backdrop-blur-sm rounded-[15px]`}>
      {children}
    </div>
  );
}
