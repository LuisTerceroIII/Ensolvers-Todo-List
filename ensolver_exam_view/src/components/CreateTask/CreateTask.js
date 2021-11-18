import React, { useContext } from "react";
import CreateTaskView from "./CreateTaskView";
import UserTodolistContext from "../../context/UserTodolistContext";
import { TodoApiService } from "../../services/TodoApiService";

const CreateTask = () => {
  const foldersData = useContext(UserTodolistContext);

  const handleCreateTask = (data, e) => {
    e.target.reset(); // clean the input

    if (data.newTask.length > 0) {
      let { idUser, idFolder } = foldersData.folder.folder;
      let newTask = {
        description: data.newTask,
        completed: false,
      };

      TodoApiService()
        .createTask(idUser, idFolder, newTask)
        .then((res) => {
          if (res.status === 202) {
            let folderData = foldersData.folder;
            folderData.tasks.push(res.data);
            foldersData.setFolder({ ...folderData });
          }
        })
        .catch((err) => console.error("ERROR:::", err));
    }
  };
  return <CreateTaskView createTask={handleCreateTask} />;
};
export default CreateTask;
