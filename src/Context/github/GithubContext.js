import React, { useState, createContext } from "react";
import PropTypes from "prop-types";
const GithubContext = createContext();

export const GithubProvider = ({ children }) => {
  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState(true);

  const GITHUB_URL = process.env.REACT_APP_GITHUB_URL;
  const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;

  const fetchUser = async () => {
    const responce = await fetch(`${GITHUB_URL}/users`, {
      headers: {
        Authorization: `${GITHUB_TOKEN}`,
      },
    });
    const data = await responce.json();
    console.log(data);
    setUser(data);
    setLoading(false);
  };
  return (
    <GithubContext.Provider
      value={{
        user,
        loading,
        fetchUser,
      }}
    >
      {children}
    </GithubContext.Provider>
  );
};

GithubContext.propTypes = {};

export default GithubContext;
