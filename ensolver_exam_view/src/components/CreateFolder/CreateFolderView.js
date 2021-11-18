import React from "react";
import { useForm } from "react-hook-form";

const CreateFolderView = ({ createNewFolder }) => {
  const { handleSubmit, register } = useForm();
  return (
    <form onSubmit={handleSubmit(createNewFolder)}>
      <input placeholder={"new Folders"} {...register("newFolder")} />
      <button type={"submit"}>New Folder</button>
    </form>
  );
};

export default CreateFolderView;
