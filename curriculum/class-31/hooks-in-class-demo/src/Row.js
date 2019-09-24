import React from "react";

export default function Row(props) {
	return (
		<div className="row">
			<label>{props.label}</label>
			{props.children}
		</div>
	);
}
