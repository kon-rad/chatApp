import currentUser from "./currentUser";
import rooms from "./rooms";
import roomsDetail from "./roomsDetail";
import { combineReducers } from "redux";

//Combine all the sub reducers
const rootReducer = combineReducers({
  currentUser,
  roomsDetail,
  rooms,
});

export default rootReducer;
