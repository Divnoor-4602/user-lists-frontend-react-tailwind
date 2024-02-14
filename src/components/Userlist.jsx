import React, { useState, useCallback, useEffect } from "react";
import UserCard from "./UserCard.jsx";
import UserDetails from "./UserDetails.jsx";
import SkeletonCard from "./SkeletonCard.jsx";
import axios from "axios";

export default function Userlist() {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState();
  const [isSelected, setIsSelected] = useState(false);
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
    axios
      .get("https://602e7c2c4410730017c50b9d.mockapi.io/users")
      .then((response) => {
        setUsers(response.data);
        setIsLoading(false);
      })
      .catch((error) => console.log(error));
  }, []);

  function handleUserSelect(selectedUserIndex) {
    const userDetailsToShow = users.filter(
      (user) => user.profile.username === selectedUserIndex
    )[0];
    console.log(userDetailsToShow);
    setSelectedUser((prevSelectedUser) => {
      return {
        ...prevSelectedUser,
        avatar: userDetailsToShow.avatar,
        firstName: userDetailsToShow.profile.firstName,
        lastName: userDetailsToShow.profile.lastName,
        username: userDetailsToShow.profile.username,
        email: userDetailsToShow.profile.email,
        jobTitle: userDetailsToShow.jobTitle,
        bio: userDetailsToShow.Bio,
      };
    });
  }

  function handleIsSelected() {
    setIsSelected(true);
  }

  return (
    <>
      {/* global container */}
      <div className="min-h-screen bg-slate-800 grid grid-cols-1 md:grid-cols-3">
        <UserDetails selectedUser={selectedUser} isSelected={isSelected} />
        {/* user list container */}
        <div className="col-span-2 mt-8">
          <div className="font-bold text-3xl text-white text-center">Users</div>

          <div className="min-h-screen grid gap-4 p-8 grid-cols-1 xl:grid-cols-2">
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
                        key={user["id"]}
                        index={user.profile.username}
                        onSelect={handleUserSelect}
                        isSelected={handleIsSelected}
                      />
                    </>
                  );
                })}
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
