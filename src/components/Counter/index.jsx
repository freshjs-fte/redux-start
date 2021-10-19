import React from "react";
import { connect } from "react-redux";

function Counter(props) {
  console.log(props);
  return <div>123</div>;
}

// разбираем store на будущие пропсы
const mapStateToProps = (state) => {
  return { count: state.count };
};

// выбираем что взять из store
// const withStore = connect(mapStateToProps);
// получаем выбранное состояние в пропсы
// const withConsumer = withStore(Counter);

export default connect(mapStateToProps)(Counter);
