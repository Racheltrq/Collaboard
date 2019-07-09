import React from "react";
import Popup from "reactjs-popup";


class Help extends React.Component{
	render(){
		return(
			<div>
				  <Popup trigger={<li className="button"> {this.props.name} </li>} modal>
				    
				  	<div>
				  		<h4>User Guide</h4>
				  		<ul>
					  		<li>Click on "New" to choose to create your own file or folder.</li>
					  		<li>Click on "Join" to join a room with room id and password. Otherwise you have to be invited in order to join others' rooms. </li>
					  		<li>Click on "Folder" to see all the existing folders and select one among them.</li>
					  		<li>Click on "Starred" to see all the starred files.</li>
							<li>Click one the files below to start editing!</li>
						</ul>
				  	</div>
				  </Popup>
			</div>

			)
	}
}

export default Help
