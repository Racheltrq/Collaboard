import React from "react";
import axios from 'axios';

import "./css/login.css"
import './setupProxy.js'


class Login extends React.Component{
	constructor() {
        super()
        this.state = {
            loading: false,
            character: {},
			email: "",
			psw: "",
			small: "We'll never share your email with anyone else.",
			smallColor: "black"
        }
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    componentDidMount() {
        this.setState({loading: true})
    }

	handleChange(event) {
		this.setState({ [event.target.name]: event.target.value })
	}

	handleSubmit(event) {
		event.preventDefault();
		const { email, psw } = this.state;
		const that = this;
		fetch('http://localhost:3003/users' , {
			method: "POST",
			headers: {
				'Content-type': 'application/json'
			},
			body: JSON.stringify({email: email, psw: psw})
		})

			.then(function(response){
				console.log("Testing...")
				console.log("response: ", response.status)
				if (response.status === 400){
					that.setState({
						small: "This email has been used. Please choose another one.",
						smallColor: "red"
					})
				}
				else{
					alert("Success!")
				}
			})
	}


    
	render(){
		const style = {
			warning: {
				color: this.smallColor
			}
		}
		return(
			<div>
				
				<h1 className = "header" class="font-italic" id = 'welcome'> Welcome to Collaboard!</h1>
				<div className = "login" id = 'signUp'>
					<h2 id = "headerSignUp">Sign up:</h2>
					<form onSubmit={this.handleSubmit}>
						<div className="form-group">
							<label htmlFor="exampleInputEmail1">Email address</label>
							<input type="email"
								   name = "email"
								   className="form-control"
								   id="exampleInputEmail1"
								   aria-describedby="emailHelp"
								   placeholder="Enter email"
								   noValidate
								   onChange={this.handleChange}/>
								<small id="emailHelp" className="form-text text-muted" color = "white">{this.state.small}
								</small>
						</div>
						<div className="form-group">
							<label htmlFor="exampleInputPassword1">Password</label>
							<input type="password"
								   name = "psw"
								   className="form-control"
								   id="exampleInputPassword1"
								   placeholder="Password"
								   noValidate
								   onChange={this.handleChange}/>
						</div>
						<div className="form-group">
							<label htmlFor="exampleInputPassword1">Confirm your password</label>
							<input type="password"
								   className="form-control"
								   id="exampleInputPassword1"
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

			</div>



			)
	}
}

export default Login