import currentUser from "./currentUser";
import rooms from "./rooms";
import roomsDetail from "./roomsDetail";
import messages from "./messages";
import { combineReducers } from "redux";

// combine all the sub reducers
const rootReducer = combineReducers({
  currentUser,
  roomsDetail,
  rooms,
  messages,
});

export default rootReducer;
