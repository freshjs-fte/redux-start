import ACTION_TYPES from "./actionTypes";

export const counterIncrementAction = (data) => {
  return {
    type: ACTION_TYPES.INCREMENT,
    data,
  };
};

export const counterDecrementAction = (data) => {
  return {
    type: ACTION_TYPES.DECREMENT,
    data,
  };
};

export const addTaskAction = (data) => {
  return {
    type: ACTION_TYPES.ADD_TASK_REQUESTED,
    data,
  };
};

export const deleteTaskAction = (data) => {
  return {
    type: ACTION_TYPES.DELETE_TASK,
    data,
  };
};
