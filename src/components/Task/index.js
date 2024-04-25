import { Trash } from 'phosphor-react';
import { Container } from "./styled";

export function Task({ task, onDeleteTask }) {
    function handleDeleteTask() {
        onDeleteTask(task.id);
    }

    return (
        <Container>           
            <input type="checkbox" />
            <span className="text">{task.content}</span>
            {task.category && <span className="category">{task.category}</span>}  // Exibir categoria
            <button onClick={handleDeleteTask} title="Deletar tarefa">
                <Trash size={18} />
            </button>                       
        </Container>
    );
}
