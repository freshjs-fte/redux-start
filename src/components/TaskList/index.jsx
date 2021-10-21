import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTaskAction } from "../../app/actions";

const TaskListContainer = (props) => {
  console.log(props);

  const tasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch();

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
          const newTask = { text: taskText, isChecked: false };
          dispatch(addTaskAction(newTask))
        }}
      >
        Добавить таску
      </button>
      {/* <span>{props.isLoading ? "Loading ... " : ""}</span> */}

      <ul>
        {tasks.map((task) => {
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

export default TaskListContainer;
