function TodoHeader({ isAddTask, children }) {
	return (
		<div className="todo__header">
			<button className="add-task btn" onClick={isAddTask}>
				Add task
			</button>
			{children}
		</div>
	);
}

export default TodoHeader;
