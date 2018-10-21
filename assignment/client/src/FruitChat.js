import React, { Component } from 'react';

class FruitChat extends Component {
	constructor() {
		super();

		this.state = {
			messages: []
		}
	}

	handleSubmit(message) {
		this.setState({
			messages: [...this.state.messages, message]
		})
	}

	render() {
		return (
			<div className="container">
				<h1>This is the fruit chat</h1>

				<form className="needs-validation" onSubmit={e => {
					e.preventDefault();
					this.handleSubmit("Button")
				}}>
					<div class="input-group">
						<input type="text" class="form-control" placeholder="Write message here ..." />
						<div class="input-group-append">
							<button type="submit" class="btn btn-primary">Send</button>
						</div>
					</div>
				</form>

				<div className="chat">
					<ul className="list-group-flush pl-0">
						{this.state.messages.map((m, i) =>
							<li className="list-group-item">{m + i}</li>
						)}
					</ul>
				</div>
			</div>
		)
	}
}

export default FruitChat;