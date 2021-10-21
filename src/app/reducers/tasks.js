import ACTION_TYPES from "../actions/actionTypes";

const initialState = {
  list: [],
  isLoading: false,
  error: null,
};

const tasksReducer = (prevState = initialState, action) => {
  switch (action.type) {
    case ACTION_TYPES.GET_TASKS_REQUESTED: {
      return {
        ...prevState,
        isLoading: true,
        error: null,
      };
    }
    case ACTION_TYPES.ADD_TASK_REQUESTED: {
      return {
        ...prevState,
        isLoading: true,
        error: null,
      };
    }

    case ACTION_TYPES.ADD_TASK_SUCCESSED: {
      return {
        ...prevState,
        isLoading: false,
        list: [...prevState.list, action.payload.list],
      };
    }
    case ACTION_TYPES.GET_TASKS_SUCCESSED: {
      return {
        ...prevState,
        isLoading: false,
        list: [...action.payload.list],
      };
    }

    case ACTION_TYPES.ADD_TASK_ERROR: {
      return {
        ...prevState,
        isLoading: false,
        error: action.payload.error,
      };
    }
    case ACTION_TYPES.GET_TASKS_ERROR: {
      return {
        ...prevState,
        isLoading: false,
        error: action.payload.error,
      };
    }

    default: {
      // без изменений
      return prevState;
    }
  }
};

export default tasksReducer;
