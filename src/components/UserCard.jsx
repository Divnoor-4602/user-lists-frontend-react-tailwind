import React from "react";

export default function UserCard({ username, jobTitle, email, avatar }) {
  return (
    <>
      {/* profile card */}
      <div className="p-6 bg-slate-700 rounded-xl flex gap-4 group">
        {/* profile avatar container */}
        <img
          src={avatar}
          alt="pfp"
          className="w-32 rounded-xl border-2 border-cyan-600 group-hover:scale-105 transition duration-300 group-hover:border-cyan-400"
        />
        {/* person details */}
        <div className="flex flex-col justify-center gap-4">
          <div className="flex flex-col">
            <span className="text-white font-bold">{username}</span>
            <span className=" text-white opacity-50 text-sm font-light">
              {email}
            </span>
          </div>
          {/* job badge */}
          <div className="bg-cyan-900 text-blue-300 rounded-xl w-max px-2 py-1 shadow-xl">
            {jobTitle}
          </div>
        </div>
      </div>
    </>
  );
}
