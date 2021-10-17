import React, {useState,useEffect} from 'react';
import {useForm} from "react-hook-form";
import {TodoApiService} from "../../services/TodoApiService";

const Task = (props) => {
    const {register, handleSubmit} = useForm();
    const [description, setDescription] = useState(props.description);
    const [checked, setChecked] = useState(props.checked);
    const [task, setTask] = useState(props.task)
    const [taskDescriptionUpdate, setTaskDescriptionUpdate] = useState("")
    const [activeEditTask, setActiveEditTask] = useState({
        taskId : 0,
        activeEdition : false
    })
    useEffect(() => {},[props.tasks,task])

    const onSubmit = (data) => {
        console.log(activeEditTask)
        TodoApiService().updateTaskDescription(activeEditTask.taskId, data.editDescription)
            .then(async res => {
                console.log(res.data)
                const updateTask = {
                    taskId: res.data.taskId,
                    folderId: res.data.folderId,
                    userId : res.data.userId,
                    description: data.editDescription,
                    completed: res.data.completed
                };
                props.updateTaskDescription(updateTask)

            }).catch(err => console.log(err))
    }
    return (
        <div>
            <input type={"checkbox"} checked={checked}
                  onChange={() => {
                      setChecked(!checked)
                      TodoApiService().updateTaskState(props.id,!checked)
                          .then(res => {
                              console.log(res.data)
                          }).catch(err => console.log(err))

                  }}/>
              {description}

            {activeEditTask.activeEdition && task.taskId === activeEditTask.taskId ?
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input placeholder={"edit description"}
                           {...register("editDescription")}/>
                    <button>Edit</button>
                </form> : ""
            }
            <a href={"#"} onClick={() => {
                setActiveEditTask({
                    taskId : task.taskId,
                    activeEdition : !activeEditTask.activeEdition
                })
            }}> Edit</a>

        </div>
    );
};

export default Task;