import React, { useContext } from "react";
import UserTodolistContext from "../../context/UserTodolistContext";
import CreateFolder from "../CreateFolder/CreateFolder";

const FoldersView = ({ handleViewFolderItems, handleRemoveFolder }) => {
  const foldersData = useContext(UserTodolistContext);
  const folders = foldersData.folders.map((folder, i) => {
    return (
      <p key={i}>
        {" "}
        - {folder.name}{" "}
        <a href={"#"} onClick={() => handleViewFolderItems(folder)}>
          View items
        </a>{" "}
        <a href={"#"} onClick={() => handleRemoveFolder(folder)}>
          Remove
        </a>
      </p>
    );
  });
  return (
    <section>
      <h1>FOLDERS</h1>
      {folders}
      <CreateFolder />
    </section>
  );
};

export default FoldersView;
