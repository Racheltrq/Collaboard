import React from "react"

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Dropdown from "./dropDown"
import PopUp from "./popup"
import Help from "./help"
import drag from "./drag.png"
import Grid from "./grid"
import History from "./history"

let folders = ["folder1", "folder2", "folder3"]

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

				      <Dropdown title = "New" content = "none"/>

					  <li class="nav-item active" style = {{margin: 8}}>
					  	<PopUp name = "Join" />
				      </li>

				      <Dropdown title = "Folders" content = {folders}/>

				      <li class="nav-item active" style = {{marginLeft: 24}}>
				        <a class="nav-link" href="/home">Starred <span class="sr-only">(current)</span></a>
				      </li>

				      <li class="nav-item active" style = {{margin: 8}}>
					  	<Help name = "Help" />
				      </li>

				    </ul>
				    
				  </div>
				</nav>

				<div class = "row">
					<h2 style = {{margin: 15, width: 1200}}>Recent files</h2>
					<div class = "row" style = {{margin: 15, width: 200, height: 50}}>

						<div class = "row" style = {{border: "solid", width: 45, height: 45, marginRight: 14}}>
							<div style = {{width: 15, height: 15, marginLeft: 3, marginTop: 3, border: 'solid'}}/>
							<div style = {{width: 15, height: 15, marginLeft: 2, marginTop: 3, border: 'solid'}}/>
							<div style = {{width: 15, height: 15, marginLeft: 3, border: 'solid'}}/>
							<div style = {{width: 15, height: 15, marginLeft: 2, border: 'solid'}}/>

						</div>
						<div class = "line" style = {{border: "solid", width: 45, height: 45, marginRight: 14}}>
						<div style = {{width: 42, height: 35, borderBottom: 'solid', position: 'absolute'}}/>
						</div>
						
						<History />
					</div>
				</div>

				<div class = "row" style = {{margin: 15}}>
					<Grid pic = {drag}/>
					<Grid pic = {drag}/>
					<Grid pic = {drag}/>
					<Grid pic = {drag}/>
					<Grid pic = {drag}/>
					<Grid pic = {drag}/>
					<Grid pic = {drag}/>
					<Grid pic = {drag}/>
					<Grid pic = {drag}/>
					<Grid pic = {drag}/>
					<Grid pic = {drag}/>
					<Grid pic = {drag}/>
					<Grid pic = {drag}/>
					<Grid pic = {drag}/>
				</div>


			</div>

			)
	}
}

export default Home