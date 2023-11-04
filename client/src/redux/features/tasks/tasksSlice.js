import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	tasks: [],
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
		removeTask: (state, payload) => {
			state.tasks.filter((item) => item.id !== payload);
		},
	},
});

export const { addTasks } = taskSlice.actions;

export default taskSlice.reducer;
