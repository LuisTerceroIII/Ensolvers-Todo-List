import React from "react";
import { useForm } from "react-hook-form";
import {Container, TextField, Typography, Alert} from "@mui/material";
import {LoadingButton} from "@mui/lab";
import SaveIcon from "@mui/icons-material/Save";

const CreateTaskView = ({ createTask, loading, error }) => {
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
                <Typography>Save</Typography>
            </LoadingButton>
        </Container>
		{error ? <Container maxWidth="sm"  sx={{
			display: "flex",
			marginTop: 3
		}}><Alert severity="error" variant="outlined" sx={{
			maxWidth: "35%",
			margin: "0 auto"
		}}>Error connecting to the server</Alert></Container> : ""}
    </form>
  );
};

export default CreateTaskView;
