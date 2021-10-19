const initialState = {
  count: 0,
  step: 1,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "INCREMENT": {
      return { ...state, count: state.count + 1 };
    }
    case "DECREMENT": {
      return { ...state, count: state.count - 1 };
    }

    default: {
      // без изменений
      return state;
    }
  }
};

export default reducer;
