import ACTION_TYPES from "./actionTypes";

export const counterIncrement = 
(data) => {
  return { 
    type: 
    ACTION_TYPES.INCREMENT, 
    data };
};

export const counterDecrement = 
(data) => {
  return { 
    type: 
    ACTION_TYPES.DECREMENT, 
    data };
};

/* 6. */
export const addTask = 
(data) => {
  return {
    type: 
    ACTION_TYPES.ADD_TASK, 
    data };
};

export const deleteTask = 
(data) => {
  return {
    type: 
    ACTION_TYPES.DELETE_TASK, 
    data };
};