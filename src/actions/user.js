import { SET_LOGIN } from "./types";

export const setLogin = (username, password) => ({
  type: SET_LOGIN,
  payload: { username, password },
});
