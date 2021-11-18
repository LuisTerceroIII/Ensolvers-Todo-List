import React, { useState } from "react";
import { useForm } from "react-hook-form";

const TaskView = ({
  isCheck,
  description,
  changeCheckState,
  editDescription,
}) => {
  const [activateEdition, setActivateEdition] = useState(false);
  const { handleSubmit, register } = useForm();
  return (
    <div>
      <input type={"checkbox"} checked={isCheck} onChange={changeCheckState} />
      {description}
      <a href={"#"} onClick={() => setActivateEdition(!activateEdition)}>
        Edit
      </a>

      {activateEdition ? (
        <form onSubmit={handleSubmit(editDescription)}>
          <input
            placeholder={"edit description"}
            {...register("editDescription")}
          />
          <button> Edit </button>
        </form>
      ) : (
        ""
      )}
    </div>
  );
};

export default TaskView;
