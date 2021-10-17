import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { TodoApiService } from "../services/TodoApiService";
import "./Task.css";

const Task = (props) => {
  const { register, handleSubmit } = useForm();
  const [checked, setChecked] = useState(props.checked);
  const [activeEditTask, setActiveEditTask] = useState({});

  const handleChangeCheckboxState = () => {
    setChecked(!checked);
    TodoApiService()
      .updateTaskState(props.id, !checked)
      .then((res) => {})
      .catch((err) => console.log(err));
  };

  const onSubmit = (data) => {
    console.log(activeEditTask);
    TodoApiService()
      .updateTaskDescription(activeEditTask.taskId, data.editDescription)
      .then(async (res) => {
        const updateTask = {
          taskId: res.data.taskId,
          folderId: res.data.folderId,
          userId: res.data.userId,
          description: data.editDescription,
          completed: res.data.completed,
        };
        props.updateTaskDescription(updateTask);
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className={"task"}>
      <input
        type={"checkbox"}
        checked={checked}
        onChange={() => handleChangeCheckboxState()}
      />
      {props.description}

      {activeEditTask.activeEdition &&
      props.task.taskId === activeEditTask.taskId ? (
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            placeholder={"edit description"}
            {...register("editDescription")}
          />
          <button>Edit</button>
        </form>
      ) : (
        ""
      )}
      <a
        href={"#"}
        onClick={() => {
          setActiveEditTask({
            taskId: props.task.taskId,
            activeEdition: !activeEditTask.activeEdition,
          });
        }}
      >
        {" "}
        Edit
      </a>
    </div>
  );
};

export default Task;
