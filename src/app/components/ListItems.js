"use client";

import { deleteTodo, updateTodo } from "@/actions/todos";
import { useState } from "react";


export default function ListItems({ todo }){

    const [edit, isEdit] = useState(false)
    const [value, setValue] = useState(todo.title)

    const onComplete = async () => {
        await updateTodo(todo._id)
    }
    const onEdit = async () => {
        isEdit(!edit)
        await updateTodo(todo._id, value)
    }
    const onDelete = async () => {
        await deleteTodo(todo._id)
    }

    return(
        <div className={`p-2 border flex w-2/3 mx-auto my-1 text-xl ${todo.completed ? "" : "bg-black"}`}>
            {
                edit 
                ? <input type="text" value={value} onChange={(e) => setValue(e.target.value)} className="flex-grow p-1 rounded text-black" /> 
                : <h1 className={`flex flex-grow ${todo.completed ? "line-through" : ""}`}>{todo.title}</h1>
            }
          <button onClick={onComplete} className={` mx-1 p-1 text-sm rounded ${todo.completed ? "bg-green-400": "bg-fuchsia-400"}`}>{!todo.completed ? "Done" : "Not-Done"}</button>
          <button onClick={onEdit} className="bg-blue-400 mx-1 p-1 px-2 text-sm rounded">Edit</button>
          <button onClick={onDelete} className="bg-red-400 mx-1 p-1 text-sm rounded">Delete</button>
        </div>
    )
}