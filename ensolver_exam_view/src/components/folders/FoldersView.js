import React, {useEffect} from 'react';
import Folder from "../folder/Folder";

const FoldersView = ({folders}) => {
    useEffect(() => {
        console.log("aljshdkasj",folders)
    }, [folders])

    const foldersView = folders.map((folder,i)=> {
        return(
            <p key={i}> - {folder.name}</p>
        )
    })
    return (
        <>{foldersView}</>
    );
};

export default FoldersView;