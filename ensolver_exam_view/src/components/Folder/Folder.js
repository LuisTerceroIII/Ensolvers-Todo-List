import React, { useContext } from "react";
import LoggedUserContext from "../../context/LoggedUserContext";
import { Navigate } from "react-router-dom";
import FolderView from "./FolderView";

const Folder = () => {
  const loginContext = useContext(LoggedUserContext);
  return loginContext.logged ? <FolderView /> : <Navigate to={"/"} />;
};
export default Folder;
