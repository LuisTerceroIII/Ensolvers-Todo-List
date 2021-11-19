import React, { useEffect, useContext, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import LoggedUserContext from "../../context/LoggedUserContext";
import LoginView from "./LoginView";
import { TodoApiService } from "../../services/TodoApiService";
import UserTodolistContext from "../../context/UserTodolistContext";

const Login = () => {
  const loginContext = useContext(LoggedUserContext);
  const foldersData = useContext(UserTodolistContext);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (loginContext.credentials !== "") {
      setLoading(true);
      TodoApiService()
        .searchUser(loginContext.credentials)
        .then((res) => {
          if (res.status === 202) {
            loginContext.setLogged(true);
            foldersData.setFolders(res.data);
            setLoading(false);
            navigate("/folders");
          } else setLoading(false);
        })
        .catch((err) => {
          console.log("ERROR::::", err);
          setLoading(false);
        });
    }
  }, [loginContext.credentials]);

  return loginContext.logged ? (
    <Navigate to={"/folders"} />
  ) : (
    <LoginView loading={loading} />
  );
};

export default Login;
