import { CHANGE_SEARCH_FIELD } from "./types";

const INITIAL_STATE = {
     robots: [],
     searchField: ""
};
const searchRobotsReducer = (state = INITIAL_STATE, action) => {
     switch(action.type){
          case CHANGE_SEARCH_FIELD:
               return{
                    ...state,
                    searchField: action.payload
               }   
          default:
               return state;
     }
}
export default searchRobotsReducer;