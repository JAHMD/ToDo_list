import { nanoid } from "nanoid";
import { useState } from "react";
import AddTask from "./Components/AddTask";
import TodoHeader from "./Components/TodoHeader";
import TodoList from "./Components/TodoList";

function App() {
	const [isAddTask, setIsAddTask] = useState(false);
	const [todo, setTodo] = useState({
		id: 0,
		value: "",
		isChecked: false,
	});
	const storedList = JSON.parse(localStorage.getItem("todo-list"));
	const [todoList, setTodoList] = useState(storedList || []);

	function handleIsAddTask() {
		setIsAddTask((oldState) => !oldState);
	}

	function handleInputChange({ target }) {
		setTodo((oldTodo) => ({ ...oldTodo, id: nanoid(), value: target.value }));
	}

	function handleSubmit(e) {
		e.preventDefault();
		if (todo.value) {
			const updatedList = [...todoList, todo];
			localStorage.setItem("todo-list", JSON.stringify(updatedList));
			setTodoList(updatedList);
			setTodo({ id: 0, value: "", isChecked: false });
			setIsAddTask((oldState) => !oldState);
		}
	}

	return (
		<main className="App">
			{isAddTask && (
				<AddTask
					isAddTask={handleIsAddTask}
					handleSubmit={handleSubmit}
					handleInputChange={(e) => handleInputChange(e)}
					task={todo.value}
				/>
			)}
			<section>
				<h1 className="heading">ToDo List</h1>
			</section>
			<section className="todo">
				<TodoHeader isAddTask={handleIsAddTask} />
				<TodoList todoList={todoList} />
			</section>
		</main>
	);
}

export default App;
