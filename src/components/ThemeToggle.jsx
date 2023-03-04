import React from "react";


const ToggleTheme = () => {
return (
	<div className="container">
	<div className="toggle-switch">
		<input type="checkbox" className="checkbox"
			name="theme" id="theme" />
		<label className="label" htmlFor="theme">
		<span className="inner" />
		<span className="switch" />
		</label>
	</div>

	</div>
);
};

export default ToggleTheme;
