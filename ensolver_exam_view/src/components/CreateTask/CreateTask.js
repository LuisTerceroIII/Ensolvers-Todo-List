import React, {useContext, useState} from "react";
import CreateTaskView from "./CreateTaskView";
import UserTodolistContext from "../../context/UserTodolistContext";
import { TodoApiService } from "../../services/TodoApiService";

const CreateTask = () => {
  const foldersData = useContext(UserTodolistContext);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const handleCreateTask = (data, e) => {
    e.target.reset(); // clean the input
    if (data.newTask.length > 0) {
      setLoading(true);
	  setError(false);
      let { idUser, idFolder } = foldersData.folder.folder;
      let newTask = {
        description: data.newTask,
        completed: false,
      };

      TodoApiService()
        .createTask(idUser, idFolder, newTask)
        .then((res) => {
          if (res.status === 202) {
            setLoading(false);
			setError(false);
            let folderData = foldersData.folder;
            console.log(res.data)
            folderData.tasks.push(res.data);
            foldersData.setFolder({ ...folderData });
		    data.newTask.length = 0;
          } else {
				setError(true);
				setLoading(false);
			}
        })
        .catch((err) => console.error("ERROR:::", err));
    }
  };
  return <CreateTaskView createTask={handleCreateTask} loading={loading}/>;
};
export default CreateTask;
