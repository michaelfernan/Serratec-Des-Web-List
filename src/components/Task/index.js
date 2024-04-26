import { Trash, Pencil } from 'phosphor-react';
import { Container } from "./styled";

export function Task({ task, onDeleteTask, urgencyIcon, startEdit }) {
    function handleDeleteTask() {
        onDeleteTask(task.id);
    }

    return (
        <Container>
            <input type="checkbox" />
            <span className="text">{task.content}</span>
            <span className="category">{task.category}</span>
            <span className="icon">{urgencyIcon}</span>
            <button onClick={() => startEdit(task)} title="Editar tarefa">
                <Pencil size={18} />
            </button>
            <button onClick={handleDeleteTask} title="Deletar tarefa">
                <Trash size={18} />
            </button>
        </Container>
    );
}
