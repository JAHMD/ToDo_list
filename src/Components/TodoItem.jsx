import { useState } from "react";

function TodoItem({ id, value, isChecked }) {
	const [isActive, setIsActive] = useState(false);
	return (
		<div className={`todo__item ${isActive ? "active" : ""}`} id={id}>
			<i className="check fa-regular fa-square"></i>
			<p className="task-content" onClick={() => setIsActive(!isActive)}>
				{value}
			</p>
			<div className="actions-container">
				<button className="delete btn">
					<i className="fa-solid fa-trash-can"></i>
				</button>
				<button className="update btn">
					<i className="fa-solid fa-pen-to-square"></i>
				</button>
			</div>
		</div>
	);
}

export default TodoItem;
