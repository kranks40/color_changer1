import React from "react";
import "../style/input.css";
import colorNames from "colornames";

function Input({
	setColorValue,
	colorValue,
	isDark,
	setHexValue,
	setIsDark,
}) {
	return (
		<form className="input">
			<label>add color name</label>
			<input
				autoFocus
				type="text"
				placeholder="add color name"
				required
				value={colorValue}
				onChange={(e) => {
					setColorValue(e.target.value);
					setHexValue(colorNames(e.target.value));
				}}
			/>

			<button onClick={(e) => setIsDark(isDark)} type="button">toggle color mode</button>
		</form>
	);
}

export default Input;
