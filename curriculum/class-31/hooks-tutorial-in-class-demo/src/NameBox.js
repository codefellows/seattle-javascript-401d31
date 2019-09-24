import React from "react";
import Row from "./Row.js";

export default class NameBox extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			firstName: "John",
			lastName: "Doe",
			favoriteColor: "blue",
			windowWidth: window.outerWidth
		};
	}

	componentDidMount() {
		document.title = this.state.firstName + " " + this.state.lastName;
		window.addEventListener("resize", this.handleResize);
	}

	componentDidUpdate() {
		document.title = this.state.firstName + " " + this.state.lastName;
	}

	componentWillUnmount() {
		window.removeEventListener("resize", this.handleResize);
	}

	// save the window width when it changes
	handleResize = e => {
		console.log(this.state.windowWidth);
		this.setState({ windowWidth: window.outerWidth });
	};

	// save the first name when it changes
	changeFirstName = e => {
		this.setState({ firstName: e.target.value });
	};

	changeLastName = e => {
		this.setState({ lastName: e.target.value });
	};

	changeFavColor = e => {
		this.setState({ favoriteColor: e.target.value });
	};

	render() {
		return (
			<div
				style={{
					border: "4px solid black",
					borderColor: this.state.favoriteColor
				}}
			>
				<h4>I'm a Class!</h4>
				<Row label="First Name">
					<input
						value={this.state.firstName}
						onChange={this.changeFirstName}
					/>
				</Row>

				<Row label="Last Name">
					<input
						value={this.state.lastName}
						onChange={this.changeLastName}
					/>
				</Row>

				<Row label="Favorite Color">
					<input
						value={this.state.favoriteColor}
						onChange={this.changeFavColor}
					/>
				</Row>

				<h4>
					Nice to meet you {this.state.firstName}{" "}
					{this.state.lastName}!
				</h4>

				<p>Your window width is: {this.state.windowWidth}</p>
			</div>
		);
	}
}
