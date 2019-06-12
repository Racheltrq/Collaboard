import React from "react";

function Login(){
	return(
		<div>
			<h1 className = "header"> Welcome!</h1>

			<div className = "login" style = {{float: 'left'}}>
				Login:
				<form>
				  <label>
				    Username:
				    <input type="text" name="usr" />
				  </label>
				</form>

				<form>
				  <label>
				    Password:
				    <input type="text" name="psw" />
				  </label>
				  <input type="submit" value="Submit" />
				</form>
			</div>

			<div className = "login" style = {{float: 'left'}}>
				Sign up:
				<form>
				  <label>
				    Username:
				    <input type="text" name="usr" />
				  </label>
				</form>

				<form>
				  <label>
				    Password:
				    <input type="text" name="psw" />
				  </label>
				  <input type="submit" value="Submit" />
				</form>
			</div>


		</div>
	)
}


export default Login