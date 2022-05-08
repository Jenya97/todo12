import TodoItem from "./TodoItem";



export default function TodoList(todo) {
  return (
    <div>
   {todo.todo.map(i=>(
       <TodoItem key={i.id} {...i}/>
       ))}
    </div>
  )
}
