import React, { useContext } from "react";
import UserTodolistContext from "../../context/UserTodolistContext";
import Task from "../Task/Task";
import CreateTask from "../CreateTask/CreateTask";

const FolderView = () => {
  const foldersData = useContext(UserTodolistContext);
  const tasks = foldersData.folder.tasks.map((task, i) => (
    <Task
      key={i}
      taskId={task.taskId}
      description={task.description}
      isCheck={task.completed}
    />
  ));
  return (
    <section>
      <h1>Folder > {foldersData.folder.folder.name}</h1>
      {tasks}
      <CreateTask />
    </section>
  );
};

export default FolderView;
