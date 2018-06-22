import {FETCH_ALL_UPDATES} from "../actions/updates";

export default (state = [], action) => {
  switch (action.type) {
    case FETCH_ALL_UPDATES:
      return action.payload
    default:
      return state;
  }
};
