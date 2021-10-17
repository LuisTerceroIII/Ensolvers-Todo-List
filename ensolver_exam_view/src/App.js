import "./App.css";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { TodoApiService } from "./services/TodoApiService";
import Folders from "./components/Folders";
import SearchByUsername from "./components/SearchByUsername";
import CreateNewFolder from "./components/CreateNewFolder";
import CreateTask from "./components/CreateTask";
import Tasks from "./components/Tasks";

const App = () => {
  const { register, handleSubmit } = useForm();

  const [submitButton, setSubmitButton] = useState("userSearch");
  const [username, setUsername] = useState("luisterceroiii");
  const [activeUserId, setActiveUserId] = useState(0);
  const [searchingFolders, setSearchingFolders] = useState(false);
  const [userFolders, setUserFolders] = useState([]);
  const [isAFolderSelected, setIsAFolderSelected] = useState(false);
  const [selectedFolder, setSelectedFolder] = useState("");
  const [tasks, setTasks] = useState([]);
  const [userNotFound, setUSerNotFound] = useState(false);

  const handleSelectedUser = (data) => {
    setSearchingFolders(true);
    TodoApiService()
      .searchUser(data.username)
      .then((res) => {
        setActiveUserId(res.data[0].idUser);
        setUserFolders(res.data);
        setSearchingFolders(false);
        setUsername("");
        setUSerNotFound(false);
      })
      .catch((err) => {
        setUSerNotFound(true);
        setSearchingFolders(false);
      });
  };

  const handleNewFolder = (data) => {
    if (data.newFolder.length > 0) {
      TodoApiService()
        .newFolder(activeUserId, data.newFolder)
        .then((res) => {
          if (res.data) {
            const newFolderCreate = res.data;
            userFolders.push(newFolderCreate);
            setUserFolders([...userFolders]);
          }
        });
    }
  };

  const handleCreateTask = (res) => {
    tasks.push(res.data);
    setTasks([...tasks]);
  };

  const handleNewTask = (data) => {
    if (data.newTask.length > 0) {
      const newTask = {
        description: data.newTask,
        completed: false,
      };
      TodoApiService()
        .createTask(activeUserId, selectedFolder.idFolder, newTask)
        .then((res) => {
          handleCreateTask(res);
        })
        .catch((err) => console.log(err));
    }
  };

  const handleUpdateTaskDescription = (task) => {
    const updateTasks = tasks.filter((elem) => elem.taskId !== task.taskId);
    console.log(updateTasks);
    updateTasks.push(task);
    setTasks([]);
    setTasks([...updateTasks]);
  };

  const handleViewFolderItems = (folder) => {
    setSelectedFolder(folder);
    setTasks([]);
    TodoApiService()
      .taskByFolder(folder.idUser, folder.idFolder)
      .then((res) => {
        console.log(res.data);
        setTasks(res.data);
        setIsAFolderSelected(true);
      });
  };

  const handleRemoveFolder = (folder) => {
    TodoApiService()
      .deleteFolder(folder.idFolder)
      .then((res) => {
        if (res.data) {
          setUserFolders(
            userFolders.filter((elem) => elem.idFolder !== folder.idFolder)
          );

          const tasksToShow = tasks.filter(
            (taskElem) => taskElem.folderId !== folder.idFolder
          );
          setTasks(tasksToShow);
        }
      });
  };

  const onSubmit = (data) => {
    if (submitButton === "searchUser") {
      handleSelectedUser(data);
    } else if (submitButton === "newFolder") {
      handleNewFolder(data);
    } else if (submitButton === "newTask") {
      handleNewTask(data);
    }
  };

  const isUserFound = userNotFound ? (
    <p>User not found, try with "luisterceroiii" &#128521;</p>
  ) : (
    ""
  );

  const folderTitle = !isAFolderSelected ? (
    <p>Folders</p>
  ) : (
    <p>Folders > {selectedFolder.name}</p>
  );

  return (
    <div className="App">
      <h1> TO - DO - APP </h1>
      <a
        href={"https://luisterceroiii.github.io/Luis-Espinoza-Navarrete/"}
        target="_blank"
      >
        {" "}
        By Luis Espinoza
      </a>

      <SearchByUsername
        username={username}
        onSubmit={onSubmit}
        handleSubmit={handleSubmit}
        register={register}
        setSubmitButton={setSubmitButton}
      />

      {isUserFound}
      {folderTitle}

      <div className={"foldersContainer"}>
        <Folders
          userFolders={userFolders}
          handleRemoveFolder={handleRemoveFolder}
          handleViewFolderItems={handleViewFolderItems}
          isAFolderSelected={isAFolderSelected}
          searchingFolders={searchingFolders}
        />
        <CreateNewFolder
          setSubmitButton={setSubmitButton}
          register={register}
          handleSubmit={handleSubmit}
          onSubmit={onSubmit}
          userFolders={userFolders}
        />
      </div>

      <div className={"tasksContainer"}>
        <Tasks
          isAFolderSelected={isAFolderSelected}
          handleUpdateTaskDescription={handleUpdateTaskDescription}
          setTasks={setTasks}
          tasks={tasks}
        />
        <CreateTask
          setSubmitButton={setSubmitButton}
          register={register}
          handleSubmit={handleSubmit}
          onSubmit={onSubmit}
          isAFolderSelected={isAFolderSelected}
        />
      </div>
    </div>
  );
};

export default App;
