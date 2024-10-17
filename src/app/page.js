import ListItems from "./components/ListItems";
import TodoForm from "./components/TodoForm";



export default async function Home() {

  let res = await fetch("http://localhost:3000/api/todos", {
    cache: "no-cache"
  });
  res = await res.json();
  console.log("res =>", res);

  return (
    <div className="min-h-screen p-10 mx-auto">
      <h1 className="text-4xl font-bold text-center my-5">Todo App</h1>
     <TodoForm />
      {
        res.todos?.map((todo) => <ListItems key={todo._id} todo={todo} />)
      }
    </div>
  );
}
