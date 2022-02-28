import { addToList } from "../utils/filterFunctions";

test("add an item from an array based on id to another array", () => {
	const firstArr = [
		{ id: 1, client: "2nd Stop books shop" },
		{ id: 3, client: "Yarra Valley Services" },
		{ id: 2, client: "Sparky Powershop" },
	];
	const secondArr = [
		{ id: 4, client: "AVG Service Division" },
		{ id: 5, client: "2nd Hand Electricals" },
	];
	expect(addToList(firstArr, 3, secondArr)).toEqual([
		{ id: 4, client: "AVG Service Division" },
		{ id: 5, client: "2nd Hand Electricals" },
		{ id: 3, client: "Yarra Valley Services" },
	]);
	expect(addToList(firstArr, 1, secondArr)).toEqual([
		{ id: 4, client: "AVG Service Division" },
		{ id: 5, client: "2nd Hand Electricals" },
		{ id: 1, client: "2nd Stop books shop" },
	]);
});
