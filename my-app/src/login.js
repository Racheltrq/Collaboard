import React from "react";

function Login(){
	return(
		<div>
			<h1 className = "header"> Welcome!</h1>

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

			<div className = "login" style = {{float: 'left'}}>
				<h2>Sign up:</h2>
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


		</div>
	)
}


export default Login