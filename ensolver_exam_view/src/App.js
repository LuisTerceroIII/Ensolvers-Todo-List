import './App.css';
import React, {useState, useEffect} from "react";
import {useForm} from "react-hook-form";
import Loader from "react-loader-spinner";
import Task from "./components/Task/Task";
import {TodoApiService} from "./services/TodoApiService";

function App() {
    const {register, handleSubmit} = useForm();

    const [submitButton, setSubmitButton] = useState("userSearch");
    const [username, setUsername] = useState("luisterceroiii");
    const [activeUserId, setActiveUserId] = useState(0);
    const [searchingFolders, setSearchingFolders] = useState(false)
    const [userFolders, setUserFolders] = useState([])
    const [isAFolderSelected, setIsAFolderSelected] = useState(false)
    const [selectedFolder, setSelectedFolder] = useState('')
    const [tasks, setTasks] = useState([])
    const [task, setTask] = useState({
        user_id: 1,
        folder_id: 2,
        description: "Smile",
        completed: true
    })
    const [taskDescriptionUpdate, setTaskDescriptionUpdate] = useState("")
    const [activeEditTask, setActiveEditTask] = useState({
        taskId: 0,
        activeEdition: false
    })

    const [userNotFound, setUSerNotFound] = useState(false)


    useEffect(() => {
        console.log("render")
    }, [username, userFolders, searchingFolders])


    const onSubmit = (data) => {
        console.log(submitButton)
        console.log(data)
        if (submitButton === "searchUser") {
            setSearchingFolders(true)
            const receivedUsername = data.username
            TodoApiService().searchUser(receivedUsername).then(res => {
                console.log(res.data)
                setActiveUserId(res.data[0].idUser)
                setUserFolders(res.data)
                setSearchingFolders(false)
                setUsername("")
                setUSerNotFound(false)

            }).catch(err => {
                setUSerNotFound(true)
            })
        } else if (submitButton === "newFolder") {
            if (data.newFolder.length > 0)
                TodoApiService().newFolder(activeUserId,data.newFolder)
                    .then(res => {
                        if(res.data) {
                            console.log(res.data)
                            const newFolderCreate = res.data
                            userFolders.push(newFolderCreate)
                            setUserFolders([...userFolders])
                        }

                    })



            console.log(userFolders)
        } else if (submitButton === "newTask") {
            if(data.newTask.length > 0) {
                const newTask = {
                    description : data.newTask,
                    completed : false
                }
                TodoApiService().createTask(activeUserId,selectedFolder.idFolder,newTask)
                    .then((res) => {
                        console.log("RESSS:::",res)
                        tasks.push(res.data)
                        setTasks([...tasks])
                    }).catch((err)=> console.log(err))


            }
        }

    };

    const updateTaskDescription = (task) => {
        const updateTasks = tasks.filter(elem => elem.taskId !== task.taskId)
        console.log(updateTasks)
        updateTasks.push(task)
        setTasks([])
        setTasks([...updateTasks])
    }

    return (
        <div className="App">

            <h1> TO-DO - APP </h1>

            <form onSubmit={handleSubmit(onSubmit)}>
                <label> Search folders by user name</label>
                <input defaultValue={username}
                       {...register("username")}
                />
                <button type={"submit"} onClick={() => setSubmitButton("searchUser")}>Search</button>
            </form>

            {userNotFound ? <p>User not found, try with "luisterceroiii" &#128521;</p> : ""}
            {!isAFolderSelected ? <p>Folders</p> : <p>Folders > {selectedFolder.name}</p>}

            <div className={"foldersContainer"}>
                {searchingFolders && !isAFolderSelected ? <Loader
                        type="TailSpin"
                        color="#00BFFF"
                        height={40}
                        width={40}
                        timeout={3000} //3 secs
                    />
                    : userFolders.map((folder, i) => {
                        return (
                            <p key={i}> - {folder.name} <a href={"#"} onClick={() => {
                                console.log("VIEWW", folder)
                                setSelectedFolder(folder)
                                setTasks([])
                                TodoApiService().taskByFolder(folder.idUser, folder.idFolder)
                                    .then(res => {
                                        console.log(res.data)
                                        setTasks(res.data)
                                        setIsAFolderSelected(true)
                                    })

                            }}>View items</a> <a href={"#"} onClick={() => {
                                console.log(folder.idFolder)
                                TodoApiService().deleteFolder(folder.idFolder).then(res => {
                                    if(res.data) {
                                        setUserFolders(userFolders.filter(elem => elem.idFolder !== folder.idFolder))
                                    }
                                })
                            }}>Remove</a></p>
                        )
                    })


                }
                {userFolders.length > 0 ? <form onSubmit={handleSubmit(onSubmit)}>
                    <input placeholder={"new Folder"}
                           {...register("newFolder")}/>
                    <button onClick={() => setSubmitButton("newFolder")}>New Folder</button>
                </form> : ""}

            </div>

            <div className={"tasksContainer"}>
                {isAFolderSelected ?
                    tasks.map((task, i) => {
                            return <Task key={i} id={task.taskId} checked={task.completed} description={task.description} task={task} tasks={tasks} setTasks={setTasks} updateTaskDescription={updateTaskDescription}/>
                        })
                     : ""
                }

                {isAFolderSelected ? <form onSubmit={handleSubmit(onSubmit)}>
                    <input placeholder={"new Task"}
                           {...register("newTask")}/>
                    <button onClick={() => setSubmitButton("newTask")}>New Task</button>
                </form> : ""}
            </div>
        </div>
    );
}

export default App;
