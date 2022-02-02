import React, { useState,useEffect } from "react";
import PropTypes from "prop-types";

const UserResults = () => {
    const [user, setUser] = useState([]);
    const [loading, setLoading] = useState(true);
v
  useEffect(() => {
    fetchUser();
  }, []);
  const fetchUser = async () => {
    const responce = await fetch(`${process.env.REACT_APP_GITHUB_URL}/users`,{
        headers:{
            Authorization:`token ${process.env.REACT_APP_GITHUB_TOKEN}`
        }
    });
    const data = await responce.json();
    console.log(data);
    setLoading(false)
    setUser(data)


  };

  return <div>user</div>;
};

UserResults.propTypes = {};

export default UserResults;
