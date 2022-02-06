import React, { useContext } from "react";
import GithubContext from "../../../Context/github/GithubContext";
import Spinner from "../Spinner";
import UserItem from "./UserItem";

const UserResults = () => {
  const { user, loading } = useContext(GithubContext);


  if (!loading) {
    return (
      <div className="grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 ">
        {user.map((user) => {
          return <UserItem key={user.id} user={user} />;
        })}
      </div>
    );
  } else {
    return <Spinner />;
  }
};

export default UserResults;
