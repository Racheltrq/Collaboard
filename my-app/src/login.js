import React from "react";

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
					<h2 id = "headerSignUp">Sign up:</h2>
					<form>
						<div className="form-group">
							<label htmlFor="exampleInputEmail1">Email address</label>
							<input type="email" className="form-control" id="exampleInputEmail1"
								   aria-describedby="emailHelp" placeholder="Enter email"/>
								<small id="emailHelp" className="form-text text-muted">We'll never share your email with
									anyone else.
								</small>
						</div>
						<div className="form-group">
							<label htmlFor="exampleInputPassword1">Password</label>
							<input type="password" className="form-control" id="exampleInputPassword1"
								   placeholder="Password"/>
						</div>
						<div className="form-group">
							<label htmlFor="exampleInputPassword1">Confirm your password</label>
							<input type="password" className="form-control" id="exampleInputPassword1"
								   placeholder="Confirm your Password"/>
						</div>
						<button id = "submitButton" type="submit" className="btn btn-primary">Submit</button>
					</form>
				</div>

				<div className = "login" id = 'login'>
					<h2 id = "headerSignUp">Login:</h2>
					<form action = "/home">
						<div className="form-group">
							<label htmlFor="exampleInputEmail1">Email address</label>
							<input type="email" className="form-control" id="exampleInputEmail1"
								   aria-describedby="emailHelp" placeholder="Enter email"/>
							<small id="emailHelp" className="form-text text-muted">We'll never share your email with
								anyone else.
							</small>
						</div>
						<div className="form-group">
							<label htmlFor="exampleInputPassword1">Password</label>
							<input type="password" className="form-control" id="exampleInputPassword1"
								   placeholder="Password"/>
						</div>
						<button id = "submitButton" type="submit" className="btn btn-primary">Submit</button>
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