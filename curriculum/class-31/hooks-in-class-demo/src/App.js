import React from "react";
import "./styles/App.css";

//import NameBox from "./NameBox.js";
//import HookedNameBox from "./HookedNameBox.js";
import ReducerNameBox from "./ReducerNameBox.js";

function App() {
	return (
		<div className="App">
			<section className="App-header">
				<section className="card">
					<ReducerNameBox />
				</section>
			</section>
		</div>
	);
}

export default App;
