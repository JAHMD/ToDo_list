import { nanoid } from "nanoid";
import { useState } from "react";
import AddTask from "./Components/AddTask";
import TodoHeader from "./Components/TodoHeader";
import TodoList from "./Components/TodoList";

function App() {
	const [isAddTask, setIsAddTask] = useState(false);
	const [todo, setTodo] = useState({
		id: "",
		value: "",
		isChecked: false,
	});
	const storedList = JSON.parse(localStorage.getItem("todo-list"));
	const [todoList, setTodoList] = useState(storedList || []);

	function handleIsAddTask() {
		setTodo({
			id: "",
			value: "",
			isChecked: false,
		});
		setIsAddTask((oldState) => !oldState);
	}

	function handleInputChange({ target }) {
		const id = todo.id ? todo.id : nanoid();
		setTodo((oldTodo) => ({ ...oldTodo, id, value: target.value }));
	}

	function handleSubmit(e) {
		e.preventDefault();
		if (!todo.value) return;
		const storedList = JSON.parse(localStorage.getItem("todo-list"));
		const existedTodo = storedList.find(
			(storedTodo) => storedTodo.id === todo.id
		);
		let updatedList = [];

		if (!existedTodo) {
			updatedList = [...todoList, todo];
		} else {
			updatedList = storedList.map((storedTodo) => {
				return storedTodo.id === existedTodo.id ? todo : storedTodo;
			});
		}
		localStorage.setItem("todo-list", JSON.stringify(updatedList));
		setTodoList(updatedList);
		setTodo({ id: 0, value: "", isChecked: false });
		setIsAddTask((oldState) => !oldState);
	}

	function editTodo(id) {
		const todo = todoList.find((todo) => todo.id === id);

		setTodo((oldTodo) => ({ ...oldTodo, ...todo }));
		setIsAddTask((oldState) => !oldState);
	}

	function deleteTodo(id) {
		const updatedList = todoList.filter((todo) => todo.id !== id);
		setTodoList(updatedList);
		localStorage.setItem("todo-list", JSON.stringify(updatedList));
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
				<TodoList
					todoList={todoList}
					deleteTodo={deleteTodo}
					editTodo={editTodo}
				/>
			</section>
		</main>
	);
}

export default App;
