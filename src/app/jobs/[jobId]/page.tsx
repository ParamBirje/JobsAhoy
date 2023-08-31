import React from "react";

export default function JobPostingPage({ params }: { params: { jobId: string } }) {
  return (
    <main className="max-w-7xl mx-auto px-5">
      <div>Title</div>

      <div className="flex justify-between items-start">
        <div className="w-full">Description</div>
        <div className="w-1/3">Sidebar</div>
      </div>
    </main>
  );
}
