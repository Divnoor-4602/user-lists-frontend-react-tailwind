import React, { useState, useCallback, useEffect } from "react";
import UserCard from "./UserCard.jsx";
import UserDetails from "./UserDetails.jsx";
import SkeletonCard from "./SkeletonCard.jsx";
import axios from "axios";

export default function Userlist() {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState();
  const [selectedUser, setSelectedUser] = useState({
    avatar: "",
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    jobTitle: "",
    bio: "",
  });

  useEffect(() => {
    setIsLoading(true);
    console.log("load started");
    axios
      .get("https://602e7c2c4410730017c50b9d.mockapi.io/users")
      .then((response) => {
        setUsers(response.data);
        setIsLoading(false);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      {/* global container */}
      <div className="min-h-screen bg-slate-800 grid grid-cols-3">
        {/* user list container */}
        <div className="col-span-2 mt-8">
          <div className="font-bold text-3xl text-white text-center">Users</div>

          <div className="min-h-screen grid grid-cols-2 gap-4 p-8">
            {isLoading &&
              users.length == 0 &&
              Array(20)
                .fill(0)
                .map((card) => {
                  console.log("loading");
                  return (
                    <>
                      <SkeletonCard />
                    </>
                  );
                })}
            {!isLoading && users.length != 0 && (
              <>
                {users.slice(10, users.length).map((user) => {
                  return (
                    <>
                      <UserCard
                        username={user.profile.username}
                        email={user.profile.email}
                        jobTitle={user.jobTitle}
                        avatar={user.avatar}
                        key={user.id}
                      />
                    </>
                  );
                })}
              </>
            )}
          </div>
        </div>
        <UserDetails />
      </div>
    </>
  );
}
