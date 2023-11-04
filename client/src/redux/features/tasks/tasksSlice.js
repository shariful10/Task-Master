import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	tasks: [
		{
			id: 1,
			status: "pending",
			title: "Remove Button",
			description:
				"We need a remove button in our task card. Meke the button red and use Heroicon for tashbin icon.",
			date: "2023-08-28",
			assignedTo: "Shariful Islam",
			priority: "high",
		},
	],
};

const taskSlice = createSlice({
	name: "tasksSlice",
	initialState,
	reducers: {
		addTasks: (state, { payload }) => {
			if (state.tasks.length === 0) {
				state.tasks.push({ id: 1, status: "painding", ...payload });
			} else {
				const lastElement = state.tasks.at(-1);
				state.tasks.push({
					id: lastElement.id + 1,
					status: "painding",
					...payload,
				});
			}
		},
		removeTask: (state, { payload }) => {
			state.tasks.filter((item) => item.id !== payload);
		},
	},
});

export const { addTasks, removeTask } = taskSlice.actions;

export default taskSlice.reducer;
