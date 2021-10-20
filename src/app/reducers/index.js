import ACTION_TYPES from "../actions/actionTypes";

const initialState = {
  count: 0,
  step: 1,
  mode: true,
  /* 3. */
  tasks: [],
  isLoading: false,
  error: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    /* counter */
    case ACTION_TYPES.INCREMENT: {
      return { ...state, count: state.count + action.data };
    }
    case ACTION_TYPES.DECREMENT: {
      return { ...state, count: state.count - 1 };
    }

    case ACTION_TYPES.ADD_TASK_REQUESTED: {
      return { ...state, isLoading: true };
    }
    case ACTION_TYPES.ADD_TASK_SUCCESSED: {
      const newTasks = [];
      newTasks.push(...state.tasks);
      newTasks.push({
        ...action.data,
        // id: state.tasks.length
      });

      return {
        ...state,
        tasks: newTasks,
        isLoading: false,
      };
    }
    // TODO error case

    case ACTION_TYPES.DELETE_TASK: {
      return { ...state };
    }

    default: {
      // без изменений
      return state;
    }
  }
};

export default reducer;
