import React from "react"
import {SketchField, Tools} from 'react-sketch';
import './css/file.css'

import Chat from './chat'
import voicePic from './voice chat icon.png'
import 'react-sliding-pane/dist/react-sliding-pane.css';

class File extends React.Component{
	

	render(){
		return(
			<div>
				<h1 id = 'filename'>Filename</h1>
				<a href="/home" className="myButton">Home</a>
				<div id = 'filenameDiv'/>
				<div id = "spaceDiv"/>
				<SketchField width='1024px' height='2000px' tool={Tools.Pencil} lineColor='black' lineWidth={3} backgroundColor= 'white'/>
				<img src = {voicePic} id = 'voiceButton'/>
				<Chat />
			</div>
			)
	}
}

export default File
