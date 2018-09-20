import { combineReducers } from "redux";

const layout = (state = [], action) => {
  switch (action.type) {
    case "SET_LAYOUT": {
      return action.payload;
    }
    default: {
      return state;
    }
  }
};

const rootReducer = combineReducers({
  layout
});

export default rootReducer;
