import { createStore, applyMiddleware } from "redux";
import { logger } from "redux-logger";
import thunkMiddleware from "redux-thunk";
import rootReducer from "./rootReducer";

const middlewares = [];
// Making sure logger is only working in development.
if (process.env.NODE_ENV === "development") middlewares.push(logger);

const store = createStore(
    rootReducer,
    applyMiddleware(thunkMiddleware,...middlewares));
export default store;
