const { default: mongoose } = require("mongoose");


const todoSchema = new mongoose.Schema({
    title: String,
    completed: Boolean
})


export const TodoModel = mongoose.models.Todos || mongoose.model('Todos', todoSchema)