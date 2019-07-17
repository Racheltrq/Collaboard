import React from "react";
import "./css/help.css"
import Modal from "react-responsive-modal";

class Help extends React.Component{
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
				<a id = "HelpButton" onClick={this.onOpenModal}>Help</a>
				<Modal open={open} onClose={this.onCloseModal} center>
					<div>
						<h4>User Guide</h4>
						<button href = "/home" className="close" onClick={this.state.modalIsOpen = false}/>
						<h4>{this.state.modalIsOpen === true}</h4>
						<ul>
							<li>Click on "New" to choose to create your own file or folder.</li>
							<li>Click on "Join" to join a room with room id and password. Otherwise you have to be invited in order to join others' rooms. </li>
							<li>Click on "Folder" to see all the existing folders and select one among them.</li>
							<li>Click on "Starred" to see all the starred files.</li>
							<li>Click one of the files below to start editing!</li>
						</ul>
					</div>
				</Modal>
			</div>
		);
	}
}




export default Help
