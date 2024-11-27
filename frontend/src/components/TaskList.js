import React, { useEffect, useState } from 'react';
import api from '../services/axiosConfig';

const TaskList = () => {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        api.get('/tasks').then(response => {
            setTasks(response.data);
        }).catch(error => {
            console.error('Error fetching tasks:', error);
        });
    }, []);

    return (
        <div>
            <h2>Tasks</h2>
            <ul>
                {tasks.map(task => (
                    <li key={task.id}>
                        {task.title}: {task.description}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TaskList;
