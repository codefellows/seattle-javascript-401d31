import React, { useEffect, useReducer } from "react";
import Row from "./Row.js";

const initialState = {
	firstName: "John",
	lastName: "Doe",
	favoriteColor: "blue",
	windowWidth: window.outerWidth
};

function reducer(state, action) {
	// state = the current state, before any changes are made
	// action = object with a {type: "", data: {} }

	switch (action.type) {
		case "update first name":
			console.log("NO!");
			return state;
		case "update last name":
			return { ...state, lastName: action.data };
		case "update favorite color":
			return { ...state, favoriteColor: action.data };
		case "update window width":
			return { ...state, windowWidth: action.data };
		default:
			throw new Error();
	}

	// return a changed state
}

export default function ReducerNameBox(props) {
	// state - object
	// dispatch - function that tells the reducer more about how the state changed and helps the reducer go somewhere
	// reducer - function, goes where the dispatch recommends

	// const [getter, setter] = useState(init);
	// const [firstName, setFirstName] = useState("John");
	// const [lastName, setLastName] = useState("Doe");
	// const [favoriteColor, setFavoriteColor] = useState("blue");
	// const [windowWidth, setWindowWidth] = useState(window.outerWidth);

	const [state, dispatch] = useReducer(reducer, initialState);

	useEffect(() => {
		document.title = state.firstName + " " + state.lastName;
	}, [state.firstName, state.lastName]);

	useEffect(() => {
		window.addEventListener("resize", handleResize);

		return () => {
			window.removeEventListener("resize", handleResize);
		};
	});

	function changeFirstName(e) {
		console.log("change!");
		dispatch({ type: "update first name", data: e.target.value });
		//setFirstName(e.target.value);
	}

	function changeLastName(e) {
		//setLastName(e.target.value);
		dispatch({ type: "update last name", data: e.target.value });
	}

	function handleResize(e) {
		console.log("resized!");
		//setWindowWidth(window.outerWidth);

		dispatch({ type: "update window width", data: window.outerWidth });
	}

	function changeFavColor(e) {
		//setFavoriteColor(e.target.value);

		dispatch({ type: "update favorite color", data: e.target.value });
	}

	return (
		<div
			style={{
				border: "4px solid black",
				borderColor: state.favoriteColor
			}}
		>
			<h4>I'm a Class!</h4>
			<Row label="First Name">
				<input value={state.firstName} onChange={changeFirstName} />
			</Row>

			<Row label="Last Name">
				<input value={state.lastName} onChange={changeLastName} />
			</Row>

			<Row label="Favorite Color">
				<input value={state.favoriteColor} onChange={changeFavColor} />
			</Row>

			<h4>
				Nice to meet you {state.firstName} {state.lastName}!
			</h4>

			<p>Your window width is: {state.windowWidth}</p>
		</div>
	);
}
