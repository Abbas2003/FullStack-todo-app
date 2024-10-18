"use server";

import { revalidatePath } from "next/cache";


export async function addTodo(obj) {
    // console.log("obj =>", obj);
    try {
        await fetch("http://full-stack-todo-app-lilac.vercel.app/api/todos", {
            method: "POST",
            body: JSON.stringify(obj)
        })

        revalidatePath('/')
    } catch (err) { 
        console.log(err)
    }
    
}


export async function updateTodo(id, value) {
    try {
        await fetch("http://full-stack-todo-app-lilac.vercel.app/api/todos", {
            method: "PUT",
            body: JSON.stringify({ id, value })
        })
        revalidatePath('/')
    } catch (err) { 
        console.log(err)
    }

}


export async function deleteTodo(id) {
    try {
        await fetch("http://full-stack-todo-app-lilac.vercel.app/api/todos", {
            method: "DELETE",
            body: JSON.stringify({ id })
        })
        revalidatePath('/')
    } catch (err) { 
        console.log(err)
    }

}



