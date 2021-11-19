import React from "react";
import { useForm } from "react-hook-form";
import {Container, TextField, Typography} from "@mui/material";
import {LoadingButton} from "@mui/lab";
import SaveIcon from "@mui/icons-material/Save";

const CreateTaskView = ({ createTask, loading }) => {
  const { handleSubmit, register } = useForm();

  return (
    <form onSubmit={handleSubmit(createTask)}>
        <Container maxWidth={"sm"} sx={{
            display:"flex",
            justifyContent: "center",
            marginTop: 3
        }}>
            <TextField label={"new Task"} {...register("newTask")} size={"small"}/>
            <LoadingButton
                type={"submit"}
                variant={"outlined"}
                endIcon={<SaveIcon />}
                loading={loading}
                size={"small"}
                sx={{fontSize:5}}
            >
                <Typography>New Task</Typography>
            </LoadingButton>
        </Container>

    </form>
  );
};

export default CreateTaskView;
