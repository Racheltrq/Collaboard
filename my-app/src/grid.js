import React from "react"


class Grid extends React.Component{
	render(){
		return(
			<div style = {{width: 206, height: 240, marginLeft: 30, marginBottom: 25, borderStyle: "solid"}}>
				<img src = {this.props.pic} style = {{width: 200, height: 200}}/>
				<p>Baby dragon image</p>
			</div>
			)
	}
}

export default Grid