import React, { useReducer, createContext } from "react";
import GithubReducer from "./GithubReducer";
const GithubContext = createContext();

export const GithubProvider = ({ children }) => {
  const initialState = {
    user: [],
    loading: false,
  };
  const [state, dispatch] = useReducer(GithubReducer, initialState);
  const GITHUB_URL = process.env.REACT_APP_GITHUB_URL;
  const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;

  const fetchUser = async (text) => {
    setLoading();
    const param = new URLSearchParams({
      q: text,
    });
    const responce = await fetch(`${GITHUB_URL}/search/users?${param}`, {
      headers: {
        Authorization: `${GITHUB_TOKEN}`,
      },
    });
    const { items } = await responce.json();
    console.log(items);
    dispatch({
      type: "GET_USER",
      playLoad: items,
    });
  };
  //Loading Clear
  const setLoading = () =>
    dispatch({
      type: "SET_LOADING",
    });
  //Clear Search Result
  const clearSearch = () => {
    return dispatch({ type: "CLEAR_USER" });
  };
  return (
    <GithubContext.Provider
      value={{
        user: state.user,
        loading: state.loading,
        fetchUser,
        clearSearch,
      }}
    >
      {children}
    </GithubContext.Provider>
  );
};

export default GithubContext;
