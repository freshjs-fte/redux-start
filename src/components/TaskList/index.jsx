import { connect } from "react-redux";

const TaskList = (props) => {
  console.log(props);
  return <div></div>;
};

const mapState = (state) => {
  return { tasks: state.tasks };
};

// const withStore = connect(mapState);
// const withConsumer = withStore(TaskList);

export default connect(mapState)(TaskList);

/* 
    1) 
*/
