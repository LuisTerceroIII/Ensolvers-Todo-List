import React, { useContext } from "react";
import UserTodolistContext from "../../context/UserTodolistContext";
import CreateFolder from "../CreateFolder/CreateFolder";
import {Avatar, Container, IconButton, Typography} from "@mui/material";

import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import FolderIcon from "@mui/icons-material/Folder";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import DeleteIcon from "@mui/icons-material/Delete";

const FoldersView = ({ handleViewFolderItems, handleRemoveFolder }) => {
  const foldersData = useContext(UserTodolistContext);
  const folders = foldersData.folders.map((folder, i) => {
    return (
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
    );
  });


  return (
    <section>
      <Typography variant="h4" sx={{textAlign: "center"}}>Folders</Typography>
      <Container maxWidth={"sm"} sx={{
          display:"flex",
          justifyContent: "center"
      }}>
          <List>{folders}</List>
      </Container>
      <CreateFolder />
    </section>
  );
};

export default FoldersView;
