import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import driverReducer from "./reducer";
import { composeWithDevTools } from "redux-devtools-extension";

const store = createStore(
  driverReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
