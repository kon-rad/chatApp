import Login from "../pages/Login";

const LOGIN = "LOGIN";

export const loginUser = (username) => {
  const startTime = new Date();
  return {
    type: LOGIN,
    payload: { username, startTime },
  };
};

const initState = {
  // todo reset after dev complete
  username: "test 1",
  isLoggedIn: true,
  startTime: new Date(),
};

const currentUser = (state = initState, { type, payload }) => {
  switch (type) {
    case LOGIN:
      return {
        ...state,
        username: payload.username,
        startTime: payload.startTime,
        isLoggedIn: true,
      };
    default:
      return state;
  }
};

export default currentUser;
