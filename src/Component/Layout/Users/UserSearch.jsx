import React, { useState, useContext } from "react";
import AlertContext from "../../../Context/github/Alert/AlertContext";
import { fetchUser } from "../../../Context/github/GithubActions";
import GithubContext from "../../../Context/github/GithubContext";

const UserSearch = () => {
  const [text, setText] = useState("");
  const {users, dispatch, clearSearch} = useContext(GithubContext);
  const {setAlert} = useContext(AlertContext);
   
  const handleChange = (e) => setText(e.target.value);
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (text === "") {
      setAlert("Please Enter Text","error");
    } else {
      dispatch({type:"SET_LOADING"})
      const users = await fetchUser(text);
      dispatch({type:"GET_USER",playLoad:users})

    }
  };
 const clearResult = ()=>{
 dispatch({type:"CLEAR_USER"})
  setText('')
 }
  return (

    <div className="grid grid-cols-1 md:grid-cols-2">
      <div>
        <form onSubmit={handleSubmit}>
          <div className="form-control">
            <div className="relative">
              <input
                type="text"
                className="w-full pr-40 bg-gray-200 input input-lg text-black"
                placeholder="Search"
                value={text}
                onChange={handleChange}
              />
              <button
                type="submit"
                className="absolute top-0 right-0 rounded-l-none w-36 btn btn-lg"
              >
                Go
              </button>
            </div>
          </div>
        </form>
      </div>
      {users.length > 0 && (
        <div>
          <button onClick={clearResult} className="btn btn-ghost btn-lg">Clear </button>
        </div>
      )}
    </div>
  );
};

export default UserSearch;
