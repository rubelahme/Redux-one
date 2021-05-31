import { combineReducers, createStore } from "redux";
import addReducer from "./Reducer/Reducer";
import { composeWithDevTools } from "redux-devtools-extension";

const rootReducer = combineReducers({
  list: addReducer,
});
export const store = createStore(rootReducer, composeWithDevTools());
