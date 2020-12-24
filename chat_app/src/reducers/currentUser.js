import Login from "../pages/Login";

const LOGIN = "LOGIN";

export const loginUser = (username) => {
  return {
    type: LOGIN,
    payload: username,
  };
};

const initState = {
  name: "test 1",
  isLoggedIn: false,
};

const currentUser = (state = initState, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        name: action.payload,
        isLoggedIn: true,
      };
    default:
      return state;
  }
};

export default currentUser;
