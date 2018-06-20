import FETCH_ALL_DATA, { CHANGE_CELL } from "../actions/list";

export default (state = [], action) => {
  switch (action.type) {
    case CHANGE_CELL:
      return action.payload.reduce((databases, database) => {
        databases[database.id] = database;
        return databases;
      }, {});
    case "FETCH_ALL_DATA":
      return action.payload.reduce((databases, database) => {
        databases[database.id] = database;
        return databases;
      }, {});
    default:
      return state;
  }
};
