import React, { useState, useEffect } from "react";
import TaskView from "./TaskView";
import { TodoApiService } from "../../services/TodoApiService";

const Task = ({ isCheck, description, taskId }) => {
  const [checked, setChecked] = useState(isCheck);
  const [descriptionState, setDescription] = useState(description);
  const [loading, setLoading] = useState(false);
  const [activateEdition, setActivateEdition] = useState(false);

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
      setLoading(true);
      TodoApiService()
        .updateTaskDescription(taskId, descriptionState)
        .then((res) => {
          if(res.status === 202) {
			setLoading(false);
			setActivateEdition(false);
		  }
        });
    }
  }, [descriptionState]);

  useEffect(() => {
    TodoApiService()
      .updateTaskState(taskId, checked)
      .then((res) => {});
  }, [checked]);

  return (
    <TaskView
      isCheck={checked}
      description={descriptionState}
      changeCheckState={handleChangeCheckState}
      editDescription={handleEditDescription}
      loading={loading}
	  activateEdition={activateEdition}
	  setActivateEdition={setActivateEdition}
    />
  );
};

export default Task;
