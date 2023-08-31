"use client";

import { useState } from "react";
import SideMenu from "./SideMenu";
import UserView from "./views/UserView";
import ViewRenderer from "./views/ViewRenderer";

export default function MainSection({ views }: { views: React.JSX.Element[] }) {
  const [currentView, setCurrentView] = useState<React.JSX.Element>(<UserView />); // default view

  return (
    <div className="flex gap-10 min-h-full">
      <SideMenu views={views} setView={setCurrentView} />

      <div className="w-full">
        <ViewRenderer>{currentView}</ViewRenderer>
      </div>
    </div>
  );
}
