import TodoItem from "./TodoItem";

export default function TodoList({ todos, deleteTodo, updateTodo }) {
    if (todos.length === 0) {
        return (
            <div className="empty-box">
                <p>Listede gorev yok.</p>
                <p className="mt-1 text-sm">Ustteki alandan yeni bir gorev ekleyebilirsiniz.</p>
            </div>
        );
    }

    return (
        <ul className="todo-list">

            {todos.map((todo) => (
                <TodoItem
                    key={todo.id}
                    todo={todo}
                    deleteTodo={deleteTodo}
                    updateTodo={updateTodo}
                />
            ))}

        </ul>
    );
}