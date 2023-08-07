export default function Tooltip({ children, text }: { children: React.ReactNode; text: string }) {
  return (
    <div className="relative group/tooltip">
      {children}
      <div
        data-tooltip="tooltip"
        className="absolute bottom-full left-1/2 z-20 mb-3 -translate-x-1/2 whitespace-nowrap rounded-md bg-black py-[6px] px-4 text-sm font-semibold text-white opacity-0 group-hover/tooltip:opacity-100 duration-100"
      >
        {text}
      </div>
    </div>
  );
}
