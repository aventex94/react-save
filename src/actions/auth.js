import { LOG_OUT, SET_USER } from "./types";
/**
 * 
 * @param {*} user 
 * @returns 
 */
export const setUser = (user) => ({
  type: SET_USER,
  payload: { user },
});
/**
 * 
 * @param {*} isAuthenticated 
 * @returns 
 */
export const logOut = (isAuthenticated) =>({
  type: LOG_OUT,
  payload: {isAuthenticated},
})