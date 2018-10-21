import React, { Component } from 'react';
import { Link } from "react-router-dom";

class FruitChat extends Component {
	constructor() {
		super();

		this.state = {
			messages: []
		}
	}

	render() {
		return (
			<div className="container">
				<h1>This is the fruit chat</h1>

				<div class="input-group">
					<input type="text" class="form-control" placeholder="Write message here ..." />
					<div class="input-group-append">
						<button type="submit" class="btn btn-primary" onClick={
							e => this.setState({
								messages: [...this.state.messages, "Message"]
							})
						}>Send</button>
					</div>
				</div>
				<div className="chat">
					<ul className="list-group-flush p-0">
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