import React from "react"
import {SketchField, Tools} from 'react-sketch';
import './css/file.css'

import Chat from './chat'
import 'react-sliding-pane/dist/react-sliding-pane.css';

class File extends React.Component{
	

	render(){
		return(
			<div>
				<div id = 'filenameDiv'>
					<h3 id = 'filename'>Filename</h3>
				</div>
				<div id = "spaceDiv"/>
				<SketchField width='1024px' height='680px' tool={Tools.Pencil} lineColor='black' lineWidth={3} backgroundColor= 'white'/>
				<Chat />
			</div>
			)
	}
}

export default File
