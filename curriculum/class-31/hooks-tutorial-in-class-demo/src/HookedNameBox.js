import React, { useState, useEffect } from "react";
import Row from "./Row.js";

export default function HookedNameBox(props) {
	// const [getter, setter] = useState(init);
	const [firstName, setFirstName] = useState("John");
	const [lastName, setLastName] = useState("Doe");
	const [favoriteColor, setFavoriteColor] = useState("blue");
	const [windowWidth, setWindowWidth] = useState(window.outerWidth);

	useEffect(() => {
		document.title = firstName + " " + lastName;
	}, [firstName, lastName]);

	useEffect(() => {
		window.addEventListener("resize", handleResize);

		return () => {
			window.removeEventListener("resize", handleResize);
		};
	});

	function changeFirstName(e) {
		console.log("change!");
		setFirstName(e.target.value);
	}

	function changeLastName(e) {
		setLastName(e.target.value);
	}

	function handleResize(e) {
		console.log("resized!");
		setWindowWidth(window.outerWidth);
	}

	function changeFavColor(e) {
		setFavoriteColor(e.target.value);
	}

	return (
		<div
			style={{
				border: "4px solid black",
				borderColor: favoriteColor
			}}
		>
			<h4>I'm a Class!</h4>
			<Row label="First Name">
				<input value={firstName} onChange={changeFirstName} />
			</Row>

			<Row label="Last Name">
				<input value={lastName} onChange={changeLastName} />
			</Row>

			<Row label="Favorite Color">
				<input value={favoriteColor} onChange={changeFavColor} />
			</Row>

			<h4>
				Nice to meet you {firstName} {lastName}!
			</h4>

			<p>Your window width is: {windowWidth}</p>
		</div>
	);
}
