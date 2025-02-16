import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [{ id: 1, text: "Hello World" }],
};

export const TodoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const alertCondition = state.todos.map((todo) =>
        todo.text.includes(action.payload)
      );
      console.log("alert Condition :", alertCondition);

      if (!alertCondition[alertCondition.length - 1]) {
        const Todo = { id: nanoid(), text: `${action.payload}` };
        state.todos.push(Todo);
      } else {
        alert(" Todo Already Exist !!!");
      }
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    editTodo: (state, action) => {
      const {id , text } = action.payload
       const editTodo = state.todos.find((todo) => todo.id === id ); 
      if(editTodo){
        editTodo.text = text
      }
      console.log('todo id : ', id , 'todo text :', text);
      
    },
  },
});

export const { addTodo, removeTodo, editTodo } = TodoSlice.actions;
export default TodoSlice.reducer;
