import { combineReducers } from "redux";
import product from "./product";
import user from "./user";
import temperature from "./temperature"
const rootReducer = combineReducers({
  product,
  user,
  temperature
});

export default rootReducer;
