import React from "react";
import { BrowserRouter} from 'react-router-dom';
import Route from "react-router-dom/Route"
import Login from "./login"
import Home from "./home"
import File from "./file"

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';


class App extends React.Component{

	render(){

	return(
		<BrowserRouter>
		<div>
			
			
			<Route path = "/" exact component = {Login} />
			<Route path = "/home" exact component = {Home} />
			<Route path = "/file" exact component = {File} />


		</div>
		</BrowserRouter>
	)

	}
}


export default App
