import React from "react";

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import "./index.css"


class Login extends React.Component{


	render(){
		return(
			<div>
				<h1 className = "header" class="font-italic" style = {{fontSize:80}}> Welcome to Collaboard!</h1>
				<div className = "login" style = {{float: 'left', marginTop: 30}}>
					<h2>Sign up:</h2>
					<form action = "/home">
					  <label class = "row" style = {{marginLeft: 5}}>
					    Username: 
					    <input type="text" name="usr"/>
					    <br />
					  </label>

					  <label class = "row" style = {{marginLeft: 5}}>
					    Password: 
					    <input type="text" name="psw" />
					  </label>

					  <label class = "row" style = {{marginLeft: 5}}>
					    Comfirm your password: 
					    <input type="text" name="psw" />
					  </label>

					  <input type="submit" value="Submit" name = "signup"/>
					</form>
				</div>

				<div className = "login" style = {{float: 'left', marginTop: 35}}>
					<h2>Login:</h2>
					<form>
					  <label class = "row" style = {{marginLeft: 5}}>
					    Username: 
					    <input type="text" name="usr" />
					    <br />
					  </label>

					  <label class = "row" style = {{marginLeft: 5}}>
					    Password: 
					    <input type="text" name="psw" />
					  </label>
					  <input type="submit" value="Submit" name = "login"/>
					</form>
				</div>
			</div>
			)
	}
}

export default Login