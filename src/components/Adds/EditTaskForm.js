import React, { useState, useEffect } from 'react';

function EditTaskForm({ task, onSave, onCancel }) {
    const [formData, setFormData] = useState({ content: '', category: '', urgency: '' });

    useEffect(() => {
        if (task) {
            setFormData({ content: task.content, category: task.category, urgency: task.urgency });
        }
    }, [task]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSave(task.id, formData);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                name="content"
                value={formData.content}
                onChange={handleChange}
            />
            <input
                type="text"
                name="category"
                value={formData.category}
                onChange={handleChange}
            />
            <select
                name="urgency"
                value={formData.urgency}
                onChange={handleChange}
            >
                <option value="urgent">🚨 Urgent</option>
                <option value="nonUrgent">🚦 Non-Urgent</option>
                <option value="mildlyUrgent">⚠️ Mildly Urgent</option>
            </select>
            <button type="submit">Salvar</button>
            <button type="button" onClick={onCancel}>Cancelar</button>
        </form>
    );
}

export default EditTaskForm;
