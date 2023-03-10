import Dropdown from "./Dropdown";

function TodoHeader({ isAddTask, handleSelected, selected }) {
	return (
		<div className="todo__header">
			<button className="add-task btn" onClick={isAddTask}>
				Add task
			</button>
			<Dropdown handleSelected={handleSelected} selected={selected} />
		</div>
	);
}

export default TodoHeader;
