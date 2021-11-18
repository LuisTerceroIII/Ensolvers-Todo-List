import React from "react";
import { useForm } from "react-hook-form";

const CreateTaskView = ({ createTask }) => {
  const { handleSubmit, register } = useForm();

  return (
    <form onSubmit={handleSubmit(createTask)}>
      <input placeholder={"new Task"} {...register("newTask")} />
      <button type={"submit"}>New Task</button>
    </form>
  );
};

export default CreateTaskView;
