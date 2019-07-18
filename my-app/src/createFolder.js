import React from "react";
import "./css/createFolder.css"
import ReactMultiSelectCheckboxes from 'react-multiselect-checkboxes'

class CreateFolder extends React.Component{

    render(){
        const options = [
            { label: 'File 1', value: 1},
            { label: 'File 2', value: 2},
            { label: 'File 3', value: 3},
            { label: 'File 4', value: 4},
            { label: 'File 5', value: 5},
            { label: 'File 6', value: 6},

        ];
        return(
            <div class = "row">
                <h1 id = "createFolderHeader">Create Your own folder</h1>
                <div class = "row">
                    <div id = "folderFormDiv">
                        <form action = "/home">
                            <div className="form-group">
                                <label htmlFor="exampleInputEmail1">Folder name:</label>
                                <input type="email" className="form-control" id="exampleInputEmail1"
                                       aria-describedby="emailHelp" placeholder="Foldername"/>
                                <small id="emailHelp" className="form-text text-muted">Please enter the name of your folder.
                                </small>
                            </div>

                            <button type="submit" className="btn btn-primary">Submit</button>
                        </form>
                    </div>
                    <div id = "checkboxDiv">
                        <h5>Please select the files you want to include in your folder</h5>
                        <ReactMultiSelectCheckboxes options={options}/>
                    </div>
                </div>
            </div>
        )
    }
}




export default CreateFolder
