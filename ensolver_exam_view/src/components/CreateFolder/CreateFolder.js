import React, { useState, useEffect, useContext } from "react";
import CreateFolderView from "./CreateFolderView";
import { TodoApiService } from "../../services/TodoApiService";
import UserTodolistContext from "../../context/UserTodolistContext";

const CreateFolder = () => {
  const foldersData = useContext(UserTodolistContext);
  const [folderName, setFolderName] = useState("");
  const { idUser } = foldersData.folders[0];
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const handleCreateNewFolder = (data, e) => {
    e.target.reset();
    if (data.newFolder.length > 0) {
      setFolderName(data.newFolder);
    }
  };

  useEffect(() => {
    if (folderName !== "") {
      setLoading(true);
	  setError(false);
      TodoApiService()
        .newFolder(idUser, folderName)
        .then((res) => {
          if (res.status === 202) {
            foldersData.folders.push(res.data);
            foldersData.setFolders([...foldersData.folders]);
            setLoading(false);
          } else {
			setError(true);
			setLoading(false);
			}
        });
    }
  }, [folderName]);

  return (
    <CreateFolderView
      createNewFolder={handleCreateNewFolder}
      loading={loading}
	  error={error}
    />
  );
};

export default CreateFolder;
