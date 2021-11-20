import React, { useContext, useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import LoggedUserContext from "../../context/LoggedUserContext";
import UserTodolistContext from "../../context/UserTodolistContext";
import { TodoApiService } from "../../services/TodoApiService";
import FoldersView from "./FoldersView";

const Folders = () => {
  const loginContext = useContext(LoggedUserContext);
  const foldersData = useContext(UserTodolistContext);
  const navigate = useNavigate();
  const [loadingFolder, setLoadingFolder] = useState(false);
  const [loadingDelete, setLoadingDelete] = useState(false);
  const [idFolderSelected, setIdFolderSelected] = useState(-1);

  const handleViewFolderItems = (folder) => {
	setLoadingFolder(true);
	setIdFolderSelected(folder.idFolder);
    TodoApiService()
      .taskByFolder(folder.idUser, folder.idFolder)
      .then((res) => {
		setLoadingFolder(false);
        const tasks = res.data;
        foldersData.setFolder({
          folder,
          tasks,
        });
        navigate("/folder");
      });
  };

  const handleRemoveFolder = (folder) => {
	setLoadingDelete(true);
	setIdFolderSelected(folder.idFolder);
    TodoApiService()
      .deleteFolder(folder.idFolder)
      .then((res) => {
        if (res.status === 202) {
		  setLoadingDelete(false);
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
	  loadingFolder={loadingFolder}
	  loadingDelete={loadingDelete}
	  idFolderSelected={idFolderSelected}
    />
  ) : (
    <Navigate to={"/"} />
  );
};

export default Folders;
