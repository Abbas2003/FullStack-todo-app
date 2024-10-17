"use client"

import { addTodo } from "@/actions/todos";
import { useRef } from "react";


export default async function TodoForm() {
    const formRef = useRef(null)
    return (
        <form ref={formRef} action={async (FormData) => {
            
            await addTodo({todos: FormData.get("todo")});
            formRef?.current?.reset();

        }} className="w-2/3 mx-auto my-2 flex flex-col md:flex-row gap-2">
            <input placeholder="Add Todo" name="todo" type="text" className="border-2 rounded p-2 flex flex-grow outline-none text-black" />
            <input type="submit" value="Add Todo" className="bg-white text-black p-2 rounded group hover:bg-black hover:text-white border cursor-pointer" />
        </form>
    )
}