import React from "react";
import { useForm } from "react-hook-form";
import {Container, Typography, Alert} from "@mui/material";
import TextField from "@mui/material/TextField";
import SaveIcon from "@mui/icons-material/Save";
import { LoadingButton } from "@mui/lab";

const CreateFolderView = ({ createNewFolder, loading, error }) => {
  const { handleSubmit, register } = useForm();
  return (
    <form onSubmit={handleSubmit(createNewFolder)}>
        <Container maxWidth={"sm"} sx={{
            display:"flex",
            justifyContent: "center",
            marginTop: 3,
			marginBottom: 10
        }}>
          <TextField label={"new Folder"} {...register("newFolder")} size={"small"}>
            {" "}
            a
          </TextField>
          <LoadingButton
            type={"submit"}
            variant={"outlined"}
			size="small"
            endIcon={<SaveIcon />}
            loading={loading}
           
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

export default CreateFolderView;
