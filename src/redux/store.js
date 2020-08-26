import { createStore } from "redux";
import searchRobotsReducer from "./SearchField/reducers";

export const store = createStore(searchRobotsReducer);
