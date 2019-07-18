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


					<div class = "container-fluid" id="navbarSupportedContent">
						<ul class="navbar-nav mr-auto">

							<li class="nav-item active">
								<a class="nav-link" href="/home" id = "navBarHome">Home <span class="sr-only">(current)</span></a>
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

						<div id = "listItemButton">
							<a href="/home" id="myButton">Logout</a>
						</div>
				    
					</div>
				</nav>


					<div className = "float-left" width = '400px' id = 'recentFiles'><h2>Recent files</h2></div>
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

				<div id = 'spaceDivHome'></div>

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
