import "./App.css";
import React, { useState } from "react";
import LoggedUserContext from "./context/LoggedUserContext";
import Routes from "./Routes/Routes";
import UserTodolistContext from "./context/UserTodolistContext";
import theme from './themes/theme'
import { ThemeProvider } from '@mui/material/styles';
/* When login is pass, the server response with a list of folder of that user.
 * Then in Login component set all folders for Folders component*/
const App = () => {
  const [credentials, setCredentials] = useState("");
  const [logged, setLogged] = useState(false);

  const [folders, setFolders] = useState("");
  const [folder, setFolder] = useState("");

  return (
    <LoggedUserContext.Provider
      value={{
        setCredentials,
        setLogged,
        logged,
        credentials,
      }}
    >
      <UserTodolistContext.Provider
        value={{
          folders,
          setFolders,
          folder,
          setFolder,
        }}
      >
      <ThemeProvider theme={theme} >
         <Routes />
      </ThemeProvider>
       
      }
      </UserTodolistContext.Provider>
    </LoggedUserContext.Provider>
  );
};

export default App;
