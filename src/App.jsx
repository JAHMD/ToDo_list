import { nanoid } from "nanoid";
import { useState } from "react";
import AddTask from "./Components/AddTask";
import Dropdown from "./Components/DropDown";
import TodoHeader from "./Components/TodoHeader";
import TodoList from "./Components/TodoList";

/**TODO:
 * add "is completed" feature.
 * work on the dropdown menu.
 * add date/time to each todo.
 * add some smoothness to the app.
 * ...
 */
const DEFAULT_TODO = {
	id: "",
	value: "",
	isChecked: false,
	date: "",
};

function App() {
	const [isAddTask, setIsAddTask] = useState(false);
	const [todo, setTodo] = useState(DEFAULT_TODO);
	const [todoList, setTodoList] = useState(() => {
		return JSON.parse(localStorage.getItem("todo-list")) || [];
	});
	const [selected, setSelected] = useState("All");

	function handleIsAddTask() {
		setTodo(DEFAULT_TODO);
		setIsAddTask((oldState) => !oldState);
	}

	function handleInputChange({ target }) {
		const id = todo.id ? todo.id : nanoid();
		setTodo((oldTodo) => ({ ...oldTodo, id, value: target.value }));
	}

	function handleSubmit(e) {
		e.preventDefault();
		if (!todo.value) return;

		let updatedList = [];
		const storedList = JSON.parse(localStorage.getItem("todo-list")) || [];
		const date = new Date().toLocaleString();
		const existedTodo = storedList.find(
			(storedTodo) => storedTodo.id === todo.id
		);

		if (!existedTodo) {
			updatedList = [{ ...todo, date }, ...storedList];
		} else {
			updatedList = [
				{ ...todo, date },
				...storedList.filter((storedTodo) => storedTodo.id !== existedTodo.id),
			];
		}
		localStorage.setItem("todo-list", JSON.stringify(updatedList));
		setTodoList(updatedList);
		setTodo(DEFAULT_TODO);
		setIsAddTask((oldState) => !oldState);
		setSelected("All");
	}

	function handleCheckClick(id) {
		const updatedList = todoList.map((todo) =>
			todo.id === id ? { ...todo, isChecked: !todo.isChecked } : todo
		);
		localStorage.setItem("todo-list", JSON.stringify(updatedList));
		setTodoList(updatedList);
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

	function handleSelected(value) {
		const storedList = JSON.parse(localStorage.getItem("todo-list"));
		setSelected(value);
		let updatedList;
		if (value === "Completed") {
			updatedList = storedList.filter((todo) => todo.isChecked);
		} else if (value === "Uncompleted") {
			updatedList = storedList.filter((todo) => !todo.isChecked);
		} else {
			updatedList = [...storedList];
		}
		setTodoList(updatedList);
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
				<TodoHeader isAddTask={handleIsAddTask}>
					<Dropdown handleSelected={handleSelected} selected={selected} />
				</TodoHeader>
				<TodoList
					todoList={todoList}
					handleCheckClick={handleCheckClick}
					deleteTodo={deleteTodo}
					editTodo={editTodo}
				/>
			</section>
		</main>
	);
}

export default App;
