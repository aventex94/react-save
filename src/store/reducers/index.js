import { combineReducers } from "redux";
import { persistReducer } from 'redux-persist';
import auth from "./auth";
import temperature from "./temperature"
import storage from 'redux-persist/lib/storage';
import user from './user';
import meet from './meet';
const persistConfig = {
  key: 'root',
  storage,
  witheList:[
      'user',
      'temperature',
      'meet',
      'auth',
  ]
}
const rootReducer = combineReducers({
  auth,
  temperature,
  user,
  meet,
});

export default persistReducer(persistConfig,rootReducer)
