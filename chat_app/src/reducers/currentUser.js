import Login from "../pages/Login";

const LOGIN = "LOGIN";

export const loginUser = (username) => {
  return {
    type: LOGIN,
    payload: username,
  };
};

const initState = {
  // todo reset after dev complete
  username: "test 1",
  isLoggedIn: true,
};

const currentUser = (state = initState, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        username: action.payload,
        isLoggedIn: true,
      };
    default:
      return state;
  }
};

export default currentUser;
