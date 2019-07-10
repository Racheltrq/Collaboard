import React from "react";
import Popup from "reactjs-popup";
import './css/history.css'


class History extends React.Component{
	render(){
		return(
			<div>
				  <Popup trigger={<div className = "button" id = 'historyButton'><h2 id = 'text-H'>H</h2></div>} modal>
				    
				  	<div>
				  		<h4>History</h4>
				  	</div>
				  </Popup>
			</div>

			)
	}
}

export default History
