import React, { useReducer, createContext } from "react";
import GithubReducer from "./GithubReducer";
const GithubContext = createContext();

export const GithubProvider = ({ children }) => {
  const initialState = {
    users: [],
    user: {},
    loading: false,
  };
  const [state, dispatch] = useReducer(GithubReducer, initialState);
  const GITHUB_URL = process.env.REACT_APP_GITHUB_URL;
  const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;
  //Get User
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
  //Get Single User
  const getUser = async (login) => {
    setLoading();

    const responce = await fetch(`${GITHUB_URL}/users/${login}`, {
      headers: {
        Authorization: `${GITHUB_TOKEN}`,
      },
    });
    if (responce.status === 400) {
      window.location = "/notfound";
    } else {
      const data = await responce.json();
      dispatch({
        type: "GET_USERSINGLE",
        playLoad: data,
      });
    }
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
        users: state.users,
        loading: state.loading,
        user: state.user,
        fetchUser,
        clearSearch,
        getUser,
      }}
    >
      {children}
    </GithubContext.Provider>
  );
};

export default GithubContext;
