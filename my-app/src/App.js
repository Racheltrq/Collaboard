import React from "react";
import { BrowserRouter } from 'react-router-dom';
import Route from "react-router-dom/Route"
import Login from "./login"
import Signup from "./signup"

class App extends React.Component{

	render(){

	return(
		<BrowserRouter>
		<div>
			<h1 className = "header"> Welcome!</h1>

			<Login />

			<Signup />


		</div>
		</BrowserRouter>
	)

	}
}


export default App