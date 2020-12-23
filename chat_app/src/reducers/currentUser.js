import Login from "../pages/Login";

const LOGIN = "LOGIN";

export const loginUser = (username) => {
  return {
    type: LOGIN,
    payload: username,
  };
};

const initState = {
  name: "",
};

const currentUser = (state = initState, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        name: action.payload,
      };
    default:
      return state;
  }
};

export default currentUser;
