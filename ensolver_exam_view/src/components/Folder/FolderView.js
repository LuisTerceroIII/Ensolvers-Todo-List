import React, { useContext } from "react";
import UserTodolistContext from "../../context/UserTodolistContext";
import Task from "../Task/Task";
import CreateTask from "../CreateTask/CreateTask";
import {Container, Typography} from "@mui/material";

const FolderView = () => {
  const foldersData = useContext(UserTodolistContext);
  const tasks = foldersData.folder.tasks.map((task, i) => (
      <Task
      key={i}
      taskId={task.taskId}
      description={task.description}
      isCheck={task.completed}/>
  ));
  return (
    <Container maxWidth={"sm"} sx={{
    }}>
      <Typography variant={"h4"} sx={{
          textAlign: "center"
      }}>
        Folder > {foldersData.folder.folder.name}
      </Typography>
      <Container maxWidth={"sm"} sx={{marginTop:3}}>
        {tasks}
      </Container>
      <CreateTask />
    </Container>
  );
};

export default FolderView;
