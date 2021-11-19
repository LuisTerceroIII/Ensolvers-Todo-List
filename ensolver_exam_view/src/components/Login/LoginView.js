import React, { useContext } from "react";
import LoggedUserContext from "../../context/LoggedUserContext";
import { useForm } from "react-hook-form";
import {Typography, TextField, Container} from "@mui/material";
import { LoadingButton } from "@mui/lab";

const LoginView = ({ loading }) => {
  const loginContext = useContext(LoggedUserContext);
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    loginContext.setCredentials(data.username);
  };
  return (
    <Container maxWidth={"sm"} sx={{
        alignItems: "center",
        justifyContent : "center",
        textAlign: "center",
        marginTop : 5
    }}>
      <Typography variant={"h3"}> TO - DO - APP </Typography>
      <a
        href={"https://luisterceroiii.github.io/Luis-Espinoza-Navarrete/"}
        target="_blank"
      >
        <Typography variant={"h6"}>By Luis Espinoza</Typography>
      </a>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Typography variant={"h6"} sx={{marginTop:3}}>
          Search folders by username. Try luisterceroiii for test.
        </Typography>
          <Container maxWidth={"sm"} sx={{
              display:"flex",
              justifyContent: "center",
              marginTop: 3
          }}>
              <TextField
                  {...register("username")}
                  label={"username"}
                  size={"small"}
              />
              <LoadingButton type={"submit"} variant={"outlined"} loading={loading} size={"small"}>
                  <Typography component={"p"}>Search</Typography>
              </LoadingButton>
          </Container>
      </form>
    </Container>
  );
};

export default LoginView;
