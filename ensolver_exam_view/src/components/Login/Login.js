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
  const [userNotExist, setUserNotExist] = useState(false);
  const [error, setError] = useState(false); 	

  useEffect(() => {
    if (loginContext.credentials !== "") {
      setLoading(true);
	  setError(false);
	  setUserNotExist(false);
      TodoApiService()
        .searchUser(loginContext.credentials)
        .then((res) => {
          if (res.status === 202) {
            loginContext.setLogged(true);
            foldersData.setFolders(res.data);
			setUserNotExist(false);
            setLoading(false);
			setError(false);
            navigate("/folders");
          } else if(res.status === 204) {
				setUserNotExist(true);
				setLoading(false);
		    } else {
				setError(true);
				setLoading(false);
			} 
        })
        .catch((err) => {
          console.log("ERROR::::", err);
          setLoading(false);
		  setError(true);
        });
    }
  }, [loginContext.credentials]);

  return loginContext.logged ? (
    <Navigate to={"/folders"} />
  ) : (
    <LoginView loading={loading} error={error} userNotExist={userNotExist} />
  );
};

export default Login;
