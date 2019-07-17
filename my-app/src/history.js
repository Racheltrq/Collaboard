import React from "react";
import './css/history.css'
import Modal from "react-responsive-modal";

class History extends React.Component{
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
				<a id = "HistoryButton" onClick={this.onOpenModal}><h2 id = 'text-H'>H</h2></a>
				<Modal open={open} onClose={this.onCloseModal} center>
					<div id = "HistoryModal">
						<h4>History</h4>
						<button className="close" onClick={this.state.modalIsOpen = false}/>

					</div>
				</Modal>
			</div>
		);
	}
}



export default History
