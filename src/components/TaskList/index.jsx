import { useState } from "react";
import { connect } from "react-redux";
import { addTaskRequest } from "../../app/actions";

const TaskList = (props) => {
  // console.log(props);
  const [taskText, setTaskText] = useState("");

  const handleChange = ({ target: { value } }) => {
    setTaskText(value);
  };

  return (
    <div>
      <input
        type="text"
        name="taskText"
        value={taskText}
        onChange={handleChange}
      />
      <button
        onClick={() => {
          props.addTask({ text: taskText, isChecked: false });
        }}
      >
        Добавить таску
      </button>
      <span>{props.isLoading ? "Loading ... " : ""}</span>

      <ul>
        {props.tasks.map((task) => {
          return (
            <li key={task.id}>
              <input type="checkbox" value={task.isChecked} />
              <span>{task.text}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

const mapState = (state) => {
  return {
    tasks: state.tasks,
    isLoading: state.isLoading,
    error: state.error,
  };
};

const mapDispatch = (dispatch) => {
  return {
    addTask: (data) => {
      dispatch(addTaskRequest(data));
    },
  };
};

// соединяем состояние и диспатч дейтсвия с пропсами
const withStore = connect(mapState, mapDispatch);

const withConsumer = withStore(TaskList);

export default withConsumer;

/* 
    1) 
*/
