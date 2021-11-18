import React, { useContext, useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import LoggedUserContext from "../../context/LoggedUserContext";
import UserTodolistContext from "../../context/UserTodolistContext";
import { TodoApiService } from "../../services/TodoApiService";
import FoldersView from "./FoldersView";

const Folders = () => {
  const loginContext = useContext(LoggedUserContext);
  const foldersData = useContext(UserTodolistContext);
  const navigate = useNavigate();

  const handleViewFolderItems = (folder) => {
    TodoApiService()
      .taskByFolder(folder.idUser, folder.idFolder)
      .then((res) => {
        const tasks = res.data;
        foldersData.setFolder({
          folder,
          tasks,
        });
        navigate("/folder");
      });
  };

  const handleRemoveFolder = (folder) => {
    TodoApiService()
      .deleteFolder(folder.idFolder)
      .then((res) => {
        if (res.status === 202) {
          let updatedFolders = foldersData.folders.filter(
            (folderIt) => folderIt.idFolder !== folder.idFolder
          );
          foldersData.setFolders([...updatedFolders]);
        }
      });
  };

  useEffect(() => {}, []);
  return loginContext.logged ? (
    <FoldersView
      handleViewFolderItems={handleViewFolderItems}
      handleRemoveFolder={handleRemoveFolder}
    />
  ) : (
    <Navigate to={"/"} />
  );
};

export default Folders;
