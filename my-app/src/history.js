import React from "react";
import Popup from "reactjs-popup";


class History extends React.Component{
	render(){
		return(
			<div>
				  <Popup trigger={<div className = "button" style = {{border: "solid", width: 45, height: 45}}><h2 style = {{font: 10, textAlign: 'center'}}>H</h2></div>} modal>
				    
				  	<div>
				  		<h4>History</h4>
				  	</div>
				  </Popup>
			</div>

			)
	}
}

export default History