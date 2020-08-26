import { combineReducers } from "redux";
import searchRobotsReducer from "./SearchField/reducers"

const rootReducer = combineReducers({
     search: searchRobotsReducer
});
export default rootReducer();