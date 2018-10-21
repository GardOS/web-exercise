import React, { Component } from 'react';

class FruitChat extends Component {
	constructor() {
		super();

		this.state = {
			message: '',
			messages: []
		}
	}

	handleSubmit() {
		this.setState({messages: [...this.state.messages, this.state.message]})
		document.getElementById("messageInput").value = "";
	}

	render() {
		return (
			<div className="container">
				<h1>This is the fruit chat</h1>

				<form className="needs-validation" onSubmit={e => {
					e.preventDefault();
					this.handleSubmit(e.target.value)
				}}>
					<div class="input-group">
						<input
							id="messageInput"
							type="text"
							class="form-control"
							placeholder="Write message here ..."
							onChange={e => this.setState({ message: e.target.value })} />
						<div class="input-group-append">
							<button type="submit" class="btn btn-primary">Send</button>
						</div>
					</div>
				</form>

				<div className="chat">
					<ul className="list-group-flush pl-0">
						{this.state.messages.map((m, i) =>
							<li className="list-group-item">{m}</li>
						)}
					</ul>
				</div>
			</div>
		)
	}
}

export default FruitChat;