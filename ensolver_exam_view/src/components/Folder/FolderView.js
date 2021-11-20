import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import UserTodolistContext from "../../context/UserTodolistContext";
import Task from "../Task/Task";
import CreateTask from "../CreateTask/CreateTask";
import {Container, Typography, IconButton} from "@mui/material";
import ArrowBackRoundedIcon from '@mui/icons-material/ArrowBackRounded';

const FolderView = () => {
  const foldersData = useContext(UserTodolistContext);
  const navigate = useNavigate(); 
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
	<IconButton onClick={() => navigate(-1)}>
		<ArrowBackRoundedIcon/>
	</IconButton>
      <Typography variant={"h4"} sx={{
          textAlign: "center"
      }}>
        Folder {">"} {foldersData.folder.folder.name}
      </Typography>
      <Container maxWidth={"sm"} sx={{marginTop:3}}>
        {tasks}
      </Container>
      <CreateTask />
    </Container>
  );
};

export default FolderView;
