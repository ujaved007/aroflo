import React, { useState } from "react";

import data from "../data.json";
import { removeFromList, addToList } from "../utils/filterFunctions";

import { WrapperCenter } from "../styles/Wrappers.styles";
import CardComponent from "../components/Card/CardComponent";

const HomePage = () => {
	const [toDoList, setToDoList] = useState(data.data);
	const [todaysTask, setTodaysTask] = useState([]);

	//to remove item from todolist and add it to todaystask
	const handleAddClick = (id) => {
		setToDoList(removeFromList(toDoList, id));
		setTodaysTask(addToList(toDoList, id, todaysTask));
	};

	//to remove item from todays task and add it back to todolist
	const handleRemoveClick = (id) => {
		setTodaysTask(removeFromList(todaysTask, id));
		setToDoList(addToList(todaysTask, id, toDoList));
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
