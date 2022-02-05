import React, { useReducer, createContext } from "react";
import GithubReducer from "./GithubReducer";
const GithubContext = createContext();

export const GithubProvider = ({ children }) => {
  const initialState = {
    user: [],
    loading: true,
  };
  const [state, dispatch] = useReducer(GithubReducer, initialState);
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
    dispatch({
      type: "GET_USER",
      playLoad: data,
    });
  };
  return (
    <GithubContext.Provider
      value={{
        user:state.user,
        loading:state.loading,
        fetchUser,
      }}
    >
      {children}
    </GithubContext.Provider>
  );
};

export default GithubContext;
