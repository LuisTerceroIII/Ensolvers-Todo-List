import React, { useContext } from "react";
import UserTodolistContext from "../../context/UserTodolistContext";
import LoggedUserContext from "../../context/LoggedUserContext";
import CreateFolder from "../CreateFolder/CreateFolder";
import {Avatar, Container, IconButton, Typography, Divider } from "@mui/material";
import { useNavigate } from "react-router-dom";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import FolderIcon from "@mui/icons-material/Folder";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import DeleteIcon from "@mui/icons-material/Delete";
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';

const FoldersView = ({ handleViewFolderItems, handleRemoveFolder }) => {
  const loginContext = useContext(LoggedUserContext);
  const foldersData = useContext(UserTodolistContext);
  const navigate = useNavigate();
  const goHome = () => {
	loginContext.setLogged(false);
	loginContext.setCredentials("");
	navigate("/");
  }
  const folders = foldersData.folders.map((folder, i) => {
    return (
	<>
      <ListItem key={i}>

        <ListItemAvatar>
          <Avatar>
            <FolderIcon fontSize={"small"} />
          </Avatar>
        </ListItemAvatar>

        <Typography component={"p"} key={i}>
          {" "}
          - {folder.name}{" "}

          <IconButton onClick={() => handleViewFolderItems(folder)}>
            <OpenInNewIcon />
          </IconButton>

          <IconButton onClick={() => handleRemoveFolder(folder)}>
            <DeleteIcon />
          </IconButton>

        </Typography>
      </ListItem>
	  <Divider variant="middle"/>
	</>
    );
  });


  return (
    <Container maxWidth="sm">
	<IconButton onClick={() => goHome()}>
		<HomeRoundedIcon/>
	</IconButton>	
      <Typography variant="h4" sx={{textAlign: "center"}}>Folders</Typography>
      <Container maxWidth={"sm"} sx={{
          display:"flex",
          justifyContent: "center"
      }}>
          <List>{folders}</List>
      </Container>
      <CreateFolder />
    </Container>
  );
};

export default FoldersView;
