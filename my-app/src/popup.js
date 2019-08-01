import React from "react";
import Modal from "react-responsive-modal";
import './css/popup.css'


class PopUp extends React.Component{
	state = {
		open: false
	};

	onOpenModal = () => {
		this.setState({ open: true });
	};

	onCloseModal = () => {
		this.setState({ open: false });
	};

	render() {
		const { open } = this.state;
		return (
			<div>
				<a id = "joinButton" onClick={this.onOpenModal}>Join</a>
				<Modal open={open} onClose={this.onCloseModal} center>
					<div>
						<form action="/home">
							<label className="row">
								<p id="input">Room id: </p>
								<input type="text" name="usr"/>
								<br/>
							</label>

							<label class = "row">
								<p id = "input">Password: </p>
								<input type="text" name="psw"/>
							</label>
							<input type="submit" value="Submit" name = "login" id = "submit"/>
						</form>
					</div>
				</Modal>
			</div>
		);
	}
}

export default PopUp
