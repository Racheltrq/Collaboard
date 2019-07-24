import React from "react"
import {SketchField, Tools} from 'react-sketch';
import { SketchPicker } from 'react-color';
import Modal from "react-responsive-modal";

import './css/file.css'

import Chat from './chat'
import voicePic from './voice chat icon.png'
import 'react-sliding-pane/dist/react-sliding-pane.css';

class File extends React.Component{
	state = {
		open: false,
		penColor: 'black',
		tool: Tools.Pencil,
		toolBox: ["Pencil", "Select", "Circle", "Rectangle", "Pan"]
	};

	handleChangeComplete = (color) => {
		this.setState({ penColor: color.hex });
	};

	handleChangeTools = (item) => {
		this.setState({tool: item});
		console.log("ChosenTool: ", this.state.tool)
	};

	onOpenModal = () => {
		this.setState({ open: true });
	};

	onCloseModal = () => {
		this.setState({ open: false });
	};


	render(){
		const { open } = this.state;
		const {tool} = this.state;
		return(
			<div>
				<h1 id = 'filename'>Filename</h1>
				<a href="/home" className="myButton">Home</a>
				<div id = 'filenameDiv'/>
				<div id = "spaceDiv"/>
				<div class = "row">
					<button class = "row" id="buttonForCanvas" onClick={this.onOpenModal}>
						<div id = "colorBox" style = {{backgroundColor: this.state.penColor}}></div>
						<div id = "colorText">Color</div>
					</button>

					<button id = 'dropDownButton' onClick={()=>this.setState({tool: Tools.Pencil})}> Pencil</button>
					<button id = 'dropDownButton' onClick={()=>this.setState({tool: Tools.Select})}> Select</button>
					<button id = 'dropDownButton' onClick={()=>this.setState({tool: Tools.Circle})}> Circle</button>
					<button id = 'dropDownButton' onClick={()=>this.setState({tool: Tools.Rectangle})}> Rectangle</button>
					<button id = 'dropDownButton' onClick={()=>this.setState({tool: Tools.Pan})}> Pan</button>




					{console.log("Chosen Tool: ", this.state.tool)}

				</div>

				<Modal open={open} onClose={this.onCloseModal} center showCloseIcon = {false}>
					<SketchPicker
						color={ this.state.penColor }
						onChangeComplete={ this.handleChangeComplete }
						right = "20px"
					/>
				</Modal>

				<SketchField width='1024px' height='2000px' tool={tool} lineColor={this.state.penColor} lineWidth={3} backgroundColor= 'white'/>
				<img src = {voicePic} id = 'voiceButton'/>
				<Chat />
			</div>
			)
	}
}

export default File
