import TodoItem from "./TodoItem";

function TodoList({ todoList }) {
	const todoElements = todoList.map((todo) => {
		const { id, value, isChecked } = todo;
		return <TodoItem key={id} id={id} value={value} isChecked={isChecked} />;
	});
	return <div className="todo__list">{todoElements}</div>;
}

export default TodoList;
