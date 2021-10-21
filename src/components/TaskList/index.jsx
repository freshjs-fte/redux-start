import { useDispatch, useSelector } from "react-redux";
import { addTaskAction } from "../../app/actions";
import TaskListForm from "./TaskListForm";

const TaskListContainer = (props) => {
  const tasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch();

  return (
    <div>
      <TaskListForm
        onSubmit={(values) => {
          const newTask = { title: values.title };
          dispatch(addTaskAction(newTask));
        }}
      />
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
