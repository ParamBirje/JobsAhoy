import React from "react";

export default function SideMenuButton({
  children,
  onClick,
  className,
}: SideMenuButtonProps) {
  return (
    <button
      onClick={onClick}
      className={
        "py-4 px-6 hover:bg-primary-lightest w-full flex items-center justify-start gap-5 " +
        className
      }
    >
      {children}
    </button>
  );
}

type SideMenuButtonProps = {
  children: React.ReactNode;
  onClick: () => void;

  // For additional styles
  className?: string;
};
