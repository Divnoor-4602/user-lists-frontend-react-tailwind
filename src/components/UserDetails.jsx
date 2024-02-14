import React from "react";

export default function UserDetails({ selectedUser, isSelected }) {
  console.log(isSelected);
  return (
    <>
      {isSelected ? (
        <>
          <div className="flex flex-col m-8 gap-8 text-white">
            <div className="font-bold text-3xl text-white text-center ">
              User Details
            </div>
            {/* card container */}
            <div className="bg-slate-700 rounded-xl flex flex-col items-center p-4 gap-4">
              {/* avatar */}
              <img
                src={selectedUser.avatar}
                alt="avatar"
                className="rounded-full w-32 border-2 border-cyan-600 hover:border-cyan-300 transition duration-300"
              />
              {/* personal details */}
              <div className="flex flex-col items-center">
                <div className="text-xl font-semibold">
                  {selectedUser.firstName} {selectedUser.lastName}
                </div>
                <div className="opacity-50 font-extralight text-sm">
                  {selectedUser.email}
                </div>
              </div>
              {/* job title */}
              <div className="bg-blue-900 text-cyan-300 p-2 rounded-lg">
                {selectedUser.jobTitle}
              </div>
              {/* bio */}
              <div className="text-center">✨{selectedUser.bio}✨</div>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="flex flex-col m-8 gap-8 text-white">
            <div className="font-bold text-3xl text-white text-center ">
              Select a user to view details
            </div>
            {/* card container */}
            <div className="bg-slate-700 rounded-xl flex flex-col items-center p-8 gap-4 animate-pulse">
              {/* avatar */}
              <div className="w-32 h-32 rounded-full bg-slate-600"></div>
              {/* personal details */}
              <div className="flex flex-col items-center gap-4 w-full">
                <div className="w-1/2 h-6 bg-slate-600 rounded-xl"></div>
                <div className="w-5/6 h-6 bg-slate-600 rounded-xl"></div>
              </div>
              {/* job title */}
              <div className="bg-blue-900 w-3/4 h-6 rounded-full"></div>
              {/* bio */}
              <div className="w-5/6 h-6 bg-slate-600 rounded-xl"></div>
            </div>
          </div>
        </>
      )}
    </>
  );
}
