import { configureStore } from "@reduxjs/toolkit"
import { TodoSlice } from "../Features/todo/TodoSlice"
export const Store = configureStore({
    reducer:{
        todo: TodoSlice.reducer ,

    }
})