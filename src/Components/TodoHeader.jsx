import DropDown from "./DropDown";

function TodoHeader({ isAddTask }) {
	return (
		<div className="todo__header">
			<button className="add-task btn" onClick={isAddTask}>
				Add task
			</button>
			<DropDown />
		</div>
	);
}

export default TodoHeader;
