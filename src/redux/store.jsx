import { createStore } from "redux";
import recipeReducer from "./reducers";

const store = createStore(recipeReducer);

export default store;
