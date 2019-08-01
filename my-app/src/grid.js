import React from "react"
import './css/grid.css'


class Grid extends React.Component{
	render(){
		return(
			<a href = "/file" id = 'text'>
				<div id = 'fileDiv'>
					<img src = {this.props.pic} alt = "file" class="rounded mx-auto d-block" id = 'img'/>
					<p>Baby dragon image</p>
				</div>
			</a>
			)
	}
}

export default Grid
