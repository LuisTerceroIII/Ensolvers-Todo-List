import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes as RoutesDom,
} from "react-router-dom";
import Login from "../components/Login/Login";
import Folders from "../components/Folders/Folders";
import Folder from "../components/Folder/Folder";

const Routes = () => {
  return (
    <Router>
      <RoutesDom>
        <Route exact path={"/"} element={<Login />} />
        <Route exact path={"/folders"} element={<Folders />} />
        <Route exact path={"/folder"} element={<Folder />} />
      </RoutesDom>
    </Router>
  );
};

export default Routes;
