import TodoItem from "./TodoItem";

function TodoList({ todoList, deleteTodo, handleCheckClick, editTodo }) {
	const todoElements = todoList.map((todo) => {
		const { id, value, isChecked } = todo;
		return (
			<TodoItem
				key={id}
				id={id}
				value={value}
				isChecked={isChecked}
				handleCheckClick={handleCheckClick}
				deleteTodo={deleteTodo}
				editTodo={editTodo}
				date={todo.date}
			/>
		);
	});
	return (
		<ul className="todo__list">
			{todoElements.length > 0 ? (
				todoElements
			) : (
				<h2 className="no-todo">No todo.</h2>
			)}
		</ul>
	);
}

export default TodoList;
