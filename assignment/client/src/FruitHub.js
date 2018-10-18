import React, { Component } from 'react';
import { Link } from "react-router-dom";

class FruitHub extends Component {
	constructor() {
		super();

		this.state = {
			messages: []
		}
	}

	render() {
		return (
			<div className="container" >
				<h1>This is the fruit hub</h1>

				{this.state.messages.map((m, i) =>
					<div>{m}</div>
				)}
				<h4>Take me <Link to={"/"}><u>back</u></Link></h4>

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
			</div>
		)
	}
}

export default FruitHub;