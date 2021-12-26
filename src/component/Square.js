import React from "react";
import "../style/square.css";

function Square({ colorValue, hexValue, isDark }) {
	return (
		<section
			className="square"
			style={{ background: colorValue, color: isDark ? "#000" : "#fff" }}
		>
			<p>{colorValue ? colorValue : "Empty Value"}</p>
			<p>{hexValue ? hexValue : "empty hex value"}</p>
		</section>
	);
}

Square.defaultProps = {
	colorValue: "Empty color Value",
};

export default Square;
