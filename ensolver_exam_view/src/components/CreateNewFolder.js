import React from "react";

const CreateNewFolder = ({
  handleSubmit,
  onSubmit,
  register,
  setSubmitButton,
  userFolders,
}) => {
  return userFolders.length > 0 ? (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input placeholder={"new Folder"} {...register("newFolder")} />
      <button onClick={() => setSubmitButton("newFolder")}>New Folder</button>
    </form>
  ) : (
    ""
  );
};

export default CreateNewFolder;
