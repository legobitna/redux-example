import { createStore } from "redux";
import rootReducer from "./reducer";

const initalState = {};
let store = createStore(rootReducer);
export default store;
