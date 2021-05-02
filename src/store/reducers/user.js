import User from "../../model/user";

const userAdmin = new User("1", "Admin", "123456", "ROL_ADMIN", true);
const userCommon = new User("2", "Common", "654321", "ROL_COMMON", true);
const initialState = [userAdmin, userCommon];

export default function user(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    default:
      return state;
  }
}
