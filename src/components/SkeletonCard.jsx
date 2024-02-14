import React from "react";

export default function SkeletonCard() {
  return (
    <>
      {/* card container */}
      <div className="bg-slate-700 flex rounded-xl p-6">
        {/* content container */}
        <div className="animate-pulse flex gap-8">
          {/* img */}
          <div className="rounded-xl bg-slate-600 h-32 w-32"></div>

          <div className="flex flex-col justify-center gap-4">
            {/* name */}
            <div className="h-4 w-36 bg-slate-600 rounded-xl"></div>
            {/* email */}
            <div className="h-4 w-60 bg-slate-600 rounded-xl"></div>
            {/* job title */}
            <div className="h-4 w-48 bg-slate-600 rounded-xl"></div>
          </div>
        </div>
      </div>
    </>
  );
}
