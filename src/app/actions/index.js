import ACTION_TYPES from "./actionTypes";

export const counterIncrementAction = (payload) => {
  return {
    type: ACTION_TYPES.INCREMENT,
    payload,
  };
};

export const counterDecrementAction = (payload) => {
  return {
    type: ACTION_TYPES.DECREMENT,
    payload,
  };
};

export const getTasksAction = (payload) => {
  return {
    type: ACTION_TYPES.GET_TASKS_REQUESTED,
    payload,
  };
};

export const addTaskAction = (payload) => {
  return {
    type: ACTION_TYPES.ADD_TASK_REQUESTED,
    payload,
  };
};

export const deleteTaskAction = (payload) => {
  return {
    type: ACTION_TYPES.DELETE_TASK,
    payload,
  };
};
