import { useState } from "react";

function TodoItem(props) {
	const { id, value, isChecked, handleCheckClick, deleteTodo, editTodo, date } =
		props;
	const [isActive, setIsActive] = useState(false);
	return (
		<li
			className={`todo__item ${isActive ? "active" : ""} ${
				isChecked ? "checked" : ""
			}`}
			id={id}
		>
			<button className="check" onClick={() => handleCheckClick(id)}>
				<i className={`fa-solid fa-square${isChecked ? "-check" : ""}`}></i>
			</button>
			<p className="task-content" onClick={() => setIsActive(!isActive)}>
				{value}
			</p>
			<div className="actions-container">
				<button className="delete btn" onClick={() => deleteTodo(id)}>
					<i className="fa-solid fa-trash-can"></i>
				</button>
				<button className="update btn" onClick={() => editTodo(id)}>
					<i className="fa-solid fa-pen-to-square"></i>
				</button>
			</div>
			<span className="date">{date}</span>
		</li>
	);
}

export default TodoItem;
