import React from "react";
import "./CreateTask.css";

const CreateTask = ({
  handleSubmit,
  onSubmit,
  register,
  setSubmitButton,
  isAFolderSelected,
}) => {
  return isAFolderSelected ? (
    <form className={"create-task-form"} onSubmit={handleSubmit(onSubmit)}>
      <input placeholder={"new Task"} {...register("newTask")} />
      <button onClick={() => setSubmitButton("newTask")}>New Task</button>
    </form>
  ) : (
    ""
  );
};

export default CreateTask;
