import { useEffect, useMemo, useState } from "react";
import TodoForm from "../components/TodoForm.jsx";
import TodoList from "../components/TodoList.jsx";

export default function Home() {
    const [todos, setTodos] = useState(() => {
        try {
            const stored = localStorage.getItem("todos");
            return stored ? JSON.parse(stored) : [];
        } catch {
            return [];
        }
    });

    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos]);

    const addTodo = (text) => {
        const newTodo = {
            id: Date.now(),
            text
        };

        setTodos((prevTodos) => [newTodo, ...prevTodos]);
    };

    const deleteTodo = (id) => {
        setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
    };

    const updateTodo = (id, newText) => {
        const trimmedText = newText.trim();
        if (!trimmedText) {
            return;
        }
        setTodos(
            todos.map((todo) =>
                todo.id === id ? { ...todo, text: trimmedText } : todo
            )
        );
    };

    const totalCount = todos.length;
    const previewCount = useMemo(() => Math.min(totalCount, 3), [totalCount]);

    return (
        <main className="page">
            <section className="card">
                <header className="mb-5">
                    <p className="m-0 text-sm font-semibold text-amber-700">Gorev Yonetimi</p>
                    <h1 className="card-title">Gorev Panosu</h1>
                    <p className="card-subtitle">
                        Yapilacaklar Listesi
                    </p>
                </header>

                <TodoForm addTodo={addTodo} />

                <div className="stats">
                    <span>Toplam gorev: {totalCount}</span>
                    <span>
                        {previewCount > 0
                            ? ``
                            : "Hemen ilk gorevini ekle"}
                    </span>
                </div>

                <TodoList
                    todos={todos}
                    deleteTodo={deleteTodo}
                    updateTodo={updateTodo}
                />
            </section>
        </main>
    );
}