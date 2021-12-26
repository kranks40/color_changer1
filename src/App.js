import React, { useState } from "react";
import Input from "./component/Input";
import Square from "./component/Square";

function App() {
	const [colorValue, setColorValue] = useState("");
	const [hexValue, setHexValue] = useState("");
	const [isDark, setIsDark] = useState(true);

	return (
		<div className="App">
			<Square
				colorValue={colorValue}
				hexValue={hexValue}
				isDark={isDark}
			/>
			<Input
				colorValue={colorValue}
				setColorValue={setColorValue}
				hexValue={hexValue}
				setHexValue={setHexValue}
				isDark={isDark}
				setIsDark={setIsDark}
			/>
		</div>
	);
}

export default App;
