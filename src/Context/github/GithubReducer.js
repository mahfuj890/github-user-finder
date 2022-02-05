import React from "react";
import PropTypes from "prop-types";

const GithubReducer = (state, action) => {
  switch (action.type) {
    case "GET_USER":
      return {
        ...state,
        user: action.playLoad,
        loading: false,
      };

    default:
      return state;
      break;
  }
};

GithubReducer.propTypes = {};

export default GithubReducer;
