import React from "react"

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Dropdown from "./dropDown"
import PopUp from "./popup"
import Help from "./help"

class Home extends React.Component{





	render(){
		return(
			<div>
				Welcome to Home page~
				<nav class="navbar navbar-expand-lg navbar-light bg-light">
				  <a class="navbar-brand" href="/">Collaboard</a>
				  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
				    <span class="navbar-toggler-icon"></span>
				  </button>

				  <div class="collapse navbar-collapse" id="navbarSupportedContent">
				    <ul class="navbar-nav mr-auto">

				      <li class="nav-item active">
				        <a class="nav-link" href="/home">Home <span class="sr-only">(current)</span></a>
				      </li>

				      <Dropdown />

					  <li class="nav-item active" style = {{margin: 8}}>
					  	<PopUp name = "Join" />
				      </li>

				      <li class="nav-item active">
				        <a class="nav-link" href="/home">Folders <span class="sr-only">(current)</span></a>
				      </li>

				      <li class="nav-item active">
				        <a class="nav-link" href="/home">Starred <span class="sr-only">(current)</span></a>
				      </li>

				      <li class="nav-item active" style = {{margin: 8}}>
					  	<Help name = "Help" />
				      </li>

				    </ul>
				    
				  </div>
				</nav>


			</div>

			)
	}
}

export default Home