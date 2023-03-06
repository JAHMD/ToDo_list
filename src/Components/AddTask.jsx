function AddTask({ isAddTask, handleSubmit, handleInputChange, task }) {
	return (
		<div className="overlay">
			<button className="close" onClick={isAddTask}>
				<i className="fa-solid fa-circle-xmark"></i>
			</button>
			<form className="task-form" onSubmit={handleSubmit}>
				<div className="field">
					<label htmlFor="title" className="task-title">
						Task:
					</label>
					<input
						type="text"
						id="title"
						className="task-input"
						onChange={handleInputChange}
						value={task}
						autoFocus={true}
					/>
				</div>
				<button className="submit btn">Add</button>
			</form>
		</div>
	);
}

export default AddTask;
