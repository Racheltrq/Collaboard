import React from "react";
import Popup from "reactjs-popup";


class PopUp extends React.Component{
	render(){
		return(
			<div>
				  <Popup trigger={<li className="button"> {this.props.name} </li>} modal>
				    
				  	<div>
				  		<form action = "/home">
					  <label class = "row" style = {{marginLeft: 5}}>
					    <p style = {{marginTop: 12}}>Room id: </p>
					    <input type="text" name="usr" />
					    <br />
					  </label>

					  <label class = "row" style = {{marginLeft: 5}}>
					    <p style = {{marginTop: 12}}>Password: </p>
					    <input type="text" name="psw" />
					  </label>
					  <input type="submit" value="Submit" name = "login"/>
					</form>
				  	</div>
				  </Popup>
			</div>

			)
	}
}

export default PopUp