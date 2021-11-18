import React, { useState, useEffect } from "react";
import TaskView from "./TaskView";
import { TodoApiService } from "../../services/TodoApiService";

const Task = ({ isCheck, description, taskId }) => {
  const [checked, setChecked] = useState(isCheck);
  const [descriptionState, setDescription] = useState(description);

  const handleChangeCheckState = () => {
    setChecked(!checked);
  };

  const handleEditDescription = (data, e) => {
    e.target.reset();
    if (data.editDescription.length > 0) {
      setDescription(data.editDescription);
    }
  };

  useEffect(() => {
    if (descriptionState !== description) {
      TodoApiService()
        .updateTaskDescription(taskId, descriptionState)
        .then((res) => {});
    }
  }, [descriptionState]);

  useEffect(() => {
    TodoApiService()
      .updateTaskState(taskId, !isCheck)
      .then((res) => {});
  }, [checked]);

  return (
    <TaskView
      isCheck={checked}
      description={descriptionState}
      changeCheckState={handleChangeCheckState}
      editDescription={handleEditDescription}
    />
  );
};

export default Task;
