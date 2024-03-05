import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Todo {
  id: string;
  text: string;
  boolean: boolean;
}

interface TodoState {
  todos: Todo[];
}
const initialState: TodoState = {
  todos: [],
};
const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<Todo>) => {
      state.todos.push(action.payload);
    },
  },
});
export const { addTodo } = todoSlice.actions;

export default todoSlice.reducer;
