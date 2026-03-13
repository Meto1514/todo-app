import { useState } from "react";

export default function TodoForm({ addTodo }) {

  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (text.trim() === "") return;

    addTodo(text.trim());
    setText("");
  };

  return (
    <form onSubmit={handleSubmit} className="form-layout">

      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="input"
        placeholder="Yeni gorev yaz..."
        aria-label="Yeni gorev"
      />

      <button type="submit" className="btn btn-add">
        Ekle
      </button>

    </form>
  );
}