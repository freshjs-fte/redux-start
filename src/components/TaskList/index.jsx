import { useDispatch, useSelector } from "react-redux";
import { addTaskAction } from "../../app/actions";
import TaskListForm from "./TaskListForm";

const TaskListContainer = (props) => {
  const { list } = useSelector((state) => state.tasksSlice);
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
        {list.map((task) => {
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
