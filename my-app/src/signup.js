import React from "react";

class Signup extends React.Component{
	render(){
		return(
			<div className = "login" style = {{float: 'left'}}>
				<h2>Login:</h2>
				<form>
				  <label>
				    Username: 
				    <input type="text" name="usr" />
				    <br />
				  </label>

				  <label>
				    Password: 
				    <input type="text" name="psw" />
				  </label>
				  <input type="submit" value="Submit" name = "login"/>
				</form>
			</div>

			)
	}
}

export default Signup