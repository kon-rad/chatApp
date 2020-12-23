import currentUser from "./currentUser";
import rooms from "./rooms";
import { combineReducers } from "redux";

//Combine all the sub reducers
const rootReducer = combineReducers({
  currentUser: currentUser,
  rooms: rooms,
});

export default rootReducer;
