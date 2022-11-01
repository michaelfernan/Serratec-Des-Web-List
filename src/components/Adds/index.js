import { useState } from "react";
import { Task } from "../Task";

import { TaskList, Container, Content, Form } from "./styled";

export function Adds({ info }) {

    
    const [tasks, setTasks] = useState([
       
    ])

    const [newTaskTxt, setNewTaskTxt] = useState('');

    function handleNewTask(event) { 
        setNewTaskTxt(event.target.value)
    }


    function handleCreateNewTask(event) { 
        event.preventDefault();

        const NewTask = {
            id: Math.random(),
            content: newTaskTxt,
        }

        setTasks([...tasks, NewTask]);
        setNewTaskTxt('')

    }

    function deleteTask(id) {
        const taskWithoutDeletedOne = tasks.filter((task) => task.id !== id)

        setTasks(taskWithoutDeletedOne);
    }
    
    return (


        <Container>

            <header>
                <img src={info.task.imgUrl}/>
                <strong>{info.task.name}</strong>
            </header>
            
            
            <Content>
                {
                    info.content.map(res => {
                        return (
                            <div key={res.id}>
                                <p>{res.add}</p>
                            </div>
                        )
                    })
                }
            </Content>


            <Form onSubmit={handleCreateNewTask}>
                <strong>Digite sua tarefa</strong>
                <textarea
                    placeholder="Escreva a sua tarefa"
                    required
                    value={newTaskTxt}
                    onChange={handleNewTask}
                />

                <footer>
                    <button type="submit">Adicionar</button>
                </footer>
            </Form>



            <TaskList>
                {tasks.map(task => {
                    return (
                        <Task
                            key={task.id}
                            task={task}
                            onDeleteTask={deleteTask}                          
                        />                        
                    )
                })}
                
            </TaskList>
        </Container>
    )
}