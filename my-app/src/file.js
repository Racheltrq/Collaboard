import React from "react"
import {SketchField, Tools} from 'react-sketch';


import Chat from './chat'
import './css/file.css'

class File extends React.Component{
	

	render(){
		return(
			<div>
				<div id = 'filenameDiv'>
					<h3 id = 'filenameHeader'>Filename</h3>
				</div>
				<div id = 'spaceDiv'/>
				<SketchField width='1024px' height='680px' tool={Tools.Pencil} lineColor='black' lineWidth={3} backgroundColor = 'white'/>
				<Chat />
			</div>
			)
	}
}

export default File
