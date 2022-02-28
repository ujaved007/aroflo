import { removeFromList } from "../utils/filterFunctions";

test("removes the item from the list based on id", () => {
	const testArr = [
		{ id: 1, client: "2nd Stop books shop" },
		{ id: 3, client: "Yarra Valley Services" },
		{ id: 2, client: "Sparky Powershop" },
	];
	expect(removeFromList(testArr, 3)).toEqual([
		{ id: 1, client: "2nd Stop books shop" },
		{ id: 2, client: "Sparky Powershop" },
	]);
	expect(removeFromList(testArr, 1)).toEqual([
		{ id: 3, client: "Yarra Valley Services" },
		{ id: 2, client: "Sparky Powershop" },
	]);
});
