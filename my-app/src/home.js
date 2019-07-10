import React from "react"

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './css/home.css'
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

					  <li class="nav-item active" id = 'navBarItemJoin'>
					  	<PopUp name = "Join" />
				      </li>

				      <Dropdown title = "Folders" content = {folders}/>

				      <li class="nav-item active" id = 'navBarItemStarred'>
				        <a class="nav-link" href="/home">Starred <span class="sr-only">(current)</span></a>
				      </li>

				      <li class="nav-item active" id = 'navBarItemHelp'>
					  	<Help name = "Help" />
				      </li>

				    </ul>
				    
				  </div>
				</nav>

				<div class = "row">
					<h2 id = 'recentFiles'>Recent files</h2>
					<div class = "row" id = 'upperRightButtons'>

						<div class = "row" id = 'gridToListView'>
							<div id = 'gridTopLeft'/>
							<div id = 'gridTopRight'/>
							<div id = 'gridBotLeft'/>
							<div id = 'gridBotRight'/>

						</div>
						<div class = "line" id = 'gridToListView'>
						<div id = 'description'/>
						</div>
						
						<History />
					</div>
				</div>

				<div class = "row" id = 'fileList'>
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
