import Task from "./Task";

const TaskList = ({ tasks }) => {
  return (
    <ul>
      <Task/>
      {tasks.map((task) => {
        <Task key={task.id} task={task}/>
      })}
    </ul>
  );
};

export default TaskList