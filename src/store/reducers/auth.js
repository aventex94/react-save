import { SET_USER } from "../../actions/types";
import User from "../../model/user";

const objectUser = new User("", "", "", "", false);
const initialState = {
  objectUser,
};

export default function auth(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case SET_USER:
      return { ...state, objectUser: payload.user };

    default:
      return state;
  }
}
