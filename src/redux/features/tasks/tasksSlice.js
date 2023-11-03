import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	tasks: [],
};

const taskSlice = createSlice({
	name: "tasksSlice",
	initialState,
	reducers: {},
});

export default taskSlice.reducer;
