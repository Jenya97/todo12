import React, { useContext } from "react";
import ContextFunc from "../ContextFunc";
export default function TodoItem({ id, task, checked }) {
  const { remove, toggle } = useContext(ContextFunc);
  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <input type="checkbox" checked={checked} onChange={() => toggle(id)} />
      <p className={checked ? "checked" : null}>{task}</p>
      <button onClick={() => remove(id)}>x</button>
    </div>
  );
}
