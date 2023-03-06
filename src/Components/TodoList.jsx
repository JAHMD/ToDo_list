import TodoItem from "./TodoItem";

function TodoList({ todoList, deleteTodo, editTodo }) {
	const todoElements = todoList.map((todo) => {
		const { id, value, isChecked } = todo;
		return (
			<TodoItem
				key={id}
				id={id}
				value={value}
				isChecked={isChecked}
				deleteTodo={deleteTodo}
				editTodo={editTodo}
			/>
		);
	});
	return <div className="todo__list">{todoElements}</div>;
}

export default TodoList;
