import { connectDB } from "@/app/lib/dbConnection"
import { TodoModel } from "@/app/lib/TodoModel";

// Mock Data
// const todos = [
//     {
//         id: 1,
//         title: 'Todo 1',
//         completed: false
//     },
//     {
//         id: 2,
//         title: 'Todo 2',
//         completed: false
//     },
//     {
//         id: 3,
//         title: 'Todo 3',
//         completed: false
//     },
//     {
//         id: 4,
//         title: 'Todo 4',
//         completed: false
//     },
// ]


export async function GET(req) {
    await connectDB()
    const todos = await TodoModel.find();
    // console.log("Todos from backend to frontend ->", todos)

    return Response.json({
        todos,
        msg: "Todos Fetched Successfully"
    })
}

export async function POST(req) {
    const todo = await req.json()

    console.log("todo =>", todo)

    console.log("Todos=>", {
        title: todo.todos,
        completed: false,
    });
    const newTodo = await new TodoModel({
        title: todo.todos,
        completed: false,
    });
    await newTodo.save();

    return Response.json({
        data: [],
        msg: "Todo Added Successfully"
    })
}


export async function PUT(request) {
    let obj = await request.json();
    // console.log("obj in put route=>", obj);
    
    const singleTodo = await TodoModel.findById(obj.id);
    // console.log("singleTodo =>", singleTodo);
    
    let todo = await TodoModel.updateOne(
        { _id: obj.id },
        { title: obj.value},
        { completed: !singleTodo.completed }
    );

    return Response.json({
        todo,
        msg: "Todo Updated Successfully",
    });
}

export async function DELETE(request) {
    let obj = await request.json();
    // console.log("obj =>", obj);
    await TodoModel.deleteOne({ _id: obj.id });

    return Response.json({
        msg: "Todo Deleted Successfully",
    });
}