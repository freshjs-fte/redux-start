import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import TaskListForm from "./TaskListForm";
import { addTaskAction, getTasksAction } from "../../app/actions";

const TaskListContainer = (props) => {
  const { list, isLoading, error } = useSelector((state) => state.tasksSlice);
  const dispatch = useDispatch();

  useEffect(() => {
    // effect
    dispatch(getTasksAction());
  }, [dispatch]);

  return (
    <div>
      <TaskListForm
        onSubmit={(values) => {
          console.log(values);
          const newTask = { title: values.title };
          dispatch(addTaskAction(newTask));
        }}
      />
      <span>{isLoading ? "Loading ... " : ""}</span>
      <span>{error ? error.message : ""}</span>

      <ul>
        {list.map((task) => {
          return (
            <li key={task.id}>
              <input type="checkbox" value={task.isChecked} />
              <span>{task.title}</span>
              <span>{task.description}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default TaskListContainer;
