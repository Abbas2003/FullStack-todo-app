import ListItems from "./components/ListItems";
import TodoForm from "./components/TodoForm";



export default async function Home() {

  try {
    let res = await fetch("http://full-stack-todo-app-lilac.vercel.app/api/todos", {
      cache: "no-cache"
    });

    if (!res.ok) {
      throw new Error('Failed to fetch data');
    }

    res = await res.json();
    return res
    // console.log("res =>", res);
  }
  catch (err) {
    console.error("Fetch error: ", err)
    return []
  }


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
