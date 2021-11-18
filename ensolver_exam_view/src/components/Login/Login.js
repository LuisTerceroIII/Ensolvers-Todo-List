import React, { useEffect, useContext } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import LoggedUserContext from "../../context/LoggedUserContext";
import LoginView from "./LoginView";
import { TodoApiService } from "../../services/TodoApiService";
import UserTodolistContext from "../../context/UserTodolistContext";

const Login = () => {
  const loginContext = useContext(LoggedUserContext);
  const foldersData = useContext(UserTodolistContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (loginContext.credentials !== "")
      TodoApiService()
        .searchUser(loginContext.credentials)
        .then((res) => {
          if (res.status === 202) {
            loginContext.setLogged(true);
            foldersData.setFolders(res.data);
            navigate("/folders");
          }
        })
        .catch((err) => {
          console.log("ERROR::::", err);
        });
  }, [loginContext.credentials]);

  return loginContext.logged ? <Navigate to={"/folders"} /> : <LoginView />;
};

export default Login;
