import { combineReducers } from "redux";
import tasksSliceReducer from "./tasks";

const rootReducer = combineReducers({
  // все редукторы по очереди
  tasksSlice: tasksSliceReducer,
})

export default rootReducer;
