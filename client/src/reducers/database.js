import { UPDATE_DATA } from "../actions/list";

const data = [];

export default function(state = data, action) {
  switch (action.type) {
    case UPDATE_DATA:
      if (action.payload.id === state.id) {
        return action.payload;
      } else return state;

    default:
      return state;
  }
}
