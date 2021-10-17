import React, {useEffect} from 'react';
import FoldersView from "./FoldersView";

const Folders = ({folders}) => {

    useEffect(() => {

        console.log("13123123",folders)
    },[folders])
    return (
        <FoldersView folders={folders}/>
    );
};

export default Folders;