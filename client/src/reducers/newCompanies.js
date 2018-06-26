import { NEW_COMPANIES } from "../actions/list";

export default (state = [], action) => {
  switch (action.type) {
    case NEW_COMPANIES:
      return action.payload;
    default:
      return state;
  }
};
