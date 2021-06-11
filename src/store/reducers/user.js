import User from "../../model/User";

const userAdmin = new User("1", "ADMIN", "123456", "ROL_ADMIN", true);
const userCommon = new User("2", "COMMON", "654321", "ROL_COMMON", true);
const userCommon2 = new User("3", "COMMON2", "654321", "ROL_COMMON", true);
const userCommon3 = new User("4", "COMMON3", "654321", "ROL_COMMON", true);
const initialState = [userAdmin, userCommon, userCommon2, userCommon3];
/**
 *
 * @param {*} state
 * @param {*} action
 * @returns
 */
export default function user(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    default:
      return state;
  }
}
