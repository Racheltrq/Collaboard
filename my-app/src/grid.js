import React from "react"


class Grid extends React.Component{
	render(){
		return(
			<a href = "/file" style={{ textDecoration: 'none', color: 'black' }}>
				<div style = {{width: 206, height: 240, marginLeft: 30, marginBottom: 25, backgroundColor: "#EEDBD7", borderRadius: 3}}>
					<img src = {this.props.pic} class="rounded mx-auto d-block" style = {{width: 200, height: 200, margin: 4}}/>
					<p>Baby dragon image</p>
				</div>
			</a>
			)
	}
}

export default Grid