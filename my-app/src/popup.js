import React from "react";
import Popup from "reactjs-popup";
import './css/popup.css'


class PopUp extends React.Component{
	render(){
		return(
			<div>
				<Popup trigger={<li className="button" id = "popupJoinRoom"> {this.props.name} </li>} modal>

					<div>
						<form action = "/home">
							<label class = "row">
								<p id = "input">Room id: </p>
								<input type="text" name="usr" />
								<br />
							</label>

							<label class = "row">
								<p id = "input">Password: </p>
								<input type="text" name="psw"/>
							</label>
							<input type="submit" value="Submit" name = "login" id = "submit"/>
						</form>
					</div>
				</Popup>
			</div>

			)
	}
}

export default PopUp
