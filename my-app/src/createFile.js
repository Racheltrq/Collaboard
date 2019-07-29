import React from "react";
import "./css/createFile.css"


class CreateFile extends React.Component{
    render(){
        return(
            <div>
                <h1>Create Your own file</h1>
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
        )
    }
}




export default CreateFile
