import axios from "axios";

export const TodoApiService = () => {
  const PORT = "8080";
  const apiVersion = "to-do-list/v1";
  const localHostURL = `http://localhost:${PORT}/${apiVersion}`;

  const searchUser = async (username) => {
    try {
      return await axios({
        url: `${localHostURL}/user/${username}`,
        method: "GET",
        "Content-Type": "application/json",
      });
    } catch (err) {
      return err;
    }
  };

  const deleteFolder = async (idFolder) => {
    try {
      return await axios({
        url: `${localHostURL}/folder/${idFolder}`,
        method: "DELETE",
        "Content-Type": "application/json",
      });
    } catch (err) {
      return false;
    }
  };

  const taskByFolder = async (userId, idFolder) => {
    try {
      return await axios({
        url: `${localHostURL}/folder/${userId}/${idFolder}`,
        method: "GET",
        "Content-Type": "application/json",
      });
    } catch (err) {
      return [];
    }
  };

  const updateTaskState = async (taskId, completed) => {
    try {
      return await axios.post(`${localHostURL}/task/${taskId}`, {
        completed: completed,
      });
    } catch (err) {
      return [];
    }
  };

  const updateTaskDescription = async (taskId, description) => {
    try {
      return await axios.post(`${localHostURL}/task/${taskId}`, {
        description: description,
      });
    } catch (err) {
      return [];
    }
  };

  const createTask = async (userId, folderId, task) => {
    try {
      return await axios.post(
        `${localHostURL}/task/user/${userId}/folder/${folderId}`,
        task
      );
    } catch (err) {
      return [];
    }
  };

  const newFolder = async (userId, name) => {
    try {
      return await axios.post(`${localHostURL}/folder/${userId}`, {
        name: name,
      });
    } catch (err) {
      return "";
    }
  };
  return {
    searchUser,
    deleteFolder,
    taskByFolder,
    updateTaskState,
    newFolder,
    createTask,
    updateTaskDescription,
  };
};
