import React, { useState } from "react";

import data from "../data.json";

import { WrapperCenter } from "../styles/Wrappers.styles";
import CardComponent from "../components/Card/CardComponent";

const HomePage = () => {
	const [toDoList, setToDoList] = useState(data.data);
	const [todaysTask, setTodaysTask] = useState([]);

	//to add item to todays task
	const handleAddClick = (id) => {
		//removes item from todolist
		const filteredToDoList = toDoList.filter((item) => item.id !== id);
		setToDoList(filteredToDoList);
		//adds removed item to today's task
		const todaysTaskList = toDoList.filter((item) => item.id === id);
		const newList = [...todaysTask, todaysTaskList];
		setTodaysTask(newList.flat());
	};

	//to remove item from todays task
	const handleRemoveClick = (id) => {
		//removes item from today's task
		const filteredList = todaysTask.filter((item) => item.id !== id);
		setTodaysTask(filteredList);
		//adds removed item to todolist
		const newToDoList = todaysTask.filter((item) => item.id === id);
		const newList = [...toDoList, newToDoList];
		setToDoList(newList.flat());
	};

	return (
		<main>
			<WrapperCenter>
				<CardComponent data={toDoList} handleClick={handleAddClick} title={"To Do List"} btn={"+"} />
				<CardComponent
					data={todaysTask}
					handleClick={handleRemoveClick}
					title={"Today's Task"}
					btn={"-"}
					danger={"danger"}
				/>
			</WrapperCenter>
		</main>
	);
};

export default HomePage;
