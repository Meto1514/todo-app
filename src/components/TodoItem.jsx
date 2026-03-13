import { useState } from "react";

export default function TodoItem({ todo, deleteTodo, updateTodo }) {
    const [isEditing, setIsEditing] = useState(false);
    const [draftText, setDraftText] = useState(todo.text);

    const handleSave = () => {
        updateTodo(todo.id, draftText);
        setIsEditing(false);
    };

    const handleCancel = () => {
        setDraftText(todo.text);
        setIsEditing(false);
    };

    return (
        <li className="todo-item">
            {isEditing ? (
                <input
                    className="input"
                    value={draftText}
                    onChange={(e) => setDraftText(e.target.value)}
                    aria-label="Gorev metni"
                />
            ) : (
                <span className="text-base text-stone-800">{todo.text}</span>
            )}

            <div className="actions">
                {isEditing ? (
                    <>
                        <button onClick={handleSave} className="btn btn-save">
                            Kaydet
                        </button>
                        <button onClick={handleCancel} className="btn btn-cancel">
                            Iptal
                        </button>
                    </>
                ) : (
                    <button
                        onClick={() => setIsEditing(true)}
                        className="btn btn-update"
                    >
                        Guncelle
                    </button>
                )}

                <button
                    onClick={() => deleteTodo(todo.id)}
                    className="btn btn-delete"
                >
                    Sil
                </button>
            </div>

        </li>
    );
}