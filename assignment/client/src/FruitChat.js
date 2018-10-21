import React, { Component } from 'react';

class FruitChat extends Component {
	constructor() {
		super();

		this.state = {
			ws: null,
			messageInput: '',
			messages: []
		}
	}

	componentWillMount() {
		const url = 'ws://localhost:8080';
		const ws = new WebSocket(url);

		this.setState({ ws: ws });

		ws.onopen = () => {
			console.log('Connected to chat');
		};

		ws.onmessage = message => {
			this.setState({
				messages: [message.data, ...this.state.messages]
			});
		};
	}

	handleSubmit() {
		this.state.ws.send(this.state.messageInput);
		this.setState({ messageInput: "" });
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
					<div className="input-group">
						<input
							required
							id="messageInput"
							type="text"
							className="form-control"
							placeholder="Write message here ..."
							onChange={e => this.setState({ messageInput: e.target.value })} />
						<div className="input-group-append">
							<button type="submit" className="btn btn-primary">Send</button>
						</div>
					</div>
				</form>

				<div className="chat">
					<ul className="list-group-flush pl-0">
						{this.state.messages.map((m, i) =>
							<li key={i} className="list-group-item">{m}</li>
						)}
					</ul>
				</div>
			</div>
		)
	}
}

export default FruitChat;