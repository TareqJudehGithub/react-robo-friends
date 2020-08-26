import Axios from "axios";
import { 
     CHANGE_SEARCH_FIELD,
     REQUEST_ROBOTS_PENDING,
     REQUEST_ROBOTS_SUCCESS,
     REQUEST_ROBOTS_FAILED
} from "./types";

export const setSearchField = (text) => ({
     type: CHANGE_SEARCH_FIELD,
     payload: text
});

export const requestRobots = () => async dispatch => {
     dispatch({ type: REQUEST_ROBOTS_PENDING});
     try {
          const response = await Axios
          .get("https://gorest.co.in/public-api/users");
          dispatch({
               type: REQUEST_ROBOTS_SUCCESS,
               payload: response.data.data
          });
     } catch (error) {
          dispatch({
               type: REQUEST_ROBOTS_FAILED,
               payload: error
          })
     }
};