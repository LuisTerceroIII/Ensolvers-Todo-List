import React, { useState } from "react";
import { useForm } from "react-hook-form";
import {Container, IconButton, TextField, Typography, Checkbox } from "@mui/material";
import EditIcon from '@mui/icons-material/Edit';
import SaveIcon from "@mui/icons-material/Save";
import {LoadingButton} from "@mui/lab";
const TaskView = ({
  isCheck,
  description,
  changeCheckState,
  editDescription,
  loading
}) => {
  const [activateEdition, setActivateEdition] = useState(false);
  const { handleSubmit, register } = useForm();
  return (
      <Container maxWidth={"sm"}>
          <Container maxWidth={"sm"} sx={{
              display: "flex",
              justifyContent:"center",
              alignItems: "center"

          }}>
              <Checkbox type={"checkbox"} checked={isCheck} onChange={changeCheckState} />
              <Typography variant={"body1"} >{description}</Typography>
              <IconButton onClick={() => setActivateEdition(!activateEdition)}>
                  <EditIcon/>
              </IconButton>
          </Container>

          {activateEdition ? (
                  <form onSubmit={handleSubmit(editDescription)}>
                      <Container maxWidth={"sm"} sx={{
                          display: "flex",
                          justifyContent:"center",
                          alignContent:"center"
                      }}>
                          <TextField
                              {...register("editDescription")}
                              size={"small"}
                              label={"New description"}
                          >a</TextField>
                          <LoadingButton type={"submit"} variant={"outlined"} loading={loading} size={"small"}> Edit </LoadingButton>
                      </Container>
                  </form>
          ) : (
              ""
          )}

      </Container>

  );
};

export default TaskView;
