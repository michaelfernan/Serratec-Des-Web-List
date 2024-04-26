import React, { useState } from "react";
import { Task } from "../Task";
import { TaskList, Container, Content, Form } from "./styled";

export function Adds({ info }) {
    const [tasks, setTasks] = useState([]);
    const [newTaskTxt, setNewTaskTxt] = useState('');
    const [taskCategory, setTaskCategory] = useState('');
    const [categories, setCategories] = useState([]);

    const tagOptions = [
        { value: 'urgent', icon: '🚨' },
        { value: 'nonUrgent', icon: '🚦' },
        { value: 'mildlyUrgent', icon: '⚠️' },
    ];

    const [selectedTag, setSelectedTag] = useState('');

    function handleNewTask(event) {
        setNewTaskTxt(event.target.value);
    }

    function handleCreateNewTask(event) {
        event.preventDefault();
        if (!newTaskTxt.trim() || !taskCategory || !selectedTag) return;

        const newTask = {
            id: Math.random(),
            content: newTaskTxt,
            category: taskCategory,
            urgency: selectedTag,
        };

        setTasks([...tasks, newTask]);
        setNewTaskTxt('');
        setTaskCategory('');
        setSelectedTag('');

        if (!categories.includes(taskCategory)) {
            setCategories([...categories, taskCategory]);
        }
    }

    function deleteTask(id) {
        setTasks(tasks.filter(task => task.id !== id));
    }

    const tasksByCategory = tasks.reduce((acc, task) => {
        (acc[task.category] = acc[task.category] || []).push(task);
        return acc;
    }, {});

    return (
        <Container>
            <header>
                <img src={info.task.imgUrl} alt="Task Image"/>
                <strong>{info.task.name}</strong>
            </header>

            <Content>
                {info.content.map(res => (
                    <div key={res.id}>
                        <p>{res.add}</p>
                    </div>
                ))}
            </Content>

            <Form onSubmit={handleCreateNewTask}>
                <strong>Digite sua tarefa</strong>
                <textarea
                    placeholder="Escreva a sua tarefa"
                    required
                    value={newTaskTxt}
                    onChange={handleNewTask}
                />
                <input
                    type="text"
                    placeholder="Digite a categoria"
                    value={taskCategory}
                    onChange={e => setTaskCategory(e.target.value)}
                    list="category-list"
                />
                <datalist id="category-list">
                    {categories.map((cat, index) => (
                        <option key={index} value={cat} />
                    ))}
                </datalist>
                <div>
                    {tagOptions.map(tag => (
                        <button
                            key={tag.value}
                            style={{
                                margin: '5px',
                                backgroundColor: selectedTag === tag.value ? 'lightgray' : 'transparent',
                                border: 'none',
                                fontSize: '24px'
                            }}
                            onClick={(e) => {
                                e.preventDefault();
                                setSelectedTag(tag.value);
                            }}
                        >
                            {tag.icon}
                        </button>
                    ))}
                </div>
                <footer>
                    <button type="submit">Adicionar</button>
                </footer>
            </Form>

            {Object.entries(tasksByCategory).map(([category, tasks]) => (
    <div key={category}>
        <h3>{category}</h3>
        <div style={{ display: 'flex', padding: '10px', background: '#f0f0f0', marginTop: '10px' }}>
            <strong style={{ flex: '0 0 40px', marginRight: '10px' }}>Concluído</strong>
            <strong style={{ flex: '2 0 200px', marginRight: '10px' }}>Descrição</strong>
            <strong style={{ flex: '1 0 100px', marginRight: '10px' }}>Categoria</strong>
            <strong style={{ flex: '0 0 40px', marginRight: '20px' }}>Prioridade</strong>
            <strong style={{ flex: '0 0 40px', marginRight: '20px' }}>Editar</strong>
            <strong style={{ flex: '0 0 40px' }}>Deletar</strong>
        </div>
        <TaskList>
            {tasks.map(task => (
                <Task
                    key={task.id}
                    task={task}
                    onDeleteTask={deleteTask}
                    urgencyIcon={tagOptions.find(tag => tag.value === task.urgency)?.icon}
                />
            ))}
        </TaskList>
    </div>
))}


        </Container>
    );
}
