import React from "react";

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import "./css/login.css"
import './setupProxy.js'


class Login extends React.Component{
	constructor() {
        super()
        this.state = {
            loading: false,
            character: {}
        }
    }
    
    componentDidMount() {
        this.setState({loading: true})
        fetch("/users")
            .then(response => response.json())
            .then(data => {
                this.setState({
                    loading: false,
                    character: data
                })
            })
        
    }

    
	render(){
		console.log("working...")
		console.log(JSON.stringify(this.state.character))
		const array = this.state.loading ? "loading..." : this.state.character
		
		var {status, character} = this.state
		const temp = character.length === 0 ? "Array has no item in it" : character.length
		const temp2 = character.constructor === Array ? "Is Array" : typeof character
		
		return(
			<div>
				
				<h1 className = "header" class="font-italic" id = 'welcome'> Welcome to Collaboard!</h1>
				<div className = "login" id = 'signUp'>
					<h2>Sign up:</h2>
					<form action = "/">
					  <label class = "row">
					    <p>Username: </p>
					    <input type="text" name="usr"/>
					    <br />
					  </label>

					  <label class = "row">
					    <p>Password: </p>
					    <input type="password" name="psw"/>
					  </label>

					  <label class = "row">
					  	<p>Comfirm your password: </p>
					    <input type="password" name="psw"/>
					  </label>

					  <input type="submit" value="Submit" name = "signup"/>
					</form>
				</div>

				<div className = "login" id = 'login'>
					<h2>Login:</h2>
					<form action = "/home">
					  <label class = "row">
					    <p>Username: </p>
					    <input type="text" name="usr" />
					    <br />
					  </label>

					  <label class = "row">
					    <p>Password: </p>
					    <input type="password" name="psw"/>
					  </label>
					  <input type="submit" value="Submit" name = "login"/>
					</form>
				</div>

				<div>
                	
                	{temp}
                	{temp2}
                	{character.type}
                	<ul>
                		<li>List:</li>

                		{character && Object.keys(character).map(user=>(
                			
                			
                			<li key = {user.id}>Name: {user.type}</li>
                			
                			))}

                	</ul>
                </div>
			</div>



			)
	}
}

export default Login