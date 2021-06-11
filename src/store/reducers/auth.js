import { SET_USER, LOG_OUT } from "../../actions/types";
import User from "../../model/User";
const objectUser = new User("", "", "", "", false);
const initialState = {
  objectUser,
};
/**
 *
 * @param {*} state
 * @param {*} action
 * @returns
 */
export default function auth(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case LOG_OUT:
      state.objectUser._isAuthenticated = payload.isAuthenticated;
      state.objectUser._username = "";
      state.objectUser._password = "";
      state.objectUser._rol = "";
      return { ...state };
    case SET_USER:
      return { ...state, objectUser: payload.user };

    default:
      return state;
  }
}
