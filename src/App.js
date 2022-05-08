import "./App.css";
import { useState, useEffect } from "react";
import TodoList from "./Todo/TodoList";
// import Page1 from "./Components/Page1";
// import Context1 from "./Context1";
import ContextFunc from "./ContextFunc";

function App() {
  // const [color, setColor] = useState("blue");
  const [val, setVal] = useState("");
  const [todo, setTodo] = useState(JSON.parse(localStorage.getItem("todo")));

  if (!localStorage.hasOwnProperty("todo")) {
    localStorage.setItem("todo", JSON.stringify([]));
  }

  useEffect(() => {
    localStorage.setItem("todo", JSON.stringify(todo));
  }, [todo]);

  function addTodo() {
    setTodo([
      ...todo,
      {
        id: Date.now(),
        task: val,
        checked: false,
      },
    ]);
    setVal("");
  }
  const remove = (id) => {
    let newTodo = todo.filter((i) => i.id !== id);
    setTodo(newTodo);
  };
  const toggle = (id) => {
    let checked = todo.map((i) => {
      if (i.id === id) {
        i.checked = !i.checked;
      }
      return i;
    });
    setTodo(checked);
  };
  return (
    <ContextFunc.Provider value={{ remove, toggle }}>
      <div>
        <input
          type="text"
          value={val}
          onChange={(e) => setVal(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              addTodo();
            }
          }}
        />
        <button onClick={addTodo}>add</button>
        <TodoList todo={todo} />
        {/* <Context.Provider value={{color,val}}>
      <Page1 color={color}/>
      </Context.Provider> */}
      </div>
    </ContextFunc.Provider>
  );
}

export default App;
