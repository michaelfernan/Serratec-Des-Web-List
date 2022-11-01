import { Trash } from 'phosphor-react'

import { Container } from "./styled";

export function Task({ task, onDeleteTask}) {

    function handleDeleteTask() {
        onDeleteTask(task.id)
    }  
          return (  

        <Container>           
            
            <input type="checkbox" value="" />
  
            <span class="text">{task.content}</span>
                        
            <button onClick={handleDeleteTask} title="Deletar tarefa">
                <Trash size={18} />
            </button>                       

        </Container>

    )
    
}