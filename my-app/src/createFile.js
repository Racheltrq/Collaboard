import React from "react";
import "./css/createFile.css"
import ReactMultiSelectCheckboxes from "react-multiselect-checkboxes";


class CreateFile extends React.Component{
    render(){
        const options = [
            { label: 'Folder 1', value: 1},
            { label: 'Folder 2', value: 2},
            { label: 'Folder 3', value: 3},
            { label: 'Folder 4', value: 4},
            { label: 'Folder 5', value: 5},
            { label: 'Folder 6', value: 6},

        ];
        return(
            <div>
                <h1 id = "createFileHeader">Create Your own file</h1>
                <div class = "row" id = "createFileDiv">
                    <div id = "createFileForm">
                        <form action = "/home">
                            <div className="form-group">
                                <label htmlFor="exampleInputEmail1">Filename:</label>
                                <input type="filename" className="form-control" id="exampleInputEmail1"
                                       aria-describedby="emailHelp" placeholder="Filename"/>
                                <small id="emailHelp" className="form-text text-muted">An id will be generated for your file.
                                </small>
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputPassword1">Password:</label>
                                <input type="password" className="form-control" id="exampleInputPassword1"
                                       placeholder="Password"/>
                                <small id="emailHelp" className="form-text text-muted">Leave it open if you want to make the file public.</small>
                            </div>

                            <button type="submit" className="btn btn-primary">Submit</button>
                        </form>
                    </div>
                    <div id = "checkboxFile">
                        <h5>Please select the folders you want to include your files in:</h5>
                        <ReactMultiSelectCheckboxes options={options}/>
                    </div>
                </div>
            </div>
        )
    }
}




export default CreateFile
