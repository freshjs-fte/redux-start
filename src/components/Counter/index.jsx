import React from "react";
import { connect } from "react-redux";
import { counterIncrement, counterDecrement } from "../../app/actions";

function Counter(props) {
  console.log(props);

  return (
    <div>
      <div>{props.count}</div>
      <button
        onClick={() => {
          props.dispatch( counterIncrement(123) );
        }}
      >
        +
      </button>
      <button
        onClick={() => {
          props.dispatch(counterDecrement());
        }}
      >
        -
      </button>
    </div>
  );
}

// сопоставляем store с будущими пропсами
const mapStateToProps = (state) => {
  return { count: state.count, step: state.step };
};

// 1)
// выбираем что взять из store
const withStore = connect(mapStateToProps);
// получаем выбранное состояние в пропсы
const withConsumer = withStore(Counter);

export default withConsumer;

// 2)
// export default connect(mapStateToProps)(Counter);
