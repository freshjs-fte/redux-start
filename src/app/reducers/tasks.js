import ACTION_TYPES from "../actions/actionTypes";

const initialState = {
  tasks: [],
  isLoading: false,
  error: null,
};

const tasksReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_TYPES.ADD_TASK_REQUESTED: {
      return { ...state };
    }
    // TODO error case

    default: {
      // без изменений
      return state;
    }
  }
};

export default tasksReducer;
