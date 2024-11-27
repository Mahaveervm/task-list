import React, { useState } from 'react';
import api from '../services/axiosConfig';

const TaskForm = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = () => {
        api.post('/tasks', { title, description })
            .then(() => {
                setTitle('');
                setDescription('');
                alert('Task added successfully');
            })
            .catch(error => {
                console.error('Error adding task:', error);
            });
    };

    return (
        <div>
            <h2>Add Task</h2>
            <input
                type="text"
                placeholder="Title"
                value={title}
                onChange={e => setTitle(e.target.value)}
            />
            <textarea
                placeholder="Description"
                value={description}
                onChange={e => setDescription(e.target.value)}
            ></textarea>
            <button onClick={handleSubmit}>Add Task</button>
        </div>
    );
};

export default TaskForm;
