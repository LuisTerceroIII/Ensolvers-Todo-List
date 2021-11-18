import React, { useContext } from "react";
import LoggedUserContext from "../../context/LoggedUserContext";
import { useForm } from "react-hook-form";

const LoginView = () => {
  const loginContext = useContext(LoggedUserContext);
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    loginContext.setCredentials(data.username);
  };
  return (
    <section>
      <h1> TO - DO - APP </h1>
      <a
        href={"https://luisterceroiii.github.io/Luis-Espinoza-Navarrete/"}
        target="_blank"
      >
        By Luis Espinoza
      </a>
      <form onSubmit={handleSubmit(onSubmit)}>
        <p> Search folders by username luisterceroiii</p>
        <input name={"username"} {...register("username")} />
        <button type={"submit"}>Search</button>
      </form>
    </section>
  );
};

export default LoginView;
