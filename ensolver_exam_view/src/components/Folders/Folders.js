import React from "react";
import Loader from "react-loader-spinner";

const Folders = ({
  userFolders,
  handleViewFolderItems,
  handleRemoveFolder,
  searchingFolders,
  isAFolderSelected,
}) => {
  const folders = userFolders.map((folder, i) => {
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
  return searchingFolders && !isAFolderSelected ? (
    <Loader type="TailSpin" color="#00BFFF" height={40} width={40} />
  ) : (
    folders
  );
};

export default Folders;
