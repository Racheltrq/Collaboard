import React from "react"
import {SketchField, Tools} from 'react-sketch';

class File extends React.Component{
	render(){
		return(
			<div>
				<div style = {{height: 70, backgroundColor: 'white'}}>
					<h3 style= {{marginLeft: 15}}>Filename</h3>
				</div>
				<SketchField width='1024px' height='680px' tool={Tools.Pencil} lineColor='black' lineWidth={3} style = {{margin: 10, backgroundColor: "white"}}/>
			</div>
			)
	}
}

export default File