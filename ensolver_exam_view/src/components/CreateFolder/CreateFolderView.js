import React from "react";
import { useForm } from "react-hook-form";
import {Container, Typography} from "@mui/material";
import TextField from "@mui/material/TextField";
import SaveIcon from "@mui/icons-material/Save";
import { LoadingButton } from "@mui/lab";

const CreateFolderView = ({ createNewFolder, loading }) => {
  const { handleSubmit, register } = useForm();
  return (
    <form onSubmit={handleSubmit(createNewFolder)}>
        <Container maxWidth={"sm"} sx={{
            display:"flex",
            justifyContent: "center",
            marginTop: 3
        }}>
          <TextField label={"new Folder"} {...register("newFolder")} size={"small"}>
            {" "}
            a
          </TextField>
          <LoadingButton
            type={"submit"}
            variant={"outlined"}
            endIcon={<SaveIcon />}
            loading={loading}
            sx={{fontSize:5}}
          >
            <Typography>Save</Typography>
          </LoadingButton>
        </Container>
    </form>

  );
};

export default CreateFolderView;
