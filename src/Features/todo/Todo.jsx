import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, editTodo, removeTodo } from "./TodoSlice";
import { FaEdit } from "react-icons/fa";
import { IoClose } from "react-icons/io5";

const Todo = () => {
  const [storeTodo, SetStoreTodo] = useState(null);
  const [editId, setEditId] = useState(null);
  const [editText, setEditText] = useState("");
  // const [isEdit, setIsEdit] = useState(false)
  const todo = useSelector((state) => state.todo);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addTodo(storeTodo));
    SetStoreTodo(" ");
  };

  const UpdateTodoHandler = (id, text) => {
    setEditId(id);
    setEditText(text);
  };

  const EditUpated = () => {
    if (editId !== null && editText.trim() !== "")
      dispatch(editTodo({ id: editId, text: editText }));
    setEditId(null);
    setEditText("");
  };

  return (
    <div>
      <h1 className=" font-sans"> Todo </h1>
      <form onSubmit={handleSubmit}>
        <input
          onChange={(e) => SetStoreTodo(e.target.value)}
          value={storeTodo}
          className=" border-4 rounded-md py-1 border-red-400"
          type="text"
        />
        <button type="submit" className="bg-blue-500  rounded-lg ms-2 p-2">
          Add Todo
        </button>
      </form>
      <br /> <br />
      <h5>Listed Todos :</h5>
      <p>
        {todo.todos.map((todo) => (
          <li key={todo.id}>
            {editId === todo.id ? (
              <>
                <input
                  className=" rounded-md border-4 border-e-red-400 px-2 mx-2 py-2 "
                  type="text"
                  value={editText}
                  onChange={(e) => setEditText(e.target.value)}
                />
                <button
                  className=" p-2 mx-2 bg-orange-500 rounded-md"
                  onClick={EditUpated}
                >
                  Update
                </button>
              </>
            ) : (
              <>
                {todo.text} &nbsp;&nbsp;&nbsp;{" "}
                <span
                  className="  inline-flex cursor-pointer "
                  onClick={() => dispatch(removeTodo(todo.id))}
                >
                  <IoClose />
                </span>
                <span
                  onClick={() => UpdateTodoHandler(todo.id, todo.text)}
                  className="  inline-flex cursor-pointer "
                >
                  &nbsp;&nbsp; <FaEdit />
                </span>
              </>
            )}
          </li>
        ))}{" "}
      </p>
    </div>
  );
};

export default Todo;
