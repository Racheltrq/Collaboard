import React from "react";
import { BrowserRouter, Link, Redireact} from 'react-router-dom';
import Route from "react-router-dom/Route"
import Login from "./login"
import Home from "./home"

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';


class App extends React.Component{

	render(){

	return(
		<BrowserRouter>
		<div>
			
			
			<Route path = "/" exact component = {Login} />
			<Route path = "/home" exact component = {Home} />


		</div>
		</BrowserRouter>
	)

	}
}


export default App