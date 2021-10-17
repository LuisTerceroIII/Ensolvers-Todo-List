import React from "react";
import Task from "./Task";

const Tasks = ({
  isAFolderSelected,
  tasks,
  setTasks,
  handleUpdateTaskDescription,
}) => {
  return isAFolderSelected
    ? tasks.map((task, i) => {
        return (
          <Task
            key={i}
            id={task.taskId}
            checked={task.completed}
            description={task.description}
            task={task}
            tasks={tasks}
            setTasks={setTasks}
            updateTaskDescription={handleUpdateTaskDescription}
          />
        );
      })
    : "";
};

export default Tasks;
