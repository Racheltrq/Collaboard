import React from "react"
import {SketchField, Tools} from 'react-sketch';

import Chat from './chat'
import 'react-sliding-pane/dist/react-sliding-pane.css';

class File extends React.Component{
	

	render(){
		return(
			<div>
				<div style = {{height: 70, backgroundColor: 'white'}}>
					<h3 style= {{marginLeft: 15}}>Filename</h3>
				</div>
				<SketchField width='1024px' height='680px' tool={Tools.Pencil} lineColor='black' lineWidth={3} style = {{margin: 10, backgroundColor: "white"}}/>
				<Chat />
			</div>
			)
	}
}

export default File