const GithubReducer = (state, action) => {
  switch (action.type) {
    case "GET_USER":
      return {
        ...state,
        users: action.playLoad,
        loading: false,
      };
    case "GET_USERSINGLE":
      return {
        ...state,
        user: action.playLoad,
        loading: false,
      };
    case "SET_LOADING":
      return {
        ...state,
        loading: true,
      };
    case "CLEAR_USER":
      return {
        ...state,
        users: [],
      };

    default:
      return state;
  }
};

export default GithubReducer;
