import { useState } from "react";

function Dropdown({ handleSelected, selected }) {
	const [activeMenu, setActiveMenu] = useState(false);
	const selectionList = ["All", "Completed", "Uncompleted"];
	const selectionElements = selectionList.map((item) => {
		return (
			<li
				key={item}
				className="dropdown__item"
				onClick={() => handleSelected(item)}
			>
				{item}
			</li>
		);
	});

	function handleDropdownClick() {
		setActiveMenu((oldState) => !oldState);
	}

	return (
		<div className="dropdown" onClick={handleDropdownClick}>
			<button className="dropdown__btn btn">{selected}</button>
			<ul className={`menu ${activeMenu ? "active" : ""}`}>
				{selectionElements}
			</ul>
		</div>
	);
}

export default Dropdown;
