import { combineReducers } from "redux";
import tasksSliceReducer from "./tasks";

const rootReducer = combineReducers({
  tasksSlice: tasksSliceReducer,
})

export default rootReducer;
