const removeFromList = (list, id) => {
	return list.filter((item) => item.id !== id);
};

const addToList = (list, id, listToAddTo) => {
	const filteredItem = list.filter((item) => item.id === id);
	const newList = [...listToAddTo, filteredItem];
	return newList.flat();
};

export { removeFromList, addToList };
